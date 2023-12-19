import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: var(--primary-text-color);
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff;
  }
`;
export const HeaderContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
  background: var(--layout-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 18px 10px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 26px 27px;
  }
  @media screen and (min-width: 1200px) {
    padding: 26px 34px;
  }
`;

export const NonAuthNav = styled.nav`
  display: flex;
  stroke: var(--primary-title-text-color);
  align-items: center;
  gap: 3px;
`;

export const LogoLink = styled(Link)`
  color: var(--primary-text-color);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.37;
  cursor: pointer;
  transition: color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.45;
  }

  &:hover,
  &:focus {
    color: var(--primary-title-text-color);
  }
`;
export const NavLink = styled(Link)`
  cursor: pointer;
  color: var(--primary-title-text-color);
  text-align: right;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  transition: color 0.3s;
  &:hover,
  &:focus {
    color: var(--primary-text-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.42;
  }
`;
export const AvatarIcon = styled.svg`
  margin-left: 6px;
  width: 28px;
  height: 28px;
  /* fill: var(--primary-text-color); */
  stroke: var(--primary-title-text-color);
`;

export const AuthNav = styled.div``;

export const UserInfoNav = styled.div``;

export const DropIcon = styled.svg`
  width: 14px;
  height: 14px;
  margin-left: 12px;
  stroke: var(--primary-btn-color);
  cursor: pointer;
`;
export const EditIcon = styled.svg`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  stroke: var(--primary-btn-color);
`;
export const ControlPanel = styled.div`
  align-items: center;
  display: none;

  @media screen and (min-width: 768px) {
    gap: 40px;
    display: flex;
  }
  @media screen and (min-width: 1200px) {
    gap: 80px;
  }
  position: relative;

  .SSSSS {
    width: 392px;
    height: 352px;
    background-color: whitesmoke;
    position: absolute;
    z-index: 1;
    top: 74px;
    /* left: -14px; */
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  z-index: 12;
  overflow: none;
`;

export const ImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  padding: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: rgba(255, 255, 255, 0.01);
`;

export const TextContainer = styled.div`
  position: relative;
  /* width: 100px;
  height: 20px; */
  z-index: 2;
  overflow: none;
  p {
    color: var(--primary-title-text-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
    font-style: normal;
  }
`;

export const EditableText = styled.p`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-left: 4px;
  }
  p {
    color: var(--primary-title-text-color);
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
  }
  @media screen and (min-width: 768px) {
    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.42;
    }
  }
`;
export const FunctionPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 75px;
  }
  @media screen and (min-width: 1200px) {
    gap: 124px;
  }
`;
export const KgSpan = styled.span`
  color: var(--primary-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin-right: 12px;
`;
