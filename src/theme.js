import { BREAKPOINTS, QUERIES } from './breakpoints';

const nightizmAppleMusic = 'https://music.apple.com/ca/artist/nightizm/971495473';
const nightizmSpotify =
  'https://open.spotify.com/artist/6FKuIQ9er4fKdiJ6paAwzS?si=jABdd7eoTFa7AVrOcVZQzw&dl_branch=1';

const theme = {
  ...BREAKPOINTS,
  ...QUERIES,
  nightizmAppleMusic,
  nightizmSpotify,
};

export default theme;
