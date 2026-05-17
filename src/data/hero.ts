export type Step = {
  n: string;
  label: string;
  active?: boolean;
};

export const steps: Step[] = [
  { n: '1', label: 'Get your expert\nfacial analysis' },
  { n: '2', label: 'Visualise your best\nlooking self', active: true },
  { n: '3', label: 'Get your personalized\nglow-up protocol' },
  { n: '4', label: 'Track your progress and\nsee dramatic results' },
];
