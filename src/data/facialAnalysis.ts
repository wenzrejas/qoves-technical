export type Metric = {
  label: string;
  value: number;
};

export type OverlayPoint = {
  x: string;
  y: string;
  label: string;
};

export const metrics: Metric[] = [
  { label: 'Facial Symmetry', value: 78 },
  { label: 'Skin Clarity', value: 64 },
  { label: 'Structural Harmony', value: 82 },
  { label: 'Feature Proportion', value: 71 },
];

export const overlayPoints: OverlayPoint[] = [
  { x: '28%', y: '22%', label: 'Orbital Width' },
  { x: '68%', y: '35%', label: 'Nasal Bridge' },
  { x: '22%', y: '58%', label: 'Jaw Angle' },
  { x: '72%', y: '62%', label: 'Lip Ratio' },
];

export const analysisScoreTarget = 56;
