import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

interface ServiceItem {
  id: number;
  name: string;
  description: string;
  unit: string;
  qty: number;
  price: number;
}

const defaultServices: ServiceItem[] = [
  { id: 1, name: "Разработка веб-сайта", description: "Дизайн и вёрстка корпоративного сайта под ключ", unit: "шт.", qty: 1, price: 120000 },
  { id: 2, name: "SEO-оптимизация", description: "Техническая оптимизация и семантическое ядро", unit: "мес.", qty: 3, price: 25000 },
  { id: 3, name: "Техническая поддержка", description: "Ежемесячное сопровождение и обновление контента", unit: "мес.", qty: 6, price: 15000 },
];

function EditableField({ value, onChange, className = "", multiline = false, placeholder = "" }: {
  value: string; onChange: (v: string) => void; className?: string; multiline?: boolean; placeholder?: string;
}) {
  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`bg-transparent border-b border-transparent hover:border-[var(--kp-gold-light)] focus:border-[var(--kp-gold)] outline-none resize-none transition-colors duration-200 w-full ${className}`}
        rows={3}
      />
    );
  }
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`bg-transparent border-b border-transparent hover:border-[var(--kp-gold-light)] focus:border-[var(--kp-gold)] outline-none transition-colors duration-200 w-full ${className}`}
    />
  );
}

function formatMoney(n: number) {
  return n.toLocaleString("ru-RU") + " ₽";
}

