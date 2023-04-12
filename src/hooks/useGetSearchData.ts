import { ChangeEvent, useState } from 'react';

const useGetSearchData = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);
  };

  return { inputValue, onChangeInputValueHandler };
};

export default useGetSearchData;
