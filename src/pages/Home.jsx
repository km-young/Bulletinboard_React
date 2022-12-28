import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import styled from 'styled-components';
export default function Home() {
  return (
    <div>
      <Button>글쓰기</Button>
      <ListContainer backGround='#eee' height='50px'>
        <thead>
          <tr>
            <ListHeaderNum>글번호</ListHeaderNum>
            <ListHeaderWriter>작성자</ListHeaderWriter>
            <ListHeaderTitle>제목</ListHeaderTitle>
            <ListHeaderTime>작성시간</ListHeaderTime>
          </tr>
        </thead>
      </ListContainer>
      <ListContainer height='30px'>
        <tbody style={{textAlign: 'center'}}>
          <Items>
            <ListNum>1</ListNum>
            <ListWriter>김미영</ListWriter>
            <ListTitle>안녕하세요. 새로 가입했어요.</ListTitle>
            <ListTime>09:21</ListTime>
          </Items>
          <Items>
            <ListNum>2</ListNum>
            <ListWriter>김미영</ListWriter>
            <ListTitle>안녕하세요. 새로 가입했어요.</ListTitle>
            <ListTime>09:21</ListTime>
          </Items>
          <Items>
            <ListNum>3</ListNum>
            <ListWriter>김미영</ListWriter>
            <ListTitle>안녕하세요. 새로 가입했어요.</ListTitle>
            <ListTime>09:21</ListTime>
          </Items>
        </tbody>
      </ListContainer>
    </div>
  );
}

const Items = styled.tr`
  border-bottom: 1px solid #eee;
`
const ListContainer = styled.table`
  border: 2px solid #ddd;
  width: 80%;
  height: ${(props) => props.height};
  margin: 0 auto;
  background-color: ${(props) => props.backGround};
  border-collapse: collapse;

`;



const ListHeaderNum = styled.th`
  width: 60px;
`
const ListNum = styled.td`
  width: 60px;
`

const ListHeaderWriter = styled.th`
  width: 120px;
`;
const ListWriter = styled.td`
  width: 120px;
`;

const ListHeaderTime = styled.th`
  width: 100px;
`;
const ListTime = styled.td`
  width: 100px;
`;

const ListHeaderTitle = styled.th``;
const ListTitle = styled.td``;


