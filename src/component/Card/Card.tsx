import React from 'react';
import {
  StyledCard,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
} from './Card.styled';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  disabled,
}) => {
  return (
    <StyledCard disabled={disabled}>
      <CardImage src={imageUrl} alt={imageAlt} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </StyledCard>
  );
};

export default Card;