// true quando o usuário ativou "reduzir movimento" no sistema operacional
export const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
