import { useState } from "react";
import Icon from "@/components/ui/icon";

type Lang = "ru" | "en" | "hi";

// ─── Translations ────────────────────────────────────────────────────────────
const T = {
  ru: {
    fontClass: "font-body",
    badge: "Коммерческое предложение",
    editMode: "Режим редактирования",
    editHint: "— нажмите на любое поле для изменения",
    downloadPdf: "Скачать PDF",
    toWhom: "Кому:",
    whyUs: "Почему выбирают нас",
    composition: "Состав предложения",
    addRow: "Добавить строку",
    unit: "Ед.",
    qty: "Кол-во",
    price: "Цена",
    sum: "Сумма",
    subtotal: "Подытог (без НДС)",
    vat: "НДС 20%",
    total: "Итого к оплате",
    terms: "Условия сотрудничества",
    deliveryLabel: "Срок поставки",
    warrantyLabel: "Гарантийный период",
    paymentLabel: "Условия оплаты",
    validLabel: "Предложение действительно до",
    extraLabel: "Дополнительные условия",
    contacts: "Контактная информация",
    requisites: "Реквизиты",
    signatureLabel: "Подпись уполномоченного лица",
    signatureSub: "подпись / дата",
    legalNote: "Документ создан в цифровом формате и имеет юридическую силу",
    advantages: ["10 лет на рынке", "Более 500 сделок", "Гарантия качества", "Персональный менеджер"],
    companyName: "ООО «РЕАЛ ГРУПП»",
    tagline: "Поставки меди — цены ниже рынка LME",
    kpNumber: "КП-2026-001",
    kpDate: "28 мая 2026 г.",
    clientName: "Finolex Cables Ltd.",
    clientContact: "Директору по закупкам",
    intro: "Уважаемые партнёры! ООО «РЕАЛ ГРУПП» предлагает Вашему вниманию настоящее коммерческое предложение на поставку меди высокой степени очистки. Наши цены ниже биржевых котировок LME, а условия сотрудничества — максимально гибкие. Готовы рассмотреть долгосрочный контракт.",
    services: [
      { id: 1, name: "Медь катодная М00К", description: "ГОСТ 859-2014, чистота Cu ≥ 99,99%", unit: "тн", qty: 2000 },
      { id: 2, name: "Медная катанка 8 мм", description: "ГОСТ 53803-2010, Cu ≥ 99,9%", unit: "тн", qty: 2000 },
      { id: 3, name: "Медная шина / полоса", description: "ГОСТ 434-78, различные сечения", unit: "тн", qty: 2000 },
    ],
    delivery: "Согласно договору",
    warranty: "Сертификат качества на каждую партию",
    payment: "Согласно договору",
    validUntil: "28 августа 2026 г.",
    extra: "Цена фиксируется на дату подписания договора. Возможна поставка DDP, CIF, FOB по согласованию. Минимальная партия — 20 тонн.",
    directorTitle: "Генеральный директор",
    directorName: "Погосян Эрик",
    phone: "+7 933 000-07-02",
    email: "REAL.GROUP2020@MAIL.RU",
    website: "realgroup.pw",
    address: "г. Москва, ул. Металлургов, д. 12, оф. 301",
    inn: "9724242160",
    ogrn: "1267700177029",
  },
  en: {
    fontClass: "font-body",
    badge: "Commercial Offer",
    editMode: "Edit Mode",
    editHint: "— click any field to change",
    downloadPdf: "Download PDF",
    toWhom: "To:",
    whyUs: "Why Choose Us",
    composition: "Offer Details",
    addRow: "Add row",
    unit: "Unit",
    qty: "Qty",
    price: "Price",
    sum: "Amount",
    subtotal: "Subtotal (excl. VAT)",
    vat: "VAT 20%",
    total: "Total Payable",
    terms: "Terms & Conditions",
    deliveryLabel: "Delivery Time",
    warrantyLabel: "Quality Guarantee",
    paymentLabel: "Payment Terms",
    validLabel: "Offer Valid Until",
    extraLabel: "Additional Terms",
    contacts: "Contact Information",
    requisites: "Company Details",
    signatureLabel: "Authorised Signatory",
    signatureSub: "signature / date",
    legalNote: "This document is created in digital format and has legal validity",
    advantages: ["10 years in market", "500+ deals closed", "Quality certified", "Dedicated manager"],
    companyName: "REAL GROUP LLC",
    tagline: "Copper supply — below LME market price",
    kpNumber: "CO-2026-001",
    kpDate: "May 28, 2026",
    clientName: "Finolex Cables Ltd.",
    clientContact: "Head of Procurement",
    intro: "Dear Partners, REAL GROUP LLC is pleased to present this commercial offer for the supply of high-purity copper. Our prices are below LME exchange quotes and cooperation terms are highly flexible. We are ready to consider a long-term supply contract.",
    services: [
      { id: 1, name: "Copper Cathode M00K", description: "GOST 859-2014, Cu purity ≥ 99.99%", unit: "MT", qty: 2000 },
      { id: 2, name: "Copper Rod 8mm", description: "GOST 53803-2010, Cu ≥ 99.9%", unit: "MT", qty: 2000 },
      { id: 3, name: "Copper Bus / Strip", description: "GOST 434-78, various cross-sections", unit: "MT", qty: 2000 },
    ],
    delivery: "As per contract",
    warranty: "Quality certificate for each batch",
    payment: "As per contract",
    validUntil: "August 28, 2026",
    extra: "Price is fixed at contract signing date. DDP, CIF, FOB delivery available by agreement. Minimum order — 20 metric tons.",
    directorTitle: "General Director",
    directorName: "Erik Pogosyan",
    phone: "+7 933 000-07-02",
    email: "REAL.GROUP2020@MAIL.RU",
    website: "realgroup.pw",
    address: "Moscow, Russia",
    inn: "TIN: 9724242160",
    ogrn: "OGRN: 1267700177029",
  },
  hi: {
    fontClass: "font-devanagari",
    badge: "वाणिज्यिक प्रस्ताव",
    editMode: "संपादन मोड",
    editHint: "— किसी भी फ़ील्ड पर क्लिक करें",
    downloadPdf: "PDF डाउनलोड करें",
    toWhom: "प्रति:",
    whyUs: "हमें क्यों चुनें",
    composition: "प्रस्ताव विवरण",
    addRow: "पंक्ति जोड़ें",
    unit: "इकाई",
    qty: "मात्रा",
    price: "मूल्य",
    sum: "राशि",
    subtotal: "उप-कुल (GST रहित)",
    vat: "GST 18%",
    total: "कुल देय राशि",
    terms: "सहयोग की शर्तें",
    deliveryLabel: "डिलीवरी समय",
    warrantyLabel: "गुणवत्ता गारंटी",
    paymentLabel: "भुगतान की शर्तें",
    validLabel: "प्रस्ताव वैध है तक",
    extraLabel: "अतिरिक्त शर्तें",
    contacts: "संपर्क जानकारी",
    requisites: "कंपनी विवरण",
    signatureLabel: "अधिकृत हस्ताक्षरकर्ता",
    signatureSub: "हस्ताक्षर / तारीख",
    legalNote: "यह दस्तावेज़ डिजिटल प्रारूप में बनाया गया है और कानूनी रूप से वैध है",
    advantages: ["बाज़ार में 10 वर्ष", "500+ सौदे पूर्ण", "गुणवत्ता प्रमाणित", "समर्पित प्रबंधक"],
    companyName: "REAL GROUP LLC",
    tagline: "तांबा आपूर्ति — LME बाज़ार मूल्य से कम",
    kpNumber: "CO-2026-001",
    kpDate: "28 मई 2026",
    clientName: "Finolex Cables Ltd.",
    clientContact: "खरीद प्रमुख",
    intro: "प्रिय साझेदारों, REAL GROUP LLC आपको उच्च शुद्धता वाले तांबे की आपूर्ति के लिए यह वाणिज्यिक प्रस्ताव प्रस्तुत करता है। हमारी कीमतें LME एक्सचेंज कोटेशन से कम हैं और सहयोग की शर्तें अत्यंत लचीली हैं। हम दीर्घकालिक आपूर्ति अनुबंध पर विचार करने के लिए तैयार हैं।",
    services: [
      { id: 1, name: "कॉपर कैथोड M00K", description: "GOST 859-2014, Cu शुद्धता ≥ 99.99%", unit: "MT", qty: 2000 },
      { id: 2, name: "कॉपर रॉड 8mm", description: "GOST 53803-2010, Cu ≥ 99.9%", unit: "MT", qty: 2000 },
      { id: 3, name: "कॉपर बस / स्ट्रिप", description: "GOST 434-78, विभिन्न खंड", unit: "MT", qty: 2000 },
    ],
    delivery: "अनुबंध के अनुसार",
    warranty: "प्रत्येक बैच के लिए गुणवत्ता प्रमाण पत्र",
    payment: "अनुबंध के अनुसार",
    validUntil: "28 अगस्त 2026",
    extra: "अनुबंध हस्ताक्षर की तारीख पर मूल्य निश्चित होता है। DDP, CIF, FOB डिलीवरी उपलब्ध। न्यूनतम ऑर्डर — 20 मीट्रिक टन।",
    directorTitle: "महानिदेशक",
    directorName: "Erik Pogosyan",
    phone: "+7 933 000-07-02",
    email: "REAL.GROUP2020@MAIL.RU",
    website: "realgroup.pw",
    address: "मॉस्को, रूस",
    inn: "TIN: 9724242160",
    ogrn: "OGRN: 1267700177029",
  },
};

