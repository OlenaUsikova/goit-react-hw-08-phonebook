import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-size: 28px;
  font-weight: 600;
  background-color: #fce1a2;
  margin-left: 15px;
  padding: 15px;
 
  &.active {
    color: red;
  }
  &:hover {
    text-decoration: underline;
  }
`;
export const StyledNav = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: row;
  padding: 30px, 30px;
  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fce1a2; 
`