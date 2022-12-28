import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <div>
      <HeaderBox>아무거나 게시판</HeaderBox>
    </div>
  );
}


const HeaderBox = styled.h1`
  text-align: center;
`
