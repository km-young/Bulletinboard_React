import React, { Children } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Button({ children }) {
  

  const navigate = useNavigate();
  const movePage = () => {
    navigate('/write')
  }
  return (
    <div>
      <Buttons onClick={movePage}>{children}</Buttons>
    </div>
  );
}

const Buttons = styled.button`
  
`