const icons = {
  searchMobile: {
    width: '18',
    height: '18',
    backgroundPath:
      'M17.56 15.443l-3.483-3.483a7.692 7.692 0 10-2.121 2.121l3.484 3.483a1.519 1.519 0 002.12 0 1.5 1.5 0 000-2.12zM7.688 2.253a5.437 5.437 0 110 10.876 5.437 5.437 0 010-10.875z',
  },
  twitter: {
    height: '24',
    width: '24',
    backgroundRx: '12',
    foregroundPath:
      'M17.735 9.379A6.36 6.36 0 0019.2 7.817a5.435 5.435 0 01-1.69.463 2.954 2.954 0 001.295-1.677 6.156 6.156 0 01-1.86.752 2.924 2.924 0 00-2.17-.955c-1.634 0-2.958 1.36-2.958 3.037 0 .23.028.462.084.694-2.451-.145-4.65-1.36-6.115-3.181a3.013 3.013 0 00-.394 1.532c0 1.041.507 1.967 1.324 2.516-.479-.029-.958-.145-1.352-.376v.029c0 1.475 1.014 2.69 2.367 2.978a3.227 3.227 0 01-.761.116c-.197 0-.367-.029-.564-.058a2.956 2.956 0 002.762 2.111 5.854 5.854 0 01-3.664 1.301c-.253 0-.479-.029-.704-.058a8.093 8.093 0 004.537 1.36c5.439 0 8.398-4.598 8.398-8.617v-.405z',
  },
  youtube: {
    height: '24',
    width: '24',
    backgroundRx: '12',
    foregroundPath:
      'M18.884 8.765a1.767 1.767 0 00-1.264-1.257C16.488 7.2 12.013 7.2 12.013 7.2s-4.502 0-5.634.308a1.768 1.768 0 00-1.263 1.257C4.8 9.842 4.8 12.152 4.8 12.152s0 2.283.316 3.387c.158.615.658 1.077 1.263 1.231 1.132.282 5.634.282 5.634.282s4.475 0 5.607-.282c.606-.154 1.106-.616 1.264-1.231.316-1.104.316-3.387.316-3.387s0-2.31-.316-3.387zm-8.345 5.465v-4.157l3.738 2.079-3.738 2.078z',
  },
};

const colors = {
  light: {
    foreground: '#0075A7',
    background: '#ffffff',
  },
  midGrey: {
    foreground: '#ffffff',
    background: '#939598',
  },
  dark: {
    foreground: '#ffffff',
    background: '#000000',
  },
  darkGreen: {
    foreground: '#ffffff',
    background: '#006B35',
  },
};

export default function Icon({ color, type }) {
  const icon = icons[type];
  const colorSet = colors[color];

  return (
    <svg width={icon.width} height={icon.height} fill="none" xmlns="http://www.w3.org/2000/svg">
      {icon.backgroundPath && <path d={icon.backgroundPath} fill={colorSet.background} />}

      {icon.backgroundRx && (
        <rect
          width={icon.width}
          height={icon.height}
          rx={icon.backgroundRx}
          fill={colorSet.background}
        />
      )}

      {icon.foregroundPath && <path d={icon.foregroundPath} fill={colorSet.foreground} />}
    </svg>
  );
}
