import styled from 'styled-components';

export const WriteHome = styled.div`
    min-height: 1200px;
`;
export const LayoutMain = styled.div`
    background: #fff;
    margin: 30px auto 0;
    padding: 0;
    width: 640px;
    min-height: auto;
    z-index: 1;
`;
export const WriteCoverWrapper = styled.div`
    cursor: pointer;
    background: #f7f8f9;
    text-align: center; 
    height: 208px;
    width: 640px;
    line-height: 208px;
    display: flex;
    justify-content:center;
    align-items: center;
`;
export const WriteTitleImg = styled.div`
    display: block;
	width: 624px;
	height: 208px;
	background: url(${(props) => props.imgUrl});
	background-size: cover;
	cursor: pointer;
	:hover{
       opacity: 0.5;
    }
`;
export const WriteIndexTitleInput = styled.div`
    margin: 16px 0;
    display: flex;
    background: #fff;
    border-radius: 3px;
    box-sizing: border-box;
    border: 0;
    padding: 0;
    font-size: 32px;
    min-height: 44px;
    height: 44px;
    width: 100%;
    position: relative;
    transition: background .2s,border .2s;
`;
export const TextareaInput = styled.textarea`
    flex: 1;
    height: 44px;
    color: #1a1a1a;
    padding: 0;
    overflow: hidden;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-weight: bold;
    ::-webkit-input-placeholder {  
        color: #aaa;
    }
    :-moz-placeholder {  
        color: #aaa;
        opacity:  1;
    }
    ::-moz-placeholder {  
        color: #aaa;
        opacity:  1;
    }
    :-ms-input-placeholder {  
        color: #aaa;
    }
    ::-ms-input-placeholder {  
        color: #aaa;
    }
`;
export const ContainerFixed = styled.div`{
    position: fixed;
    top: 100px;
    line-height: 160px;
    font-size: 12px;
    margin: auto 0;
    padding: 0;
    right:50%;
    margin-right:-400px;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    background: transparent;
}`;
export const ContainerBtn = styled.div`{
    padding: 0;
    width: 60px;
}`;
export const NavItem = styled.div`
    cursor: pointer;
    margin: 8px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
    text-align: center;
    background-color: #fff;
    transition: background .2s,border .2s;
    &:hover{
        background-color: #f7f8f9;
        transition: background .2s,border .2s; 
        .iconfont {
            color: #0084ff;
        }
    }
    .iconfont {
        color: #aaa;
    }
`;
