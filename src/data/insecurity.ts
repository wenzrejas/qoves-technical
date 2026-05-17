export type FactorCard = {
  id: string;
  label: string;
  desc: string;
  img: string;
};

export const factorCards: FactorCard[] = [
  {
    id: 'lifestyle',
    label: 'Lifestyle factors',
    desc: 'Considers diet, climate, stress, sleep, and habits.',
    img: '/images/insecure-section-lifestyle-factors.png',
  },
  {
    id: 'cultural',
    label: 'Cultural beauty standards',
    desc: 'Adapts to regional and societal ideals.',
    img: '/images/insecure-section-cultural-standards.png',
  },
  {
    id: 'genetic',
    label: 'Genetic factors',
    desc: 'Takes into account genetic factors and how they might impact your facial aesthetics.',
    img: '/images/insecure-section-genetic-factors.png',
  },
];

export const considerations: string[] = [
  'First impressions matter',
  'It has a considerable impact on interpersonal interactions',
  'Small improvements can drastically impact quality of life',
];
