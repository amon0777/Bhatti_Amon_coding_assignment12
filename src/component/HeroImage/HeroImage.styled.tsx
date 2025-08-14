import styled from 'styled-components';

export const HeroImageContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: 400px; /* Or whatever height you prefer */
  overflow: hidden;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

export const StyledHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
`;

export const OverlayText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
`;