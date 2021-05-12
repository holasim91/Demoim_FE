import React from 'react';
import styled from 'styled-components';

const Image = (props) => {


  const { shape, src, size, shadow } = props;


  const styles = {
    src: src,
    size: size,
    shadow: shadow,
  }

  if (shape === "circle") {
    return (
      <ImageCircle {...styles}></ImageCircle>
    )
  }
  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    )

  }


  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  )

}

Image.defaultProps = {
  shape: "circle",
  src: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
  size: 36,
  shadow: false,

}

const ImageDefault = styled.div`
  --size:${(props) => props.size}px;
  width : var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

const AspectOutter = styled.div`
  width:100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top:75%;  
  overflow : hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size:${(props) => props.size}px;
  width : var(--size);
  height: var(--size);
  min-width:var(--size);
  border-radius:var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
  ${(props) => props.shadow ? 'box-shadow: 3px 1px 2px rgba(0, 0, 0, 0.1);' : ''}
`;

export default Image;