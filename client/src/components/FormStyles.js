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
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
  margin: 20px 0;
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