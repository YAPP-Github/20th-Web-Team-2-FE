import React, { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import { DeleteIcon, SearchIcon } from '@/assets/img';

interface UnitSelectorProps {
  placeholder: string;
  searchData: string[];
  selectedResult: string;
  setSelectedResult: React.Dispatch<React.SetStateAction<string>>;
}

const UnitSelector = ({ placeholder, searchData, selectedResult, setSelectedResult }: UnitSelectorProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSelectedResult(value);
  };

  const handleDeleteClick = () => {
    setSelectedResult('');
  };

  const resetClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <SearchWrapper>
        <SearchInput ref={inputRef} list="lists" placeholder={placeholder} onChange={handleInputChange} onClick={resetClick} />
        <datalist id="lists">
          {searchData.map((data) => (
            <option key={data} value={data} />
          ))}
        </datalist>
        <SearchIconWrapper icon={SearchIcon} />
      </SearchWrapper>
      {selectedResult && (
        <ResultWrapper>
          <Result>
            {selectedResult}
            <DeleteIconWrapper icon={DeleteIcon} onClick={handleDeleteClick} />
          </Result>
        </ResultWrapper>
      )}
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

const ResultWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Result = styled.li`
  position: relative;
  min-height: 32px;
  background-color: ${({ theme }) => theme.palette.grayLight};
  border-radius: 100px;
  padding: 7px 33px 7px 14px;
  font-size: 14px;
`;

export default UnitSelector;
