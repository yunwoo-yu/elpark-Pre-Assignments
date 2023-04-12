import { ChangeEvent } from 'react';
import styles from './ListSearchAndSortedBox.module.css';
import SearchIcon from '../../lib/assets/icon-search.png';

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (type: 'ASCENDING' | 'DESCENDING') => void;
}
function ListSearchAndSortedBox({ value, onChange, onClick }: Props) {
  return (
    <div className={styles.searchWrapper}>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          className={styles.search}
          value={value}
          onChange={onChange}
          placeholder="음원 이름 검색"
        />
        <button type="submit" className={styles.serchButton}>
          <img src={SearchIcon} alt="돋보기 아이콘" />
        </button>
      </label>
      <div className={styles.buttonWrapper}>
        <button onClick={() => onClick('ASCENDING')}>이름(오름차순)</button>
        <button onClick={() => onClick('DESCENDING')}>이름(내림차순)</button>
      </div>
    </div>
  );
}

export default ListSearchAndSortedBox;
