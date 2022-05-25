import { Search, FavoriteBorderOutlined, PersonOutlineOutlined, LocalMallOutlined  } from '@material-ui/icons';
import { Badge } from "@material-ui/core";
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
font-weight: bold;
font-size: 40px;
font-family: "Poppins", sans-serif;
display: flex;
cursor: pointer;
margin-left: 60px;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  &:hover{
    border-color: black;
  }
`;
const Input = styled.div`
  border: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-right: 70px;
height: 100%;
`;

const Header2 = () => {
  return (
    <Container>
    <Wrapper>
        <Left><Logo>Maqure</Logo></Left>
        <Center>
          <SearchContainer>
          <Input placeholder="Search..." />
          <Search style={{ color: "gray", fontSize: 16 }}/> 
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <PersonOutlineOutlined />
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
            <FavoriteBorderOutlined />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
            <LocalMallOutlined/>
            </Badge>
          </MenuItem>
        </Right>
    </Wrapper>
    </Container>
  )
}

export default Header2