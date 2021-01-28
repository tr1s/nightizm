import Layout from '../components/layout';
import Image from 'next/image';
import { albums } from '../data/music';
import Button from '../components/button';

import discogStyles from './discography.module.scss';

export default function Discography() {
  return (
    <Layout>
      <div className={discogStyles.discography}>
        {albums.map((album) => {
          return (
            <div className={discogStyles.album}>
              <h1
                className={discogStyles.title}
                dangerouslySetInnerHTML={{ __html: album.title }}
              />

              {/* ARTWORK */}
              <a
                className={discogStyles.artworkLink}
                href={album.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className={discogStyles.artwork}>
                  <Image src={album.artwork} alt="Album artwork." width={464} height={464} />

                  {/* STRIPES */}
                  <div className={discogStyles.stripesLeft}></div>
                  <div className={discogStyles.stripesRight}></div>
                </figure>
              </a>

              <div
                className={discogStyles.description}
                dangerouslySetInnerHTML={{ __html: album.description }}
              />

              <div className={discogStyles.buttonWrapper}>
                <Button
                  type="hrefOpenNew"
                  text="Stream or Download"
                  href={album.link}
                  className={discogStyles.first}
                />
                <Button type="hrefOpenNew" text="Download Full Discography" href={album.link} />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
