import { MusicListTypes } from '../../types/types';
import styles from './MusicDetailItem.module.css';

interface Props {
  data: MusicListTypes | undefined;
}

function MusicDetailItem({ data }: Props) {
  return (
    <div className={styles.itemWrapper}>
      <img src={data?.['im:image'][2].label} alt="앨범 이미지" />
      <div className={styles.textWrapper}>
        <p className={styles.title}>{data?.['im:name'].label}</p>
        <p className={styles.artist}>{data?.['im:artist'].label}</p>
        <p className={styles.category}>장르 : {data?.category.attributes.label}</p>
        <p className={styles.days}>발매일 : {data?.['im:releaseDate'].attributes.label}</p>
        <p className={styles.price}>가격 : {data?.['im:price'].label}</p>
      </div>
    </div>
  );
}

export default MusicDetailItem;
