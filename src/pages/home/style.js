import styled from 'styled-components';
import image from '../../statics/timg.gif';

export const AppMain = styled.div`
    display: block;
`;

export const TopstoryContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    position: relative;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto;
`;

export const TopstoryMainColumn = styled.div`
     margin-right: 10px;
`;

export const Card = styled.div`
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box;
`;

export const TopstoryHeader = styled.div`
     display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 58px;
    padding: 0 20px;
`;

export const TopstoryHeaderNav = styled.div`
        display: block;
`;
export const TopstoryHeaderNavItem = styled.div`
    display: inline-block;
    transition: color .2s ease-in;
    padding: 0 12px;
    font-size: 16px;
    line-height: 32px;
    color: #1a1a1a;
    text-align: center;
    cursor: pointer;
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 14px;
        font-style: normal;
        color: #8a8a8a;
        margin-right: 5px;
    }
`;
export const TopstoryHeaderRightItem = styled.div`
    color: #8590a6;
    font-size: 14px;
    transition: color .2s ease-in;
    cursor: pointer;
`;

export const TopstoryMain = styled.div`
    width: 694px;
    padding-bottom: 20px;
`;
export const TopstoryItem = styled.div`
    width: 694px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box;
    position: relative;
    padding: 16px 20px;
`;

export const GlobalSideBar = styled.div`
    width: 694px;
    padding-bottom: 20px;
`;

export const Image = styled.image`
    justify-content: center;
	background: url(${image}) no-repeat;
	background-size: contain;
	align-items: center;
	position: relative;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;