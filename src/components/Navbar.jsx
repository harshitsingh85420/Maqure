import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`;
const Wrapper = styled.div`
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 300px;
  margin-right: 300px;
  list-style: none;
display: flex;
a {
  padding: 18px 10px;
  color: black;
  &:hover {
      color: red;
  }
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
      <a href="google.com">HOME</a>
      <a href="google.com">CATEGORIES</a>
      <a href="google.com">TEXTILES</a>
      <a href="google.com">DYES</a>
      <a href="google.com">BLOG</a>
      <a href="google.com">TOP DEALS</a>
        </Wrapper>
    </Container>
  )
}

export default Navbar