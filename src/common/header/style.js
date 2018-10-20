import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const AppHeader = styled.div`
    position: relative;
    z-index: 100;
    min-width: 1032px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box;
`;

export const AppHeaderInner = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
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

export const AppHeaderNav = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 30px;
    margin-right: 18px;
    color: #999;
    .active {
       color: #0084ff;
       :hover{
           color:#0084ff!important;      
       }
    }
    .nav:hover{
        color:#444!important;      
    }
`;

export const AppHeaderNavItem = styled.div`
    padding: 0 15px;
    font-size: 15px;
    line-height: 30px;
    color: #8590a6;
    cursor: pointer;
`;

export const SearchWrapper = styled.div`
    position: relative;
	float: left;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #0084ff;
			color: #fff;
			cursor: pointer;
		}
	}
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 280px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 280px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
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
  margin-right: 40px;
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

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 15px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #0084ff;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #0084ff;
  }
  &.writting {
    color: #fff;
    background: #0084ff;
  }
`;