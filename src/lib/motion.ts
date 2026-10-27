/** Shared timing. No animation dependency; only compositor-friendly properties. */
export const motion = {
  micro: 120,
  standard: 240,
  cinematic: 420,
  ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
  settle: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
} as const;
