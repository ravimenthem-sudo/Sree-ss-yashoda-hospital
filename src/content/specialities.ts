// ============================================================
// SPECIALITIES DATA
// ============================================================

export interface Speciality {
  slug: string;
  name: string;
  shortName?: string;
  description: string;
  icon: string; // lucide icon name
  tags: string[];
}

export const specialities: Speciality[] = [
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    description:
      'Comprehensive surgical care with a focus on safe, precise and patient-centered treatment. Our surgical team handles a wide range of procedures with a commitment to your well-being throughout the process.',
    icon: 'Stethoscope',
    tags: ['Surgical Care', 'Inpatient', 'Pre & Post-Op'],
  },
  {
    slug: 'laparoscopic-surgery',
    name: 'Laparoscopic Surgery',
    description:
      'Minimally invasive surgical procedures designed to support recovery and reduce surgical impact. Laparoscopic techniques allow for precision with smaller incisions and typically shorter recovery times.',
    icon: 'Microscope',
    tags: ['Minimally Invasive', 'Keyhole Surgery', 'Faster Recovery'],
  },
  {
    slug: 'laser-endoscopic',
    name: 'Laser & Endoscopic Procedures',
    description:
      'Advanced procedural options for appropriate surgical and urological conditions. Laser and endoscopic techniques offer targeted, precise treatment with reduced recovery burden for suitable patients.',
    icon: 'Zap',
    tags: ['Laser', 'Endoscopy', 'Urological'],
  },
  {
    slug: 'urology',
    name: 'Urology',
    description:
      'Diagnosis and treatment for urinary-system and related urological conditions. Our urological care includes minimally invasive and endoscopic approaches for kidney, bladder and urinary tract conditions.',
    icon: 'Activity',
    tags: ['Urinary System', 'Kidney Care', 'Endoscopic'],
  },
  {
    slug: 'gynaecology',
    name: 'Gynaecology',
    description:
      'Women\'s healthcare covering gynaecological consultations and related treatment. We provide a respectful, professional environment for women\'s health at every stage of life.',
    icon: 'Heart',
    tags: ["Women's Health", 'Consultations', 'Surgical Care'],
  },
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics',
    description:
      'Care for bones, joints, muscles and movement-related conditions. Our orthopaedic team addresses injuries, degenerative conditions and disorders affecting your mobility and quality of life.',
    icon: 'Bone',
    tags: ['Bones & Joints', 'Mobility', 'Injury Care'],
  },
  {
    slug: 'ent',
    name: 'ENT',
    shortName: 'ENT',
    description:
      'Diagnosis and treatment of ear, nose and throat conditions. From infections to structural concerns, our ENT care covers a full range of head and neck conditions requiring specialist attention.',
    icon: 'Ear',
    tags: ['Ear', 'Nose', 'Throat'],
  },
  {
    slug: 'diabetology',
    name: 'Diabetology',
    description:
      'Support for diabetes management, monitoring and long-term care. Our diabetology service helps patients understand their condition and build practical, sustainable health habits with specialist guidance.',
    icon: 'Droplets',
    tags: ['Diabetes', 'Blood Sugar', 'Long-term Care'],
  },
  {
    slug: 'nephrology',
    name: 'Nephrology',
    description:
      'Care focused on kidney health and related conditions. Our nephrology service provides consultations and management support for a range of kidney-related health concerns.',
    icon: 'Shield',
    tags: ['Kidney Health', 'Specialist Care', 'Monitoring'],
  },
];

export function getSpecialityBySlug(slug: string): Speciality | undefined {
  return specialities.find((s) => s.slug === slug);
}
