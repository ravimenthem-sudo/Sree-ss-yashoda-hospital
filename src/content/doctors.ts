// ============================================================
// DOCTORS DATA
// Updated directly from the official hospital outdoor signboard
// SREE S.S. YASHODA HOSPITAL
// ============================================================

export interface Doctor {
  slug: string;
  name: string;
  designation: string;
  qualifications: string;
  speciality: string;
  specialitySlug: string;
  apmcReg: string;
  focusAreas: string[];
  bio: string;
  photo?: string;
  photoAlt: string;
  appointmentLabel: string;
}

export const doctors: Doctor[] = [
  {
    slug: 'dr-b-siva-sankar-naik',
    name: 'Dr. B. Siva Sankar Naik',
    designation: 'General, Laparoscopic & Laser Surgeon',
    qualifications: 'M.B.B.S., M.S. (General Surgeon)',
    apmcReg: 'APMC: 53622',
    speciality: 'General Surgery',
    specialitySlug: 'general-surgery',
    focusAreas: [
      'General Surgery',
      'Laparoscopic Surgery',
      'Laser Surgery',
      'Trauma Care'
    ],
    bio: 'Dr. B. Siva Sankar Naik is a Senior General & Laparoscopic Surgeon at Sree SS Yashoda Hospital, Anantapur. With MS in General Surgery and APMC Registration 53622, he specializes in advanced general, laparoscopic, and laser surgical procedures delivering high-precision outcomes.',
    photo: '/assets/doctors/doctor-sivasankar.png',
    photoAlt: 'Portrait of Dr. B. Siva Sankar Naik, General & Laparoscopic Surgeon',
    appointmentLabel: 'Book with Dr. Siva Sankar',
  },
  {
    slug: 'dr-r-raghuramulu',
    name: 'Dr. R. Raghuramulu',
    designation: 'General Physician, Diabetologist & Critical Care Specialist',
    qualifications: 'MBBS (OMC Hyd), M.D. General Medicine (JIPMER), PGDDM (Diabetes, UK), FICCM (Critical Care)',
    apmcReg: 'APMC: 68121',
    speciality: 'General Medicine & Diabetology',
    specialitySlug: 'general-medicine',
    focusAreas: [
      'General Medicine',
      'Diabetology',
      'Critical Care Medicine',
      'Intensive Care Unit (ICU)'
    ],
    bio: 'Dr. R. Raghuramulu is a distinguished General Physician, Diabetologist, and Critical Care Specialist at Sree SS Yashoda Hospital. Trained at OMC Hyderabad, JIPMER, and UK in Diabetology (PGDDM) and Critical Care (FICCM, APMC: 68121), he leads complex medical and intensive care management.',
    photoAlt: 'Portrait of Dr. R. Raghuramulu, General Physician & Diabetologist',
    appointmentLabel: 'Book with Dr. Raghuramulu',
  },
  {
    slug: 'dr-santhi-swaroop',
    name: 'Dr. Santhi Swaroop',
    designation: 'Orthopaedic Surgeon',
    qualifications: 'M.B.B.S., M.S. (Ortho)',
    apmcReg: 'APMC: 63519',
    speciality: 'Orthopaedics',
    specialitySlug: 'orthopaedics',
    focusAreas: [
      'Orthopaedic Surgery',
      'Fracture & Trauma Care',
      'Joint & Bone Health',
      'Arthritis Management'
    ],
    bio: 'Dr. Santhi Swaroop is an expert Orthopaedic Surgeon at Sree SS Yashoda Hospital, Anantapur (APMC: 63519). He specializes in trauma, complex fracture treatment, joint care, and orthopaedic surgery for adult and pediatric patients.',
    photoAlt: 'Portrait of Dr. Santhi Swaroop, Orthopaedic Surgeon',
    appointmentLabel: 'Book with Dr. Santhi Swaroop',
  },
  {
    slug: 'dr-r-swetha',
    name: 'Dr. R. Swetha',
    designation: 'Gynaecologist & Obstetrician',
    qualifications: 'M.B.B.S., M.S., OBG (Gynaecologist)',
    apmcReg: 'APMC: FMR 105333',
    speciality: 'Gynaecology & Obstetrics',
    specialitySlug: 'gynaecology',
    focusAreas: [
      'Gynaecology Consultations',
      'Obstetrics & Maternity Care',
      "Women's Reproductive Health",
      'High-Risk Pregnancy'
    ],
    bio: 'Dr. R. Swetha is a leading Gynaecologist and Obstetrician at Sree SS Yashoda Hospital, Anantapur (APMC: FMR 105333). Holding MS OBG, she provides comprehensive care for women\'s health, pregnancy management, and gynaecological surgeries.',
    photo: '/assets/doctors/doctor-swetha.png',
    photoAlt: 'Portrait of Dr. R. Swetha, Gynaecologist & Obstetrician',
    appointmentLabel: 'Book with Dr. Swetha',
  },
  {
    slug: 'dr-rammohan',
    name: 'Dr. Rammohan',
    designation: 'Brain & Spine Surgeon (Neurosurgeon)',
    qualifications: 'M.Ch. (Neurosurgeon)',
    apmcReg: 'APMC: 37271',
    speciality: 'Neurosurgery',
    specialitySlug: 'neurosurgery',
    focusAreas: [
      'Brain Surgery',
      'Spine Surgery',
      'Neuro Trauma Care',
      'Microsurgery'
    ],
    bio: 'Dr. Rammohan is a super-specialist Neurosurgeon at Sree SS Yashoda Hospital, Anantapur (M.Ch. Neurosurgery, APMC: 37271). He specializes in intricate brain and spinal surgeries, neuro-trauma care, and advanced surgical interventions.',
    photoAlt: 'Portrait of Dr. Rammohan, Brain & Spine Surgeon',
    appointmentLabel: 'Book with Dr. Rammohan',
  },
  {
    slug: 'dr-rajesh',
    name: 'Dr. Rajesh',
    designation: 'Neurologist (Neurophysician)',
    qualifications: 'D.M. (Neurophysician)',
    apmcReg: 'APMC: FMR 80531',
    speciality: 'Neurology',
    specialitySlug: 'neurology',
    focusAreas: [
      'Neurology Consultations',
      'Stroke Management',
      'Brain & Nerve Disorders',
      'Headache & Epilepsy'
    ],
    bio: 'Dr. Rajesh is a DM Neurophysician and Neurologist at Sree SS Yashoda Hospital (APMC: FMR 80531). He provides specialized diagnostic and non-surgical treatment for stroke, epilepsy, neuromuscular disorders, and neurological conditions.',
    photoAlt: 'Portrait of Dr. Rajesh, Neurologist',
    appointmentLabel: 'Book with Dr. Rajesh',
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
