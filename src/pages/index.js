import Image from 'next/image';
import { Article, Content } from '../styles/styled-pages/styled-post';

import Link from '../components/link';
import Helmet from '../components/helmet';
import Layout from '../components/layout';
import HeroTitle from '../components/heroTitle/heroTitle';

import { Logo, Artwork, ArtworkWrapper } from '../styles/styled-pages/styled-index.js';

import jinxArtwork from '/public/images/artwork/jinx.jpg';

export default function Home() {
  return (
    <Layout>
      <Helmet title="Home" description="Home of the eclectic music producer and DJ, Nightizm." />
      <Logo>
        <Image src="/logo-white.png" width="66" height="66" alt="" />
      </Logo>
      <Article homepage>
        <Content className="inner-wrapper" homepage>
          <h2>Hello World... 🌙</h2>
          <p>
            ...finally. <strong>2023</strong> is the year{' '}
            <strong>I’m releasing my full backlog of music.</strong> First up:{' '}
            <Link href="https://nightizm.fanlink.to/jinx" isExternal>
              Jinx
            </Link>{' '}
            — a collection of <em>haunted</em> and <em>gritty</em> tracks created circa 2015.
          </p>
          <p>Here’s my release schedule for the first half of the year:</p>
          <ol>
            <li>
              <Link href="https://nightizm.fanlink.to/jinx" isExternal>
                Jinx
              </Link>
              <em>
                —<strong>March 3rd 2032</strong>
              </em>
            </li>
            <li>
              Nightstrumentals
              <em>
                —<strong>April 7th 2032</strong>
              </em>
            </li>
            <li>
              [unnamed]
              <em>
                —<strong>May 5th 2032</strong>
              </em>
            </li>
          </ol>
          <p>
            I’ll be packaging multiple eras of instrumentals into 3 separate mixtapes then putting
            them on{' '}
            <Link href="https://nightizm.bandcamp.com" isExternal>
              Bandcamp
            </Link>{' '}
            <strong>(follow to stay up to date).</strong> My favourites distilled into one album
            will then be released on streaming services shortly after.
          </p>
          <p>
            These <em>long-overdue</em> releases will free up the mental space needed for me to
            focus on new music, fun experiments, and{' '}
            <Link href="https://twitch.tv/nightizm" isExternal>
              casual streaming.
            </Link>
          </p>
          <p>🤟🏽</p>
          <h5>______</h5>
          <blockquote>
            <p>
              The responsibility of any creator is to do the work, not judge it..{' '}
              <strong>―&nbsp;James Clear</strong>
            </p>
          </blockquote>
          <p
            style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              fontFamily: 'var(--font-mono)',
              color: 'var(--grey-200)',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            posted March. 10th 2023
          </p>

          <ArtworkWrapper href="https://nightizm.fanlink.to/jinx" isExternal>
            <Artwork
              src={jinxArtwork}
              width={300}
              height={300}
              alt="Album artwork for Nightizm's latest release: Jinx."
              objectFit=""
            />
          </ArtworkWrapper>
        </Content>
      </Article>
      ``
      <HeroTitle />
    </Layout>
  );
}
