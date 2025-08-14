import React from 'react';
import { HeroImageContainer, StyledHeroImage, OverlayText } from './HeroImage.styled';
import { HeroImageProps } from './HeroImage.types';

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, text, disabled }) => {
  return (
    <HeroImageContainer disabled={disabled}>
      <StyledHeroImage src={src} alt={alt} />
      {text && <OverlayText>{text}</OverlayText>}
    </HeroImageContainer>
  );
};

export default HeroImage;