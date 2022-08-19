import styled from "styled-components";

export const TaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
  width: 100%;

  div:nth-child(1) {
    p {
      color: #4ea8de;
    }
  }
  div:nth-child(2) {
    p {
      color: #8284fa;
    }
  }

  p {
    font-weight: bold;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #333333;
    border-radius: 999px;
    color: #fff;
    padding: 0px 10px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const NoTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top: 1px solid #333333;
  border-radius: 0.5rem;
  padding: 64px 24px;

  div {
    margin-top: 1rem;

    p {
      font-size: 1rem;
      line-height: 140%;
      font-weight: 700;
      margin: 0;
    }
    p:nth-child(1) {
      color: #808080;
    }

    p:nth-child(2) {
      color: #333333;
    }
  }
`;

export const Ul = styled.ul`
  padding: 0;
`;