export default function Index() {
  const printRef = useRef<HTMLDivElement>(null);

  const [companyName, setCompanyName] = useState("ООО «Профессиональные Решения»");
  const [companyTagline, setCompanyTagline] = useState("Комплексные бизнес-услуги высшего класса");
  const [kpNumber, setKpNumber] = useState("КП-2026-047");
  const [kpDate, setKpDate] = useState("28 мая 2026 г.");
  const [clientName, setClientName] = useState("ООО «Клиент»");
  const [clientContact, setClientContact] = useState("Иванову И.И.");
  const [introText, setIntroText] = useState("Уважаемый партнёр! Представляем Вашему вниманию настоящее коммерческое предложение на оказание профессиональных услуг. Мы уверены, что наше сотрудничество принесёт взаимную выгоду и долгосрочный результат.");

  const [services, setServices] = useState<ServiceItem[]>(defaultServices);

  const [deliveryDays, setDeliveryDays] = useState("30 рабочих дней");
  const [warranty, setWarranty] = useState("12 месяцев");
  const [paymentTerms, setPaymentTerms] = useState("50% аванс при подписании договора, 50% по факту выполнения работ");
  const [validUntil, setValidUntil] = useState("28 августа 2026 г.");
  const [extraTerms, setExtraTerms] = useState("Все работы выполняются в строгом соответствии с техническим заданием. При необходимости возможно поэтапное выполнение и отдельный график оплаты.");

  const [directorName, setDirectorName] = useState("Петров Александр Сергеевич");
  const [directorTitle, setDirectorTitle] = useState("Генеральный директор");
  const [phone, setPhone] = useState("+7 (495) 123-45-67");
  const [email, setEmail] = useState("info@company.ru");
  const [website, setWebsite] = useState("www.company.ru");
  const [inn, setInn] = useState("7701234567");
  const [ogrn, setOgrn] = useState("1027700000000");
  const [address, setAddress] = useState("г. Москва, ул. Деловая, д. 1, оф. 100");

  const [advantage1, setAdvantage1] = useState("10 лет на рынке");
  const [advantage2, setAdvantage2] = useState("Более 500 реализованных проектов");
  const [advantage3, setAdvantage3] = useState("Гарантия результата");
  const [advantage4, setAdvantage4] = useState("Персональный менеджер");

  const updateService = (id: number, field: keyof ServiceItem, value: string | number) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const addService = () => {
    const newId = Math.max(...services.map(s => s.id)) + 1;
    setServices(prev => [...prev, { id: newId, name: "Новая услуга", description: "Описание услуги", unit: "шт.", qty: 1, price: 0 }]);
  };

  const removeService = (id: number) => {
    if (services.length > 1) setServices(prev => prev.filter(s => s.id !== id));
  };

  const subtotal = services.reduce((acc, s) => acc + s.qty * s.price, 0);
  const vat = Math.round(subtotal * 0.2);
  const total = subtotal + vat;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[var(--kp-bg)] font-body">
      {/* Toolbar */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-[var(--kp-navy)] border-b border-[var(--kp-gold)]/30 px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--kp-gold)] animate-pulse" />
          <span className="text-[var(--kp-gold)] font-display text-sm tracking-widest uppercase">Режим редактирования</span>
          <span className="text-white/40 text-xs">— нажмите на любое поле для изменения</span>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-[var(--kp-gold)] hover:bg-[var(--kp-gold-light)] text-[var(--kp-navy)] font-display font-semibold text-sm px-5 py-2 tracking-wider uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(180,145,80,0.4)]"
        >
          <Icon name="Download" size={16} />
          Скачать PDF
        </button>
      </div>

      {/* Document */}
      <div ref={printRef} className="kp-document max-w-4xl mx-auto pt-20 pb-16 px-6 no-print:pt-24">

        {/* HEADER */}
        <div className="bg-[var(--kp-navy)] text-white px-10 py-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 border border-[var(--kp-gold)]/20 rounded-full translate-x-32 -translate-y-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 border border-[var(--kp-gold)]/10 rounded-full -translate-x-20 translate-y-20 pointer-events-none" />

          <div className="relative flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="text-[var(--kp-gold)] text-xs tracking-[0.3em] uppercase mb-2 font-display">Коммерческое предложение</div>
              <EditableField
                value={companyName}
                onChange={setCompanyName}
                className="font-display text-3xl font-bold text-white tracking-tight leading-tight"
              />
              <EditableField
                value={companyTagline}
                onChange={setCompanyTagline}
                className="text-white/60 text-sm mt-2 tracking-wide"
              />
            </div>
            <div className="text-right shrink-0">
              <div className="text-[var(--kp-gold)] font-display text-xl font-bold">
                <EditableField value={kpNumber} onChange={setKpNumber} className="text-right text-[var(--kp-gold)] font-display text-xl font-bold" />
              </div>
              <div className="text-white/50 text-sm mt-1">
                <EditableField value={kpDate} onChange={setKpDate} className="text-right text-white/50 text-sm" />
              </div>
            </div>
          </div>

          <div className="relative mt-6 pt-6 border-t border-[var(--kp-gold)]/30">
            <div className="text-xs text-white/40 tracking-widest uppercase mb-1">Кому:</div>
            <div className="flex gap-6">
              <div>
                <EditableField value={clientName} onChange={setClientName} className="text-white/90 font-semibold" />
              </div>
              <div>
                <EditableField value={clientContact} onChange={setClientContact} className="text-white/60" />
              </div>
            </div>
          </div>
        </div>

        {/* GOLD DIVIDER */}
        <div className="h-1 bg-gradient-to-r from-[var(--kp-gold)] via-[var(--kp-gold-light)] to-[var(--kp-gold)]" />

        {/* INTRO */}
        <div className="bg-white px-10 py-8 border-b border-[var(--kp-line)]">
          <EditableField
            value={introText}
            onChange={setIntroText}
            multiline
            className="text-[var(--kp-text)] leading-relaxed text-sm"
          />
        </div>

        {/* ADVANTAGES */}
        <div className="bg-[var(--kp-navy-light)] px-10 py-6 border-b border-[var(--kp-line)]">
          <div className="text-[var(--kp-gold)] text-xs tracking-[0.25em] uppercase font-display mb-4">Почему выбирают нас</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: advantage1, onChange: setAdvantage1, icon: "Award" },
              { value: advantage2, onChange: setAdvantage2, icon: "TrendingUp" },
              { value: advantage3, onChange: setAdvantage3, icon: "Shield" },
              { value: advantage4, onChange: setAdvantage4, icon: "UserCheck" },
            ].map((adv, i) => (
              <div key={i} className="flex items-start gap-2">
                <Icon name={adv.icon as "Award"} size={16} className="text-[var(--kp-gold)] mt-0.5 shrink-0" />
                <EditableField value={adv.value} onChange={adv.onChange} className="text-white/80 text-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES TABLE */}
        <div className="bg-white px-10 py-8 border-b border-[var(--kp-line)]">
          <div className="flex items-center justify-between mb-5">
            <div className="text-[var(--kp-navy)] font-display text-lg font-bold tracking-wide uppercase">Состав предложения</div>
            <button
              onClick={addService}
              className="no-print flex items-center gap-1 text-[var(--kp-gold)] hover:text-[var(--kp-navy)] text-xs tracking-wider uppercase transition-colors duration-200 border border-[var(--kp-gold)] px-3 py-1.5 hover:bg-[var(--kp-gold)]"
            >
              <Icon name="Plus" size={12} />
              Добавить строку
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-[var(--kp-navy)]">
                <th className="text-left py-2 pr-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase w-8">№</th>
                <th className="text-left py-2 pr-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase">Наименование</th>
                <th className="text-center py-2 px-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase w-16">Ед.</th>
                <th className="text-center py-2 px-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase w-16">Кол-во</th>
                <th className="text-right py-2 pl-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase w-32">Цена</th>
                <th className="text-right py-2 pl-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase w-32">Сумма</th>
                <th className="no-print w-8" />
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={s.id} className="border-b border-[var(--kp-line)] hover:bg-[var(--kp-bg-hover)] group transition-colors duration-150">
                  <td className="py-3 pr-3 text-[var(--kp-muted)] text-xs">{i + 1}</td>
                  <td className="py-3 pr-3">
                    <EditableField value={s.name} onChange={(v) => updateService(s.id, "name", v)} className="font-semibold text-[var(--kp-navy)] mb-0.5" />
                    <EditableField value={s.description} onChange={(v) => updateService(s.id, "description", v)} className="text-[var(--kp-muted)] text-xs" />
                  </td>
                  <td className="py-3 px-3 text-center">
                    <EditableField value={s.unit} onChange={(v) => updateService(s.id, "unit", v)} className="text-[var(--kp-muted)] text-center text-xs" />
                  </td>
                  <td className="py-3 px-3 text-center">
                    <input
                      type="number"
                      min={1}
                      value={s.qty}
                      onChange={(e) => updateService(s.id, "qty", Number(e.target.value))}
                      className="bg-transparent border-b border-transparent hover:border-[var(--kp-gold-light)] focus:border-[var(--kp-gold)] outline-none w-full text-center text-[var(--kp-text)] transition-colors duration-200"
                    />
                  </td>
                  <td className="py-3 pl-3 text-right">
                    <input
                      type="number"
                      min={0}
                      value={s.price}
                      onChange={(e) => updateService(s.id, "price", Number(e.target.value))}
                      className="bg-transparent border-b border-transparent hover:border-[var(--kp-gold-light)] focus:border-[var(--kp-gold)] outline-none w-full text-right text-[var(--kp-text)] transition-colors duration-200"
                    />
                  </td>
                  <td className="py-3 pl-3 text-right font-semibold text-[var(--kp-navy)]">
                    {formatMoney(s.qty * s.price)}
                  </td>
                  <td className="no-print py-3 pl-2">
                    <button
                      onClick={() => removeService(s.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-600"
                    >
                      <Icon name="Trash2" size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="mt-6 flex justify-end">
            <div className="w-72">
              <div className="flex justify-between py-2 text-sm text-[var(--kp-muted)] border-b border-[var(--kp-line)]">
                <span>Подытог (без НДС)</span>
                <span className="font-semibold text-[var(--kp-text)]">{formatMoney(subtotal)}</span>
              </div>
              <div className="flex justify-between py-2 text-sm text-[var(--kp-muted)] border-b border-[var(--kp-line)]">
                <span>НДС 20%</span>
                <span className="font-semibold text-[var(--kp-text)]">{formatMoney(vat)}</span>
              </div>
              <div className="flex justify-between py-3 text-base font-bold bg-[var(--kp-navy)] text-white px-4 mt-2">
                <span className="font-display tracking-wide uppercase text-sm">Итого к оплате</span>
                <span className="text-[var(--kp-gold)]">{formatMoney(total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* TERMS */}
        <div className="bg-white px-10 py-8 border-b border-[var(--kp-line)]">
          <div className="text-[var(--kp-navy)] font-display text-lg font-bold tracking-wide uppercase mb-6">Условия сотрудничества</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Срок выполнения", value: deliveryDays, onChange: setDeliveryDays, icon: "Clock" },
              { label: "Гарантийный период", value: warranty, onChange: setWarranty, icon: "ShieldCheck" },
              { label: "Условия оплаты", value: paymentTerms, onChange: setPaymentTerms, icon: "CreditCard" },
              { label: "Предложение действительно до", value: validUntil, onChange: setValidUntil, icon: "Calendar" },
            ].map((term, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 bg-[var(--kp-navy)]/10 flex items-center justify-center shrink-0">
                  <Icon name={term.icon as "Clock"} size={16} className="text-[var(--kp-navy)]" />
                </div>
                <div className="flex-1">
                  <div className="text-[var(--kp-muted)] text-xs tracking-widest uppercase mb-1">{term.label}</div>
                  <EditableField value={term.value} onChange={term.onChange} className="text-[var(--kp-navy)] font-semibold text-sm" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--kp-line)]">
            <div className="text-[var(--kp-muted)] text-xs tracking-widest uppercase mb-2">Дополнительные условия</div>
            <EditableField value={extraTerms} onChange={setExtraTerms} multiline className="text-[var(--kp-text)] text-sm leading-relaxed" />
          </div>
        </div>

        {/* FOOTER / CONTACTS */}
        <div className="bg-[var(--kp-navy)] text-white px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-[var(--kp-gold)] text-xs tracking-[0.25em] uppercase font-display mb-4">Контактная информация</div>
              {[
                { icon: "Phone", value: phone, onChange: setPhone },
                { icon: "Mail", value: email, onChange: setEmail },
                { icon: "Globe", value: website, onChange: setWebsite },
                { icon: "MapPin", value: address, onChange: setAddress },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <Icon name={c.icon as "Phone"} size={15} className="text-[var(--kp-gold)] shrink-0" />
                  <EditableField value={c.value} onChange={c.onChange} className="text-white/80 text-sm" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-[var(--kp-gold)] text-xs tracking-[0.25em] uppercase font-display mb-4">Реквизиты</div>
              {[
                { label: "ИНН", value: inn, onChange: setInn },
                { label: "ОГРН", value: ogrn, onChange: setOgrn },
              ].map((r, i) => (
                <div key={i} className="flex gap-4 mb-3">
                  <span className="text-white/40 text-xs tracking-widest uppercase w-12">{r.label}</span>
                  <EditableField value={r.value} onChange={r.onChange} className="text-white/80 text-sm" />
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-[var(--kp-gold)]/20">
                <div className="text-white/40 text-xs tracking-widest uppercase mb-2">Подпись уполномоченного лица</div>
                <EditableField value={directorTitle} onChange={setDirectorTitle} className="text-white/60 text-xs" />
                <EditableField value={directorName} onChange={setDirectorName} className="text-white font-semibold mt-1" />
                <div className="mt-4 border-b border-white/20 w-48" />
                <div className="text-white/30 text-xs mt-1">подпись / дата</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--kp-gold)]/20 flex items-center justify-between">
            <div className="text-white/30 text-xs">Документ создан в цифровом формате и имеет юридическую силу</div>
            <div className="text-[var(--kp-gold)] font-display text-sm font-bold tracking-widest">{kpNumber}</div>
          </div>
        </div>

      </div>
    </div>
  );
}
