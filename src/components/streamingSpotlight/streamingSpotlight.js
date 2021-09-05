import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StreamingWrapper, StreamingLink } from './streamingSpotlight-styled';

export default function StreamingSpotlight() {
  const themeContext = useContext(ThemeContext);

  const spotify = themeContext.nightizmSpotify;
  const appleMusic = themeContext.nightizmAppleMusic;

  return (
    <StreamingWrapper>
      <div>
        <StreamingLink href={spotify} target="_blank" rel="noopener noreferrer">
          <img src="/spotify.svg" alt="" />

          <p>
            Listen on <span>Spotify</span>
          </p>
        </StreamingLink>
        <StreamingLink href={appleMusic} target="_blank" rel="noopener noreferrer">
          <img src="/apple-rainbow.svg" alt="" />

          <p>
            Listen on <span>Apple Music</span>
          </p>
        </StreamingLink>
      </div>
    </StreamingWrapper>
  );
}
