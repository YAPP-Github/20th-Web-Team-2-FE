import React, { ChangeEvent, useRef, useState } from 'react';
import { schools } from '@/mock/schools';
import styled from 'styled-components';
import { DeleteIcon, SearchIcon } from '@/assets/img';

const SchoolSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!schools.map(({ name }: { name: string }) => name).includes(value)) return;
    setSelectedSchools((prev) => [...prev, value]);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleDeleteClick = (value: string) => {
    setSelectedSchools((prev) => prev.filter((val) => val !== value));
  };

  return (
    <div>
      <SearchWrapper>
        <SearchInput ref={inputRef} list="schools" placeholder="학교를 검색하세요." onChange={handleInputChange} />
        <SearchIconWrapper icon={SearchIcon} />
      </SearchWrapper>
      <datalist id="schools">
        {schools.map(({ name }, index) => (
          <option key={index} value={name} />
        ))}
      </datalist>
      <SchoolWrapper>
        {selectedSchools.map((value, index) => (
          <School key={value + index}>
            {value}
            <DeleteIconWrapper icon={DeleteIcon} onClick={() => handleDeleteClick(value)} />
          </School>
        ))}
      </SchoolWrapper>
    </div>
  );
};

const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 18px;
`;

const SearchInput = styled.input`
  height: 38px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grayLight};
  border-radius: 100px;
  padding: 10px 40px;
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

export default SchoolSearch;
