import React from 'react'
import styled from 'styled-components'
import { Twitter, Instagram, LinkedIn, Facebook } from '@material-ui/icons';

const Container = styled.div`
   
`;    
const Wrapper = styled.div`
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-right: 10px;
`;
 
const Center = styled.div`
    flex: 2;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Money = styled.div`
    width: 25%;
    height: 100%;
    align-items: center;
`;
const Language = styled.div`
   width: 25%;
   height: 100%;
   align-items: center;
`;

const Header = () => {
  
  return (
    <Container>
    <Wrapper>
        <Left>
        <MenuItem>
          <Facebook/>
        </MenuItem>
        <MenuItem>
          <Twitter />
        </MenuItem>
        <MenuItem>
          <Instagram />
        </MenuItem>
        <MenuItem>
          <LinkedIn />
        </MenuItem>
        </Left>
        <Center>
        </Center>
        <Right>
        <Money>
          <select>
          <option>INR ₹</option>
          <option>USD $</option>
          </select>
          </Money>
          <Language>
          <select><option>ENGLISH</option>
          <option>ESPAÑOL</option>
          <option>FRANÇAIS</option>
          </select>
          </Language>
        </Right>
    </Wrapper>
    </Container>
  )
}

export default Header