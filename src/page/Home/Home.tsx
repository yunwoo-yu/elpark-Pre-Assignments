import Layout from '../../components/Layout/Layout';
import MusicTop100List from '../../components/MusicTop100List/MusicTop100List';
import ListSearchAndSortedBox from '../../components/ListSearchAndSortedBox/ListSearchAndSortedBox';
import useGetMusicData from '../../hooks/useGetMusicData';
import useGetSearchData from '../../hooks/useGetSearchData';
import styles from './Home.module.css';

function Home() {
  const { musicListData, onClickSortedList } = useGetMusicData();
  const { onChangeInputValueHandler, inputValue } = useGetSearchData();
  const searchedData = musicListData?.entry.filter((el) =>
    el['im:name'].label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Layout copyright={musicListData?.rights.label} title={musicListData?.title.label}>
      <section className={styles.contentWrapper}>
        <h2 className={styles.title}>{musicListData?.title.label}</h2>
        <p className={styles.updateDay}>
          최신 업데이트 : {musicListData?.updated.label.split('T')[0]}
        </p>
        <ListSearchAndSortedBox
          value={inputValue}
          onClick={onClickSortedList}
          onChange={onChangeInputValueHandler}
        />
        <MusicTop100List data={searchedData} queryText={inputValue} />
      </section>
    </Layout>
  );
}

export default Home;
