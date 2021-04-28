import React from "react"
import styled from "styled-components"

const Container = ({ children }) => {



  return (
    <ContainerBox>
      {children}
    </ContainerBox>
  )
}

export default Container




const ContainerBox = styled.div`
  width : 1200px;
  box-sizing: border-box;
  margin: 0px auto;
  padding:0px 20px;

  @media ${props => props.theme.tablet}{
  width: 100%;
  padding: 0px 30px;
  }

  @media ${props => props.theme.mobile}{
  width:100%;
  }
`