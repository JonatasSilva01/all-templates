import React from 'react';
import styled from 'styled-components';

export default function Header() {
 return (
   <HeaderBar>
      <DisplayFlex>
        <div>
          logo
        </div>
        <div>
          menu
        </div>
      </DisplayFlex>
   </HeaderBar>
 );
}

const HeaderBar = styled.header`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;