import useGetMusicData from '../../hooks/useGetMusicData';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import styles from './MusicDetail.module.css';
import MusicDetailItem from '../../components/MusicDetailItem/MusicDetailItem';

function MusicDetail() {
  const { id } = useParams();
  const { musicListData } = useGetMusicData();
  const detailData = musicListData?.entry.filter((el) => el.id.attributes['im:id'] === id)[0];

  return (
    <Layout copyright={detailData?.rights.label} title={detailData?.title.label}>
      <section className={styles.contentWrapper}>
        <h2 className="blind">앨범 디테일 페이지</h2>
        <MusicDetailItem data={detailData} />
      </section>
    </Layout>
  );
}

export default MusicDetail;
