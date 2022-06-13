import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`
const Wrapper = styled.div`
    display: flex;
`
const Image = styled.div`
    flex: 1;
`
const Main = styled.div`
flex: 1;
`
const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  padding-top: 60px;
`;
const Text = styled.div`
    font-size: 30px;
    padding-top: 20px;
`
const Benefits = styled.div`

`
const Item1 = styled.div`

`
const SellSecond = () => {
  return (
    <Container>
        <Wrapper>
            <Image></Image>
            <Main>
                <Title>
                Sell online to national and international clientele
            </Title>
            <Text>Become a 'Maqure' seller, and grow your
dyes and pigments business in and
outside the country exponentially..!</Text>
</Main>
    <Benefits>
        <Item1>
        <ion-icon></ion-icon>    0% Commission</Item1>
    </Benefits>
        </Wrapper>
    </Container>
  )
}

export default SellSecond