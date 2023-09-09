import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 300px;
  border: 1px solid #ff8375;
  border-radius: 5px;
`;

export const FinderTitle = styled.div`
  width: 100%;
  height: 30px;
  background-color: #ff8375;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  > span {
    color: #fff;
  }
`;

export const FinderContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
