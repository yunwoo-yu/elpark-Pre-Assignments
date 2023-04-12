import { Link } from 'react-router-dom';
import { MusicListTypes } from '../../types/types';
import styles from './MusicTop100List.module.css';
import highlightedText from '../../lib/util/highlightedText';

interface Props {
  data: MusicListTypes[] | undefined;
  queryText: string;
}

function MusicTop100List({ data, queryText }: Props) {
  return (
    <>
      <ul className={styles.musicList}>
        {data?.map((el, idx) => (
          <li key={el.id.label} className={styles.musicItem}>
            <Link to={`/music/${el.id.attributes['im:id']}`} className={styles.musicLink}>
              <div className={styles.ranking}>{idx + 1}</div>
              <div className={styles.albumImg}>
                <img src={el['im:image'][1].label} alt="앨범 이미지" />
              </div>
              <div className={styles.albumTitle}>
                {highlightedText({ text: el['im:name'].label, query: queryText })}
              </div>
              <div className={styles.artistName}>
                <p>{el['im:artist'].label}</p>
              </div>
              <div className={styles.price}>{el['im:price'].label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MusicTop100List;
