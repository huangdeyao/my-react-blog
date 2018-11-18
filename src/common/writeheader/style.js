import styled from 'styled-components';
import logoPic from '../../statics/logo_writing.png';

export const AppHeader = styled.div`
    position: relative;
    z-index: 100;
    min-width: 1032px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box;
`;

export const AppHeaderInner = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1024px;
    height: 52px;
    padding: 0 14px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
`;

export const Logo = styled.div`
	display: block;
	width: 100px;
	height: 52px;
	background: url(${logoPic}) no-repeat;
	background-size: contain;
	cursor: pointer;
`;

export const AppHeaderUserInfo = styled.div`
	-webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

export const NavItem = styled.div`
  margin-right: 25px;
  cursor: pointer;
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 22px;
        font-style: normal;
        color: #8a8a8a;
        :hover{
            color:#0084ff!important;      
        }
     }
`;

export const AppHeaderProfileEntry = styled.div`
     cursor: pointer;
     display: relative;
     background: url(${(props) => props.imgUrl});
     background-size: contain;
     width: 30px;
     height: 30px;
`;

export const TitleTip = styled.div`
    color: #666;
    padding: 0;
    background: transparent;
`;

export const TagContiner = styled.div`
    width: 336px;
`;

export const TagsBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 35px;
`;

