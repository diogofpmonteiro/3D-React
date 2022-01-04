import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Description>This is an animated 3D sphere!</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 450px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;
`;

const Description = styled.p`
  max-width: 240px;
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
