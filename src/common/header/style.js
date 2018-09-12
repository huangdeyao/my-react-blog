import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const AppHeader = styled.div`
    position: relative;
    z-index: 100;
    height: 52px;
    background: #fff;
    min-width: 1032px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box;
`;

export const AppHeaderInner = styled.div`
    display: flex;
    width: 1000px;
    padding: 0 16px;
    margin: 0 auto;
    align-items: center;
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const Logo = styled.a`
	position: relative;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 52px;
	background: url(${logoPic});
	background-size: contain;
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
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
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

