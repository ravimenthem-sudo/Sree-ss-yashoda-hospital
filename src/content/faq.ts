// ============================================================
// FAQ DATA
// Safe, generic, medically conservative questions only
// ============================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'book-appointment',
    question: 'How do I book an appointment?',
    answer:
      'You can book an appointment by calling us at +91 87122 51147 or by filling out the appointment request form on this website. Our team will contact you to confirm your appointment details.',
  },
  {
    id: 'location',
    question: 'Where is the hospital located?',
    answer:
      'Sree SS Yashoda Hospital is located at D.No. 13-3-385-6, Khaja Nagar (Old Town), Anantapur, Andhra Pradesh — beside Chaitanya Junior College, near the RTC Bus Stand and Dwaraka Petrol Bunk.',
  },
  {
    id: 'specialities',
    question: 'Which specialities are available?',
    answer:
      'We offer specialist consultations and care in General Surgery, Laparoscopic Surgery, Laser & Endoscopic Procedures, Urology, Gynaecology, Orthopaedics, ENT, Diabetology and Nephrology.',
  },
  {
    id: 'first-visit',
    question: 'What should I bring to my first visit?',
    answer:
      'Please bring a valid ID proof, any previous medical reports or prescriptions relevant to your condition, and a list of current medications if applicable. This helps the doctor provide a more informed consultation.',
  },
  {
    id: 'same-as-hyderabad',
    question: 'Is this the same as Yashoda Hospitals in Hyderabad?',
    answer:
      'No. Sree SS Yashoda Hospital, Anantapur is an independent hospital. It is not affiliated with, nor part of, the Yashoda Hospitals group based in Hyderabad.',
  },
  {
    id: 'hours-emergency',
    question: 'What are the hospital\'s operating hours or emergency services?',
    answer:
      'For information about operating hours or emergency services, please call the hospital directly at +91 87122 51147 to confirm.',
  },
  {
    id: 'insurance',
    question: 'Do you accept health insurance or cashless treatment?',
    answer:
      'For information about insurance and payment options, please call us at +91 87122 51147 to confirm what is available.',
  },
];
