export const BREAKPOINTS = {
  phoneSmallest_PIXELS: 320,
  phoneSmall_PIXELS: 414,
  phone_PIXELS: 680,
  tablet_PIXELS: 850,
  tabletLarge_PIXELS: 1024,
  laptopSmall_PIXELS: 1280,
  laptop_PIXELS: 1536,
  desktop_PIXELS: 1537,
};

export const QUERIES = {
  phoneSmallest: `max-width: ${BREAKPOINTS.phoneSmallest_PIXELS}px`,
  phoneSmall: `max-width: ${BREAKPOINTS.phoneSmall_PIXELS}px`,
  phone: `max-width: ${BREAKPOINTS.phone_PIXELS}px`,
  tablet: `max-width: ${BREAKPOINTS.tablet_PIXELS}px`,
  tabletLarge: `max-width: ${BREAKPOINTS.tabletLarge_PIXELS}px`,
  laptopSmall: `max-width: ${BREAKPOINTS.laptopSmall_PIXELS}px`,
  laptop: `max-width: ${BREAKPOINTS.laptop_PIXELS}px`,
  desktopAndAbove: `min-width: ${BREAKPOINTS.desktop_PIXELS}px`,
};
