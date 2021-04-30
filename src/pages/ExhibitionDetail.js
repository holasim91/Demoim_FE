import React from 'react'
import { Container } from "../elements";

const ExhibitionDetail = (props) => {
  const id = props.match.params.exhibitionId;
  console.log(id)
  return (
    <>
    <Container>

      ExhibitionDetail
    </Container>

    </>
  )
}

export default ExhibitionDetail
