// ============================================================
// BLOG CONTENT — Original, medically conservative articles
// All articles end with a standard disclaimer.
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  content: string;
}

const disclaimer =
  '\n\n---\n\n*This article is for general information and isn\'t a substitute for professional medical advice. If you have concerns about your health, please consult a qualified healthcare professional.*';

export const blogPosts: BlogPost[] = [
  {
    slug: 'when-to-see-a-urologist',
    title: 'When Should You See a Urologist?',
    excerpt:
      'Many urological conditions are manageable when caught early. Here are some signs that suggest it may be time to consult a urologist.',
    category: 'Urology',
    readTime: '5 min read',
    publishedDate: '2024-10-01',
    content: `## When Should You See a Urologist?

A urologist is a doctor who specialises in conditions affecting the urinary system — including the kidneys, bladder, ureters and urethra — as well as certain reproductive health concerns in men.

Many people are unsure when to seek urological care. Understanding the signs can help you act earlier and avoid complications.

### Signs You Should Consider a Urological Consultation

**Persistent changes in urination**
If you notice frequent urination, especially at night, difficulty starting or stopping urination, or a weak urine stream that doesn't improve, it's worth speaking to a doctor. These changes can signal a number of conditions that benefit from early attention.

**Blood in the urine**
Blood in the urine (haematuria) should always be evaluated by a doctor. While it can have a range of causes — some straightforward, others more serious — it is not something to ignore or wait out.

**Pain in the lower back, sides or pelvic area**
Persistent or recurrent pain in these areas, particularly if it comes and goes in waves, can sometimes indicate issues related to the kidneys or urinary tract.

**Recurrent urinary tract infections**
If you are experiencing frequent urinary tract infections (UTIs), a urologist can help identify whether there is an underlying structural or functional issue contributing to the recurrence.

**Kidney stones**
If you have had kidney stones before, or suspect you might have one based on your symptoms, urological care can help with diagnosis and management.

### What to Expect at a Urological Consultation

Your urologist will take a full medical history and ask about your symptoms in detail. Depending on your concerns, they may recommend tests such as urine analysis, imaging or other investigations to better understand your condition.

Early consultation often leads to more straightforward management. If you have any of the above concerns, consider speaking with a healthcare professional.
${disclaimer}`,
  },
  {
    slug: 'understanding-laparoscopic-surgery',
    title: 'Understanding Laparoscopic (Keyhole) Surgery',
    excerpt:
      'Laparoscopic surgery is a minimally invasive technique used in many procedures. Here\'s what it means in plain language.',
    category: 'Surgery',
    readTime: '4 min read',
    publishedDate: '2024-10-08',
    content: `## Understanding Laparoscopic (Keyhole) Surgery

If your doctor has recommended laparoscopic surgery, you may have questions about what it involves and how it differs from traditional surgery. This article provides a straightforward overview.

### What is Laparoscopic Surgery?

Laparoscopic surgery — sometimes called keyhole surgery — is a surgical technique in which a surgeon makes several small incisions (usually less than 1 cm) rather than a single large opening. A thin, flexible camera called a laparoscope is inserted through one of these openings, sending live images to a screen that guides the surgeon's movements.

### How Does it Differ from Open Surgery?

In traditional open surgery, a longer incision is made to allow the surgeon direct access to the area being treated. Laparoscopic surgery achieves similar goals using smaller openings and specialised instruments.

### What Procedures Can Be Done Laparoscopically?

Laparoscopic techniques are used for a wide range of procedures, including certain abdominal, gastrointestinal and urological surgeries. Whether laparoscopy is appropriate for your specific situation is a decision made by your surgeon based on your individual condition and medical history.

### Things to Discuss with Your Surgeon

Before any procedure, it's important to have an open conversation with your surgeon. Questions worth asking include:
- Is laparoscopic surgery appropriate for my specific condition?
- What does recovery typically look like?
- What are the risks specific to my situation?
- What should I do or avoid in the days before the procedure?

Your surgeon is the right person to guide these decisions based on your individual health profile.
${disclaimer}`,
  },
  {
    slug: 'diabetes-care-daily-habits',
    title: 'Diabetes Care: Daily Habits That Matter',
    excerpt:
      'Living with diabetes involves more than medication. Daily habits play a meaningful role in managing blood sugar levels and overall health.',
    category: 'Diabetology',
    readTime: '6 min read',
    publishedDate: '2024-10-15',
    content: `## Diabetes Care: Daily Habits That Matter

Diabetes is a long-term condition that requires consistent attention — not just during doctor visits, but in the small decisions made every day. While medication and medical guidance are central to diabetes management, daily habits play an important supporting role.

### Monitoring Your Blood Sugar

Your doctor or care team will guide you on how often and when to monitor your blood sugar levels. Keeping a record of your readings can help your doctor make informed decisions about your treatment. If you notice readings that are higher or lower than your usual range, let your doctor know.

### Eating Patterns

What you eat and when you eat can influence blood sugar levels significantly. A few general principles often recommended:

- **Consistency in meal timing** can help the body regulate blood sugar more predictably.
- **Portion awareness** is generally more sustainable than extreme restriction.
- **Including vegetables, wholegrains and protein** at most meals helps maintain steadier energy and blood sugar.

Your doctor or a qualified dietitian can give you guidance tailored to your specific situation and medication regimen.

### Movement and Physical Activity

Regular physical activity supports the body's ability to use insulin more effectively. Even moderate, regular movement — such as daily walks — can make a difference over time. Before starting or changing an exercise routine, speak with your doctor, especially if you have other health conditions.

### Foot Care

People with diabetes benefit from paying close attention to foot health. Regular checks for blisters, cuts or changes in sensation, and keeping feet clean and moisturised, are commonly advised. Any foot concerns should be raised with your doctor promptly.

### Keeping Scheduled Appointments

Regular check-ins with your doctor allow for monitoring of blood sugar trends, medication adjustments and screening for any complications. These appointments are a valuable part of long-term diabetes management.

### Working with Your Care Team

Living with diabetes is a long-term journey that is best managed with the support of a healthcare professional who knows your history. Building a consistent relationship with your doctor and following the management plan they recommend is one of the most effective things you can do.
${disclaimer}`,
  },
  {
    slug: 'preparing-for-first-gynaecology-visit',
    title: 'Preparing for Your First Gynaecology Visit',
    excerpt:
      'If you\'re seeing a gynaecologist for the first time, knowing what to expect can help the appointment feel less daunting.',
    category: 'Gynaecology',
    readTime: '5 min read',
    publishedDate: '2024-10-22',
    content: `## Preparing for Your First Gynaecology Visit

Visiting a gynaecologist for the first time can feel uncertain, particularly if you're unsure what to expect. Understanding the general structure of the appointment can help you feel more at ease.

### Who is a Gynaecologist?

A gynaecologist is a doctor who specialises in women's reproductive health. They provide care related to menstrual health, reproductive concerns and a range of gynaecological conditions.

### When Should You Consider Seeing a Gynaecologist?

There are several reasons a woman might seek a gynaecological consultation:

- Irregular, painful or heavy periods
- Pelvic pain or discomfort
- Changes in discharge
- Questions about reproductive health
- A referral from another doctor

You do not need to have a specific problem to schedule a consultation — some women visit simply to ask questions or for a routine check.

### What to Bring

For a productive first appointment, it helps to bring:

- A note of your menstrual cycle details (regularity, duration, any pain)
- A list of any current medications or supplements
- Notes on any symptoms you've been experiencing
- Any previous medical reports that may be relevant

### What to Expect

Your gynaecologist will ask about your medical and menstrual history. They will listen to your concerns without judgment. Depending on your reason for visiting, they may recommend a physical examination or investigations — they will explain what they are recommending and why.

### Your Right to Ask Questions

It's entirely appropriate to ask your doctor questions at any point. If you don't understand a recommendation, ask for clarification. If you are uncomfortable with a suggested examination, let your doctor know. A good gynaecological consultation is a two-way conversation.

### After Your Visit

Your gynaecologist will advise on any next steps — whether that is a follow-up appointment, investigations, or guidance you can act on immediately. If you have concerns after leaving the appointment, most clinics allow you to call or message with follow-up questions.
${disclaimer}`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
