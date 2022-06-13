import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    background-image: url("Images/2.png");
    background-size: 100% 100%;

`
const Navbar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-top: 5px;
    padding-bottom: 10px;
`

const Left = styled.h1`
    flex: 1;
    padding-top: 0px;
    display: flex;
    padding-left: 50px;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding-top: 0px;
    a {color: black;
    text-decoration: none; }
`
const Right = styled.div`
    flex: 1;
    padding-top: 0px;
    justify-content: center;
    align-items: center;
    display: flex;
`
const Button = styled.button`
  width: 30%;
  border: none;
  padding: 10px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  align-items: center;
  border-radius: 30px;
`;
const Button2 = styled.button`
  width: 20%;
  border: none;
  padding: 10px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  align-items: center;
  border-radius: 30px;
`;
const Wrapper = styled.div`

`
const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
  padding-top: 10px;
  padding-left: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 40px;
`;
const Input = styled.input`
  width: 20%;
  margin: 10px 0;
  padding: 5px;
  font-size: 15px;
  border: 1px solid black;
  border-radius: 10px;
`;

const SellFirst = () => {
  return (
    <Container>
        <Navbar>
            <Left>Maqure</Left>
            <Center>
                <a href="#">Sell Online</a>
                <a href="#">Grow your business</a>
                <a href="#">Learn More</a>
            </Center>
            <Right>
                <Button>Start Selling</Button>
            </Right>
            </Navbar>
            <Wrapper>
        <Title>Join India's largest <br/>chemical marketplace for <br/>dyestuffs and <br/>pigments</Title>
        <Form>
          <Input placeholder="Full Name"/>
          <Input placeholder="Company Name"/>
          <Input placeholder="Work E-mail"/>
          <Button2>Submit</Button2>
        </Form>
        </Wrapper>
    </Container>
        
  )
}

export default SellFirst