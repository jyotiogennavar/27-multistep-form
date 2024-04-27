import styled from "styled-components";
import { Form } from "formik";

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  padding: 2rem;

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 20rem;
  }

  button {
    padding: 0.5rem 4rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 10rem;
  }

  @media (max-width: 48rem) {
    padding: 1rem;

    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export const ButtonWrapperTwo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const AddressContent = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: start;

  gap: 8rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 16rem;
  }

  @media (max-width: 48rem) {
    flex-direction: column;

    div {
      gap: 1rem;
    }

    input {
      width: 100%;
    }
  }
`;
