import type { Source } from "@/lib/content/types";

export const S = {
  sbp: { label: "State Bank of Pakistan", href: "https://www.sbp.org.pk" },
  rda: {
    label: "SBP: Roshan Digital Accounts",
    href: "https://www.sbp.org.pk/our-operations/roshan-digital-accounts",
  },
  rdaFaq: {
    label: "SBP: Roshan Digital Account FAQs",
    href: "https://www.sbp.org.pk/faqs/faqs-roshan-digital-account",
  },
  fbr: { label: "Federal Board of Revenue", href: "https://www.fbr.gov.pk" },
  beoe: { label: "Bureau of Emigration and Overseas Employment", href: "https://beoe.gov.pk" },
  fia: { label: "Federal Investigation Agency", href: "https://www.fia.gov.pk" },
  mohre: { label: "UAE Ministry of Human Resources (MOHRE)", href: "https://www.mohre.gov.ae" },
  uae: { label: "UAE Government portal (u.ae)", href: "https://u.ae" },
  icp: { label: "ICP — identity, citizenship, visas", href: "https://icp.gov.ae" },
  gdrfa: { label: "GDRFA Dubai", href: "https://www.gdrfad.gov.ae" },
  cbuae: { label: "Central Bank of the UAE", href: "https://www.centralbank.ae" },
  hrsd: { label: "Saudi Ministry of Human Resources (HRSD)", href: "https://www.hrsd.gov.sa" },
  absher: { label: "Absher", href: "https://www.absher.sa" },
  muqeem: { label: "Muqeem", href: "https://muqeem.sa" },
  qiwa: { label: "Qiwa", href: "https://www.qiwa.sa" },
  mofa: { label: "Saudi Ministry of Foreign Affairs", href: "https://www.mofa.gov.sa" },
  visitsaudi: { label: "Official Saudi tourist visa site", href: "https://visa.visitsaudi.com" },
  sama: { label: "Saudi Central Bank (SAMA)", href: "https://www.sama.gov.sa" },
  boe: { label: "Saudi Bureau of Experts (laws)", href: "https://laws.boe.gov.sa" },
  wafid: { label: "Wafid medical portal", href: "https://wafid.com" },
  scfhs: { label: "Saudi Commission for Health Specialties", href: "https://www.scfhs.org.sa" },
  moiqa: { label: "Qatar Ministry of Interior", href: "https://portal.moi.gov.qa" },
  moikw: { label: "Kuwait Ministry of Interior", href: "https://www.moi.gov.kw" },
  rop: { label: "Royal Oman Police", href: "https://www.rop.gov.om" },
  evisabh: { label: "Bahrain eVisa", href: "https://www.evisa.gov.bh" },
  lmra: { label: "Bahrain Labour Market Regulatory Authority", href: "https://www.lmra.gov.bh" },
  nusuk: { label: "Nusuk", href: "https://www.nusuk.sa" },
  hajjPolicy: {
    label: "Hajj Policy and Plan 2027–2030 (PDF)",
    href: "https://www.mora.gov.pk/SiteImage/Misc/files/270726_HajjPolicy2027-30(1).pdf",
  },
  hajjPolicies: {
    label: "MoRA Hajj policies",
    href: "https://www.mora.gov.pk/Detail/N2YzYjlmM2UtZTQxNi00ZDBlLTllNjQtMTZiMDYyYzhhNzlk",
  },
  hajjPortal: { label: "Pak Hajj portal", href: "https://hajj.mora.gov.pk" },
  hajMinistry: { label: "Saudi Ministry of Hajj and Umrah", href: "https://haj.gov.sa/en" },
  mora: { label: "Pakistan Ministry of Religious Affairs", href: "https://www.mora.gov.pk" },
  emirates: { label: "Emirates baggage and fares", href: "https://www.emirates.com" },
  flydubai: { label: "flydubai", href: "https://www.flydubai.com" },
  airarabia: { label: "Air Arabia", href: "https://www.airarabia.com" },
  pia: { label: "PIA", href: "https://www.piac.com.pk" },
  saudia: { label: "Saudia", href: "https://www.saudia.com" },
  airblue: { label: "airblue", href: "https://www.airblue.com" },
} satisfies Record<string, Source>;

export const feeNote = {
  t: "note" as const,
  text: "Fees, fines and salary thresholds change. If a number is not written on the official page linked below, treat a WhatsApp figure as unchecked.",
};