interface ServiceItem { id: number; name: string; description: string; unit: string; qty: number; }
type LangFields = typeof T.ru & { services: ServiceItem[] };

function EditableField({ value, onChange, className = "", multiline = false }: {
  value: string; onChange: (v: string) => void; className?: string; multiline?: boolean;
}) {
  if (multiline) {
    return (
      <textarea value={value} onChange={(e) => onChange(e.target.value)}
        className={`bg-transparent border-b border-transparent hover:border-[var(--kp-gold-light)] focus:border-[var(--kp-gold)] outline-none resize-none transition-colors duration-200 w-full ${className}`}
        rows={3} />
    );
  }
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)}
      className={`bg-transparent border-b border-transparent hover:border-[var(--kp-gold-light)] focus:border-[var(--kp-gold)] outline-none transition-colors duration-200 w-full ${className}`} />
  );
}

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");

  const [fields, setFields] = useState<Record<Lang, LangFields>>({
    ru: { ...T.ru, services: T.ru.services.map(s => ({ ...s })) },
    en: { ...T.en, services: T.en.services.map(s => ({ ...s })) },
    hi: { ...T.hi, services: T.hi.services.map(s => ({ ...s })) },
  });

  const f = fields[lang];
  const t = T[lang];

  const setF = (key: string, value: string) =>
    setFields(prev => ({ ...prev, [lang]: { ...prev[lang], [key]: value } }));

  const setAdv = (i: number, value: string) =>
    setFields(prev => {
      const adv = [...prev[lang].advantages];
      adv[i] = value;
      return { ...prev, [lang]: { ...prev[lang], advantages: adv } };
    });

  const updateService = (id: number, field: keyof ServiceItem, value: string | number) =>
    setFields(prev => ({
      ...prev, [lang]: {
        ...prev[lang],
        services: prev[lang].services.map(s => s.id === id ? { ...s, [field]: value } : s),
      },
    }));

  const addService = () => {
    const newId = Math.max(...f.services.map(s => s.id)) + 1;
    setFields(prev => ({
      ...prev, [lang]: {
        ...prev[lang],
        services: [...prev[lang].services, { id: newId, name: "—", description: "—", unit: "MT", qty: 2000 }],
      },
    }));
  };

  const removeService = (id: number) => {
    if (f.services.length > 1)
      setFields(prev => ({ ...prev, [lang]: { ...prev[lang], services: prev[lang].services.filter(s => s.id !== id) } }));
  };



  const langLabels = [
    { id: "ru" as Lang, label: "РУС", flag: "🇷🇺" },
    { id: "en" as Lang, label: "ENG", flag: "🇬🇧" },
    { id: "hi" as Lang, label: "हिंदी", flag: "🇮🇳" },
  ];

  const advIcons = ["Award", "TrendingUp", "ShieldCheck", "UserCheck"];
  const contactFields = [
    { icon: "Phone", key: "phone" },
    { icon: "Mail", key: "email" },
    { icon: "Globe", key: "website" },
    { icon: "MapPin", key: "address" },
  ];
  const termFields = [
    { label: t.deliveryLabel, key: "delivery", icon: "Truck" },
    { label: t.warrantyLabel, key: "warranty", icon: "ShieldCheck" },
    { label: t.paymentLabel, key: "payment", icon: "CreditCard" },
    { label: t.validLabel, key: "validUntil", icon: "Calendar" },
  ];

  return (
    <div className={`min-h-screen bg-[var(--kp-bg)] ${f.fontClass}`}>

      {/* ── Toolbar ── */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-[var(--kp-navy)] border-b border-[var(--kp-gold)]/30 px-4 md:px-6 py-3 flex items-center justify-between shadow-lg gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-2 h-2 rounded-full bg-[var(--kp-gold)] animate-pulse shrink-0" />
          <span className="text-[var(--kp-gold)] font-display text-sm tracking-widest uppercase truncate">{t.editMode}</span>
          <span className="text-white/40 text-xs hidden lg:inline shrink-0">{t.editHint}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {/* Language switcher */}
          <div className="flex border border-[var(--kp-gold)]/30 overflow-hidden">
            {langLabels.map(l => (
              <button key={l.id} onClick={() => setLang(l.id)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-1
                  ${lang === l.id ? "bg-[var(--kp-gold)] text-[var(--kp-navy)]" : "text-white/60 hover:text-white hover:bg-white/10"}`}>
                <span>{l.flag}</span>
                <span className="hidden sm:inline">{l.label}</span>
              </button>
            ))}
          </div>
          <button onClick={() => window.print()}
            className="flex items-center gap-2 bg-[var(--kp-gold)] hover:bg-[var(--kp-gold-light)] text-[var(--kp-navy)] font-display font-semibold text-sm px-4 py-2 tracking-wider uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(180,145,80,0.4)]">
            <Icon name="Download" size={16} />
            <span className="hidden sm:inline">{t.downloadPdf}</span>
          </button>
        </div>
      </div>

      {/* ── Document ── */}
      <div className="kp-document max-w-4xl mx-auto pt-20 pb-16 px-4 md:px-6">

        {/* HEADER */}
        <div className="bg-[var(--kp-navy)] text-white px-6 md:px-10 py-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 border border-[var(--kp-gold)]/20 rounded-full translate-x-32 -translate-y-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 border border-[var(--kp-gold)]/10 rounded-full -translate-x-20 translate-y-20 pointer-events-none" />
          <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--kp-gold)]/40 to-transparent pointer-events-none" />

          <div className="relative flex items-start justify-between gap-6 flex-wrap">
            <div className="flex-1 min-w-48">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-[var(--kp-gold)] flex items-center justify-center shrink-0">
                  <Icon name="Zap" size={13} className="text-[var(--kp-navy)]" />
                </div>
                <div className="text-[var(--kp-gold)] text-xs tracking-[0.3em] uppercase font-display">{t.badge}</div>
              </div>
              <EditableField value={f.companyName} onChange={(v) => setF("companyName", v)}
                className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight" />
              <EditableField value={f.tagline} onChange={(v) => setF("tagline", v)}
                className="text-white/60 text-sm mt-2 tracking-wide" />
            </div>
            <div className="text-right shrink-0">
              <EditableField value={f.kpNumber} onChange={(v) => setF("kpNumber", v)}
                className="text-right text-[var(--kp-gold)] font-display text-xl font-bold" />
              <EditableField value={f.kpDate} onChange={(v) => setF("kpDate", v)}
                className="text-right text-white/50 text-sm mt-1" />
            </div>
          </div>

          <div className="relative mt-6 pt-6 border-t border-[var(--kp-gold)]/30">
            <div className="text-xs text-white/40 tracking-widest uppercase mb-2">{t.toWhom}</div>
            <div className="flex gap-6 flex-wrap">
              <EditableField value={f.clientName} onChange={(v) => setF("clientName", v)}
                className="text-white/90 font-semibold text-lg" />
              <EditableField value={f.clientContact} onChange={(v) => setF("clientContact", v)}
                className="text-white/60" />
            </div>
          </div>
        </div>

        {/* GOLD DIVIDER */}
        <div className="h-1 bg-gradient-to-r from-[var(--kp-gold)] via-[var(--kp-gold-light)] to-[var(--kp-gold)]" />

        {/* INTRO */}
        <div className="bg-white px-6 md:px-10 py-8 border-b border-[var(--kp-line)]">
          <EditableField value={f.intro} onChange={(v) => setF("intro", v)} multiline
            className="text-[var(--kp-text)] leading-relaxed text-sm" />
        </div>

        {/* ADVANTAGES */}
        <div className="bg-[var(--kp-navy-light)] px-6 md:px-10 py-6 border-b border-[var(--kp-line)]">
          <div className="text-[var(--kp-gold)] text-xs tracking-[0.25em] uppercase font-display mb-4">{t.whyUs}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advIcons.map((icon, i) => (
              <div key={i} className="flex items-start gap-2">
                <Icon name={icon as "Award"} size={16} className="text-[var(--kp-gold)] mt-0.5 shrink-0" />
                <EditableField value={f.advantages[i]} onChange={(v) => setAdv(i, v)} className="text-white/80 text-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES TABLE */}
        <div className="bg-white px-6 md:px-10 py-8 border-b border-[var(--kp-line)]">
          <div className="flex items-center justify-between mb-5">
            <div className="text-[var(--kp-navy)] font-display text-lg font-bold tracking-wide uppercase">{t.composition}</div>
            <button onClick={addService}
              className="no-print flex items-center gap-1 text-[var(--kp-gold)] hover:text-[var(--kp-navy)] text-xs tracking-wider uppercase transition-colors duration-200 border border-[var(--kp-gold)] px-3 py-1.5 hover:bg-[var(--kp-gold)]">
              <Icon name="Plus" size={12} />
              {t.addRow}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b-2 border-[var(--kp-navy)]">
                  <th className="text-left py-2 pr-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase w-8">№</th>
                  <th className="text-left py-2 pr-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase">{t.composition}</th>
                  <th className="text-center py-2 px-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase w-16">{t.unit}</th>
                  <th className="text-center py-2 px-3 text-[var(--kp-navy)] font-display text-xs tracking-widest uppercase w-32">{t.qty}</th>
                  <th className="no-print w-8" />
                </tr>
              </thead>
              <tbody>
                {f.services.map((s, i) => (
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
                      <input type="number" min={1} value={s.qty}
                        onChange={(e) => updateService(s.id, "qty", Number(e.target.value))}
                        className="bg-transparent border-b border-transparent hover:border-[var(--kp-gold-light)] focus:border-[var(--kp-gold)] outline-none w-full text-center text-[var(--kp-text)] font-semibold transition-colors duration-200" />
                    </td>
                    <td className="no-print py-3 pl-2">
                      <button onClick={() => removeService(s.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-600">
                        <Icon name="Trash2" size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>

        {/* TERMS */}
        <div className="bg-white px-6 md:px-10 py-8 border-b border-[var(--kp-line)]">
          <div className="text-[var(--kp-navy)] font-display text-lg font-bold tracking-wide uppercase mb-6">{t.terms}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {termFields.map((term) => (
              <div key={term.key} className="flex gap-3">
                <div className="w-8 h-8 bg-[var(--kp-navy)]/10 flex items-center justify-center shrink-0">
                  <Icon name={term.icon as "Truck"} size={16} className="text-[var(--kp-navy)]" />
                </div>
                <div className="flex-1">
                  <div className="text-[var(--kp-muted)] text-xs tracking-widest uppercase mb-1">{term.label}</div>
                  <EditableField value={(f as Record<string, string>)[term.key]} onChange={(v) => setF(term.key, v)}
                    className="text-[var(--kp-navy)] font-semibold text-sm" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--kp-line)]">
            <div className="text-[var(--kp-muted)] text-xs tracking-widest uppercase mb-2">{t.extraLabel}</div>
            <EditableField value={f.extra} onChange={(v) => setF("extra", v)} multiline
              className="text-[var(--kp-text)] text-sm leading-relaxed" />
          </div>
        </div>

        {/* FOOTER / CONTACTS */}
        <div className="bg-[var(--kp-navy)] text-white px-6 md:px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-[var(--kp-gold)] text-xs tracking-[0.25em] uppercase font-display mb-4">{t.contacts}</div>
              {contactFields.map((c) => (
                <div key={c.key} className="flex items-center gap-3 mb-3">
                  <Icon name={c.icon as "Phone"} size={15} className="text-[var(--kp-gold)] shrink-0" />
                  <EditableField value={(f as Record<string, string>)[c.key]} onChange={(v) => setF(c.key, v)}
                    className="text-white/80 text-sm" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-[var(--kp-gold)] text-xs tracking-[0.25em] uppercase font-display mb-4">{t.requisites}</div>
              {[{ label: "INN / ИНН", key: "inn" }, { label: "OGRN / ОГРН", key: "ogrn" }].map((r) => (
                <div key={r.key} className="flex gap-4 mb-3">
                  <span className="text-white/40 text-xs tracking-widest uppercase w-24 shrink-0">{r.label}</span>
                  <EditableField value={(f as Record<string, string>)[r.key]} onChange={(v) => setF(r.key, v)}
                    className="text-white/80 text-sm" />
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-[var(--kp-gold)]/20">
                <EditableField value={f.directorTitle} onChange={(v) => setF("directorTitle", v)} className="text-white/60 text-xs" />
                <EditableField value={f.directorName} onChange={(v) => setF("directorName", v)} className="text-white font-semibold mt-1" />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--kp-gold)]/20 flex items-center justify-between flex-wrap gap-2">
            <div className="text-white/30 text-xs">{t.legalNote}</div>
            <div className="text-[var(--kp-gold)] font-display text-sm font-bold tracking-widest">{f.kpNumber}</div>
          </div>
        </div>

      </div>
    </div>
  );
}