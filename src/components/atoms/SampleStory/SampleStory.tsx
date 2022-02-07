import React from "react";
import styled from "styled-components";

export default function SampleStory({}) {
  return (
    <ColorBox>
      <Title>hey. hello!</Title>
    </ColorBox>
  );
}

const ColorBox = styled.div`
  background-color: rgba(30, 125, 200, 0.7);
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;
