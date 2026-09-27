import type Lenis from "lenis";

export const scroller: { lenis: Lenis | null } = { lenis: null };

export function scrollToEl(el: HTMLElement, offset = 0) {
  if (scroller.lenis) scroller.lenis.scrollTo(el, { offset });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset });
}
