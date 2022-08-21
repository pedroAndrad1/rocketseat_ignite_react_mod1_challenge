import styled, { css } from "styled-components";

export const TaskContainer = styled.li`
  display: grid;
  grid-template-columns: 0.05fr 0.85fr 0.1fr;
  align-items: center;
  justify-content: flex-start;

  backdrop-filter: blur(25px) saturate(92%);
  -webkit-backdrop-filter: blur(25px) saturate(92%);
  background-color: rgba(38, 38, 38, 0.4);
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  padding: 16px;
  gap: 12px;

  & ~ & {
    margin-top: 1rem;
  }
`;

export const Checkbox = styled.div`
  input {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }
`;
interface LabelProps {
  checked: boolean;
}
export const Label = styled.label<LabelProps>`
  transition: 0.3s filter;

  &:hover {
    filter: brightness(0.5);
  }

  &::after {
    content: "";
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: url("../../assets/not-checked.svg") no-repeat center center;
    transition: 0.3s background-image;
  }

  ${({ checked }) => {
    return (
      checked &&
      css`
        &::after {
          background: url("../../assets/checked.svg") no-repeat center center;
        }

        &:hover {
          filter: brightness(1.2);
        }
      `
    );
  }}
`;

export const Delete = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  width: 24px;
  height: 24px;
  background: url("../../assets/trash.svg") no-repeat center center;
  transition: 0.3s background-image;

  &:hover {
    background: url("../../assets/trash-hover.svg") no-repeat center center;
  }
`;
interface TaskContentProps {
  checked: boolean;
}
export const TaskContent = styled.p<TaskContentProps>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #f2f2f2;

  transition: 0.3s;

  ${({ checked }) => {
    return (
      checked &&
      css`
        text-decoration-line: line-through;
        color: #808080;
      `
    );
  }}
`;
