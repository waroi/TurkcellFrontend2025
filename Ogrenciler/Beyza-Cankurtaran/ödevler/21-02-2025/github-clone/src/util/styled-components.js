import styled, { keyframes } from "styled-components";
const textGradientAnimation=keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
export const HeaderContainer=styled.header`
width: 80%;
padding: 5px;
text-align: center;
font-size: 20px;
font-weight: bold;
color: white;
`;
export const AnimatedText=styled.span`
background: linear-gradient(45deg, #ff6b6b, #6b6bff, #6bffb3);
background-size: 200% 200%;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: ${textGradientAnimation} 5s ease infinite;
`;
export const Repositories = styled.section`
  background-color: var(--white);
  box-shadow: 0 0 20px var(--shadow);
  padding: 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  overflow-y: scroll;

  @media (max-width: 1200px) {
    & {
      overflow-y: unset;
    }
  }
`;

export const Div = styled.div`
  & a {
    display: block;
    color: var(--primary);
    margin-bottom: 10px;
  }

  & span {
    font-size: 12px;

    &:nth-of-type(1) {
      margin-right: 10px;
    }

    &:nth-of-type(2) {
      margin-right: 25px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  box-shadow: 0 0 20px var(--shadow);
  padding: 25px;
  border-radius: 15px;
  background-color: var(--white);
  height: 85px;

  & i {
    font-size: 24px;
    margin-right: 40px;
  }
`;

export const Search = styled.input`
  outline: none;
  border: none;
  color: inherit;
`;

export const SearchButton = styled.button`
  border: none;
  background-color: var(--primary);
  color: var(--white);
  padding: 5px 15px;
  border-radius: 15px;
  margin-left: auto;
`;

export const Aside = styled.aside`
  background-color: var(--white);
  box-shadow: 0 0 20px var(--shadow);
  padding: 25px;
  border-radius: 15px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & img {
    width: 100%;
    border-radius: 100%;
    border: 5px solid var(--text);
    margin-bottom: 30px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
  }

  & h2 {
    font-size: 20px;
  }

  & h3 {
    color: var(--primary);
    font-size: 17px;
  }

  & p {
    font-size: 14px;

    &.join-date {
      font-size: 10px;
      color: var(--secondary);
      font-style: italic;
    }
  }
`;

export const Button = styled.a`
  background-color: var(--primary);
  color: var(--white);
  padding: 5px 10px;
  border-radius: 15px;
  text-align: center;
`;

export const LanguageIcon = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 100%;
`;
