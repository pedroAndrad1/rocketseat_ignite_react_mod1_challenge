import styled from "styled-components";

export const NewTaskContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 0.85fr 0.15fr;
  gap: 0.5rem;
  margin-top: -1.5rem;
  margin-bottom: 5rem;
`;
export const InputTask = styled.input`
  border: solid 1px #0d0d0d;
  border-radius: 8px;
  background-color: #262626;
  color: #808080;
  padding: 1rem;

  line-height: 1.5rem;
`;

export const SubmitNewTask = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 8px;
  border: none;
  background-color: #4ea8de;
  color: #fff;
  font-weight: bold;
  padding: 1rem;

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;
