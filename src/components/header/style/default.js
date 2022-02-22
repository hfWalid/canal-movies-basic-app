import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100%;
`;

export const HeaderWrapper = styled.div `
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  max-width: 20%;
  display: flex;
  cursor: pointer;
  justify-content: start;
`;

export const HeaderSvg = styled.svg`
  display: inline-block;
  vertical-align: top;
`;

export const H1 = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
`;

export const NavigationContainer = styled.div`
  display: flex;
  margin-left: 15%;
  width: 60%;
`;
