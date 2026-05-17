export type FAQItem = {
  q: string;
  a: string;
};

export type FAQCategory = {
  id: string;
  title: string;
  items: FAQItem[];
};

export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    title: 'General Questions',
    items: [
      {
        q: 'What is Qoves?',
        a: 'Qoves is a personalised facial analysis service that helps you understand your unique facial features and create a science-backed glow-up protocol tailored to you.',
      },
      {
        q: 'What is this for?',
        a: 'This service helps you identify actionable improvements to your appearance through evidence-based lifestyle, skincare, and structural recommendations.',
      },
      {
        q: 'What benefit will I receive?',
        a: 'You will receive a comprehensive facial analysis, a visualisation of your potential, and a detailed personalised protocol to help you reach it.',
      },
      {
        q: 'How does it work?',
        a: 'You upload photos of yourself, our system analyses 160+ facial features, and our experts produce a personalised plan within a few days.',
      },
      {
        q: 'How long will it take for me to receive results?',
        a: 'Most customers receive their analysis within 3–5 business days after submitting their photos.',
      },
      {
        q: 'Is this a one-time input or a continuous service?',
        a: 'We offer both: a one-time analysis report, and an ongoing subscription to track your progress over time.',
      },
      {
        q: 'How often do I need to submit photos?',
        a: 'For subscribers, we recommend re-submitting photos every 8–12 weeks to track meaningful progress.',
      },
      {
        q: 'What makes Qoves different from beauty apps or filters?',
        a: 'Unlike filters, we provide an honest, data-driven assessment and realistic, medically-informed pathways—not digital illusions.',
      },
      {
        q: 'Can I only get results without surgery?',
        a: 'Absolutely. Our protocols focus exclusively on non-surgical improvements: skincare, lifestyle, nutrition, and light procedures.',
      },
    ],
  },
  {
    id: 'analysis',
    title: 'About the Analysis',
    items: [
      {
        q: 'What facial features do you assess?',
        a: 'We assess over 160 features including symmetry, proportions, skin quality, structural bone anatomy and more.',
      },
      {
        q: 'Is my data kept private?',
        a: 'Yes, all submitted photos are processed under strict privacy protocols and never shared with third parties.',
      },
    ],
  },
  {
    id: 'protocol',
    title: 'About the Protocol',
    items: [
      {
        q: 'What does the protocol include?',
        a: 'Your protocol covers skincare routines, diet modifications, sleep optimisation, and targeted exercises based on your unique analysis.',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience & Use',
    items: [
      {
        q: 'What devices can I use?',
        a: 'Our web platform works on all modern desktop and mobile browsers.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Subscription',
    items: [
      {
        q: 'How much does it cost?',
        a: 'Plans start from $49 for a one-time report. Subscription plans are available from $29/month.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    items: [
      {
        q: 'Will you share my photos?',
        a: 'Never. Your photos and personal data are fully encrypted and only used for your analysis.',
      },
    ],
  },
  {
    id: 'mindset',
    title: 'Mindset & Philosophy',
    items: [
      {
        q: 'Will this make me feel insecure?',
        a: 'Our approach is empowering, not critical. We help you understand your features with context and compassion.',
      },
    ],
  },
  {
    id: 'practical',
    title: 'Practical Concerns',
    items: [
      {
        q: 'What lighting do I need for photos?',
        a: 'Natural, even lighting works best. Avoid harsh shadows or ring-light glare.',
      },
    ],
  },
  {
    id: 'support',
    title: 'About Support',
    items: [
      {
        q: 'How do I contact support?',
        a: 'Email us at hello@qoves.com or use the chat in the bottom-right corner.',
      },
    ],
  },
];
