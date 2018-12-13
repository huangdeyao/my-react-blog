import styled from 'styled-components';
import signBg from './../../statics/images/sign_bg.jpg';

export const LoginWrapper = styled.div`
    background: url(${signBg}) no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginContent = styled.div`
    width: 432px;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box;
`;

export const LoginLogoWrapper = styled.div`
    text-align: center;
    .login-img {
        width: 100px;
        margin: 30px 0 0;
    }
    .login-p {
        text-align: center;
        margin-top: 8px;
        color: #0084ff;
        font-size: 22px;
    }
`;

export const LoginAside = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 5px;
`;

export const LoginOther = styled.div`
    padding: 0 40px;
    background-color: #f6f6f6;
    height: 58px;
    line-height: 58px;
    border-top: 1px solid #ebebeb;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .iconfont {
        margin-left: 12px;
        cursor: pointer;
        font-family: "iconfont" !important;
        font-size: 22px;
        font-style: normal;
        color: #8a8a8a;
        :hover{
            color:#0084ff!important;      
        }
     }
`;
