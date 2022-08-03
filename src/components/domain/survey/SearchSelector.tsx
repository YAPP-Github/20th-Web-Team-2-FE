import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DeleteIcon, SearchIcon } from '@/assets/img';

export interface SearchData {
  name: string;
  id: number;
}

interface SearchSelectorProps {
  placeholder: string;
  searchData: SearchData[];
  selectedResults: number[];
  setSelectedResults: React.Dispatch<React.SetStateAction<number[]>>;
  max?: number;
}

const defaultMax = 4;

const SearchSelector = ({ placeholder, searchData, selectedResults, setSelectedResults, max }: SearchSelectorProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedSchools, setSelectedSchools] = useState<string[]>([]); // 렌더링될 NAME 데이터

  const findId = useCallback((value: string) => Number(searchData.find((data) => data.name === value)?.id), [searchData]);

  useEffect(() => {
    const result = selectedResults.flatMap((id) => searchData.filter((item) => item.id === id)).map(({ name }) => name);
    setSelectedSchools(result);
  }, [selectedResults, searchData]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const id = findId(value);

    const noMatchData = !searchData.map(({ id }) => id).includes(id);
    const existSelected = selectedResults.includes(id);
    const overMaxLimit = selectedResults.length >= (max ?? defaultMax);
    if (noMatchData || existSelected) {
      return;
    }

    if (overMaxLimit) {
      setSelectedResults((prev) => prev.slice(1));
      setSelectedSchools((prev) => prev.slice(1));
    }

    setSelectedResults((prev) => [...prev, id]);
    setSelectedSchools((prev) => [...prev, value]);
    resetClick();
  };

  const handleDeleteClick = (value: string) => {
    setSelectedSchools((prev) => prev.filter((name) => name !== value));
    setSelectedResults((prev) => prev.filter((id) => id !== findId(value)));
  };

  const resetClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <SearchWrapper>
        <SearchInput ref={inputRef} list="schools" placeholder={placeholder} onChange={handleInputChange} onClick={resetClick} />
        <datalist id="schools">
          {searchData.map(({ name, id }) => (
            <option key={id} value={name} />
          ))}
        </datalist>
        <SearchIconWrapper icon={SearchIcon} />
      </SearchWrapper>
      <SchoolWrapper>
        {selectedSchools.map((value, index) => (
          <School key={value + index}>
            {value}
            <DeleteIconWrapper icon={DeleteIcon} onClick={() => handleDeleteClick(value)} />
          </School>
        ))}
      </SchoolWrapper>
    </>
  );
};

const SearchWrapper = styled.div`
  position: relative;
  margin: 45px 0 18px;
`;

const SearchInput = styled.input`
  height: 38px;
  width: 100%;
  font-size: 14px;
  background-color: ${({ theme }) => theme.palette.grayLight};
  border-radius: 100px;
  padding: 10px 0 10px 40px;
  outline: none;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

const Icon = styled.span<{ icon: string }>`
  position: absolute;
  background: url(${({ icon }) => icon}) no-repeat;
  background-size: contain;
  width: 16px;
  height: 16px;
`;

const SearchIconWrapper = styled(Icon)`
  top: 11px;
  left: 12px;
`;

const DeleteIconWrapper = styled(Icon)`
  top: 8px;
  right: 10px;
`;

const SchoolWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const School = styled.li`
  position: relative;
  min-height: 32px;
  background-color: ${({ theme }) => theme.palette.grayLight};
  border-radius: 100px;
  padding: 7px 33px 7px 14px;
  font-size: 14px;
`;

export default SearchSelector;
