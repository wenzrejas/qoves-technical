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
        a: 'Qoves is the world’s best platform to improve your looks and achieve a real facial transformation without surgery. We provide you, from the comfort of your home, with a personalized facial analysis and transformation plan based on over 2,000 academic studies.',
      },
      {
        q: 'What is this for?',
        a: 'Qoves is for anyone who wants to improve their looks with science-based methods, without surgery.',
      },
      {
        q: 'What benefit will I receive?',
        a: 'You’ll receive an updated version of all the above once a year to make sure you maintain your results and stay the best-looking version of yourself for years to come.',
      },
      {
        q: 'How does it work?',
        a: 'Tell us about yourself: Demographics, lifestyle, and goals; Upload your photos: Six specific angles of your face and head; Get your results: Within 28 days, you’ll receive your full protocol and visuals of your best-looking self.',
      },
      {
        q: 'How long will it take for me to receive results?',
        a: 'It takes up to 28 days from the moment you upload your photos for our team to prepare your analysis and protocol.',
      },
      {
        q: 'Is this a one-time input or a continuous service?',
        a: 'This is an ongoing service that you can cancel at any time. After your initial plan, you’ll receive updated protocols, analyses, and visualizations every year. You’ll also have unlimited access to message our aesthetic team support whenever you need.',
      },
      {
        q: 'How often do I need to submit photos?',
        a: 'Once a year to update your analysis, review your protocol, and track your progress.',
      },
      {
        q: 'What makes Qoves different from beauty apps or filters?',
        a: 'We don’t rely on filters or gimmicks. We’ve trained our models to achieve best-in-class precision in three main areas.',
      },
      {
        q: 'Can I only get results without surgery?',
        a: 'Yes. The many small changes we recommend, combined together, compound to produce dramatic results. Every transformation you see on this page can be achieved without surgery—indeed, for most people, surgery is unnecessary and often counterproductive. Everyone can maximize their attractiveness and get impressive results without surgical intervention.',
      },
    ],
  },
  {
    id: 'analysis',
    title: 'About the Analysis',
    items: [
      {
        q: 'What’s included in the facial analysis?',
        a: 'Your facial analysis gives you a clear understanding of all your features and how they affect your overall aesthetics. We provide a comprehensive breakdown of your face as a whole—its symmetry, proportions, masculinity or femininity, and each individual feature. This isn’t just about maximizing attractiveness, but also about understanding how certain features can make you look more dominant, approachable, friendly, cute, and so on.',
      },
      {
        q: 'How accurate is your analysis?',
        a: 'Our analysis is currently state-of-the-art in the aesthetics industry. The measurements are accurate to the nearest millimeter, and the level of detail and comprehensiveness goes far beyond what even the top aesthetic clinics can offer.',
      },
    ],
  },
  {
    id: 'protocol',
    title: 'About the Protocol',
    items: [
      {
        q: 'What is the protocol?',
        a: 'Your protocol is a step-by-step glow-up plan that outlines how to improve your facial aesthetics without surgery. It includes personalized recommendations on how to improve each of your facial features along with a visual preview of how each one could impact your appearance.',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience & Use',
    items: [
      {
        q: 'How do I get started?',
        a: 'You can get started today directly from our website. After completing your payment, you’ll create a Qoves account. From there, you can fill out the questionnaire and upload your photos directly inside your account. Our team will then prepare your analysis and personalized protocol, which will be ready in 28 days.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Subscription',
    items: [
      {
        q: 'How much does it cost?',
        a: 'Qoves costs $150 per year.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    items: [
      {
        q: 'Will my photos and data be kept private?',
        a: 'Yes. Everything is encrypted and stored securely, and only our essential staff members can access your photos. We would never share your pictures publicly on social media or anywhere else.',
      },
    ],
  },
  {
    id: 'mindset',
    title: 'Mindset & Philosophy',
    items: [
      {
        q: 'Do I really need this to look better?',
        a: 'You can still get good results on your own by doing your own research and experimenting; Qoves just makes it a lot easier, faster, safer, and more likely to work. Really, it’s unlikely that your independent research will come up with recommendations as effective as our subject matter experts. Further, frankly, you could probably make enough money to purchase a Qoves analysis in less time than it would take you to do sufficient facial aesthetics research yourself.',
      },
    ],
  },
  {
    id: 'practical',
    title: 'Practical Concerns',
    items: [
      {
        q: 'I don’t want surgery - can this still help me?',
        a: 'Absolutely. We specialize in non-surgical improvements.',
      },
    ],
  },
  {
    id: 'support',
    title: 'About Support',
    items: [
      {
        q: 'Can I really talk to your team?',
        a: 'Yes. You can message our aesthetic team, anytime via your dashboard.',
      },
    ],
  },
];
