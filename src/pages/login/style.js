import styled from 'styled-components';



export const LoginWrapper = styled.div`
    background-color:#E9F0F5;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

export const LoginContent = styled.div`
    position: absolute;
    background-color: #fff;
    left: 50%;
    top: 50%;
    width: 320px;
    padding: 30px 30px 0 30px;
    transform: translate(-50%,-60%);
    box-shadow: 0 0 10px 2px rgba(40, 138, 204, 0.16);
    border-radius: 3px;
`;

export const Input = styled.input`
  display: block;
  font-size: 14px;
  padding: 8px 10px;
  width: 350px;
  border: 1px solid #ddd;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: block;
  font-size: 14px;
  width: 350px;
  margin: 0 auto;
  padding: 5px 0;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #fff;
  background: #3194d0;
  box-sizing: border-box;
  &:hover {
    background: #187cb7;
    cursor: pointer;
  }
`;