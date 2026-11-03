// Optional app theme. Delete this file (and its export in index.ts) if you don't need it.
export const brand = {
  primary:     '#0F9D6B',
  primarySoft: '#E3F6EE',
  dark:        '#0B3B2E',
  background:  '#F6FAF8',
  card:        '#FFFFFF',
  ink:         '#10231C', // main text
  muted:       '#6B7F77', // secondary text
  line:        '#E1ECE7', // borders and dividers
  accent:      '#FF8A3D', // cart badge, offers
  danger:      '#EF4444',
  success:     '#16A34A',
} as const;

export type BrandName = keyof typeof brand;
