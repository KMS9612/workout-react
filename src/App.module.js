import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginWrap = styled.div`
  @media screen and (min-width: 800px) {
    width: 500px;
    height: 50%;
    border: 3px solid #fff;
    background-color: #fff;
    border-radius: 10px;
  }
  @media screen and (max-width: 800px) {
    width: 400px;
    height: 50%;
    border: 3px solid #fff;
    background-color: #fff;
    border-radius: 10px;
  }
`;
