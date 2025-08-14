import styled from 'styled-components';

export const StyledCard = styled.div<{ disabled?: boolean }>`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  font-family: Arial, sans-serif;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.2s;
  &:hover {
    transform: ${(props) => (props.disabled ? 'scale(1)' : 'scale(1.05)')};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.25rem;
  color: #333;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;