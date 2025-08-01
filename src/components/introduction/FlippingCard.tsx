import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
    from { transform: rotateY(0); }
    to { transform: rotateY(360deg); }
`;

const FlippingCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  animation: 1s ${animation} 1 ease-out;
`;

type Props = {
    front: ReactNode;
    back: ReactNode;
    className?: string;
  };
  
  export const FlippingCard = styled(({ front, back, className }: Props) => {
    return (
      <div className={className}>
        <FlippingCardInner>
          {front}
          {back}
        </FlippingCardInner>
      </div>
    );
  })`
    width: 100%;
    height: 100%;
    border-radius: 100em;
    perspective: 1000px;
    &:hover ${FlippingCardInner} {
      transform: rotateY(179.99deg);
    }
  
    & .flipping-card-front,
    .flipping-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
  
    & .flipping-card-back {
      transform: rotateY(180deg);
    }
  `;  