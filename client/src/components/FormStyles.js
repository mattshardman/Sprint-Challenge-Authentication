import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  padding: 0 15px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px deepskyblue solid;
  outline: none;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  font-size: 14px;
  background: deepskyblue;
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  margin: 20px 0;
  outline: none;
`;

export const SignUp = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  color: orange;
`