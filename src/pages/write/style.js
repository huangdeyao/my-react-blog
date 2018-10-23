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
    line-height: 192px;
    min-height: 192px;
    text-align: center;
`;
export const WriteCoverPreviewWrapper = styled.div`
    background: #f7f8f9;
    line-height: 192px;
    min-height: 192px;
    text-align: center;
`;
export const UploadPictureWrapper = styled.label`
   .upload-picture-input {
       display: none;
   }
 	.iconfont {
		width: 45px;
		line-height: 45px;
		border-radius: 15px;
		text-align: center;
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
export const PostEditor = styled.div`
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0;
    margin-bottom: 15px;
    overflow: hidden;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
`;
export const EditableToolbarSticky = styled.div`
    align-items: center;
    display: flex;
    height: auto;
    background: transparent;
    border-top: 1px solid rgba(0,0,0,.08);
    border-bottom: 1px solid rgba(0,0,0,.08);
    flex-direction: row;
    padding: 8px;
    .nav:hover{
        background: #f7f8f9!important; 
    }
    .right {
        position: relative;
        display: inline-block;
        margin-left: auto;
    }
    .separator {
        border-right: 1px solid #ebebeb;
    }
`;
export const EditorButton = styled.div`{
    padding: 0 3px;
    text-align: center;
    font-size: 14px;
    color: #8590a6;
    cursor: pointer;
    width: 20px;
    height: 24px;
    line-height: 24px;
    .iconfont {
		&.focused {
			color: #0084ff;
		}
	}
`;
export const ContainerBtn = styled.div`{
    position: fixed;
    top: 100px;
    line-height: 160px;
    font-size: 12px;
    margin: auto 0;
    padding: 0;
    width: 800px;
    left:50%;
    margin-left:-400px;
    z-index: -1;
    display: flex;
    flex-direction: row-reverse;
    height: 300px;
}`;
export const NavItem = styled.div`
    margin: 8px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #0084ff;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
`;
