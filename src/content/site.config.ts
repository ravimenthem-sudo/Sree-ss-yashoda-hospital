// ============================================================
// SREE SS YASHODA HOSPITAL — Site Configuration
// All content lives here. Components never hardcode data.
// ============================================================

export const siteConfig = {
  name: 'Sree SS Yashoda Hospital',
  shortName: 'Yashoda Hospital',
  tagline: 'Compassionate Care. Trusted Expertise.',
  logoTagline: 'We treat with care & comfort',
  description:
    'Sree SS Yashoda Hospital is a 52-bed specialist healthcare facility in Anantapur, Andhra Pradesh, offering General Surgery, Laparoscopic Surgery, Gynaecology, Urology, Orthopaedics, ENT, Diabetology and Nephrology.',

  contact: {
    phone: '+918712251147',
    phoneDisplay: '+91 87122 51147',
    // Second number appears in some directories but is NOT confirmed — omitted from UI
    // secondPhone: '09054350104', // TODO_CONFIRM
    whatsapp: '918712251147',
    email: '', // TODO_CONFIRM — hospital email not publicly verified
    address: {
      street: 'D.No. 13-3-385-6, Khaja Nagar (Old Town)',
      landmark: 'Beside Chaitanya Junior College, near RTC Bus Stand & Dwaraka Petrol Bunk',
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      country: 'India',
      postalCode: '515001', // TODO_CONFIRM (515001/515004/515005 all appear in directories)
    },
    // Coordinates for Google Maps — TODO_CONFIRM exact lat/lng
    mapQuery: 'Sree+SS+Yashoda+Hospital+Khaja+Nagar+Anantapur+Andhra+Pradesh',
    googleMapsUrl: 'https://maps.google.com/?q=Sree+SS+Yashoda+Hospital+Anantapur',
  },

  // 52 beds is verified per Andhra Pradesh Pollution Control Board documentation
  beds: 52,

  // Feature flags — all unconfirmed claims default to false
  features: {
    showEmergency: false,       // TODO_CONFIRM: does the hospital operate 24hr emergency?
    showDiagnostics: false,     // TODO_CONFIRM: in-house lab/imaging/pharmacy?
    showInsurance: false,       // TODO_CONFIRM: cashless insurance network?
    showOpenHours: false,       // TODO_CONFIRM: official OPD hours?
    showSecondPhone: false,     // TODO_CONFIRM: second number 09054350104
    showEmail: false,           // TODO_CONFIRM: hospital email
    showBlog: true,
    showFAQ: true,
    showMap: true,
  },

  // Legal & brand
  legal: {
    privacyPolicy: '/privacy',
    termsOfService: '/terms',
    copyrightYear: 2024,
    websiteBy: '', // TODO: fill in agency/developer credit if needed
  },

  // SEO
  seo: {
    siteUrl: 'https://sreessyashodahospital.in', // TODO_CONFIRM domain
    ogImage: '/og-image.png',
    twitterHandle: '', // TODO_CONFIRM
  },
} as const;

export type SiteConfig = typeof siteConfig;
