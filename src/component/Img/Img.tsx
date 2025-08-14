import React from 'react';
import { StyledImg } from './Img.styled';
import { ImgProps } from './Img.types';

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
};

export default Img;