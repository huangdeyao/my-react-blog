import styled from 'styled-components';

export const WriteHome = styled.div`
    min-height: 1200px;
`;

export const LayoutMain = styled.div`
    background: #fff;
    margin: 40px auto 0;
    padding: 0;
    width: 640px;
    min-height: 1160px;
    z-index: 1;
`;

export const WriteCoverWrapper = styled.div`
    cursor: pointer;
    background: #f7f8f9;
    line-height: 192px;
    color: gray;
    min-height: 192px;
    text-align: center;
`;

export const WriteCoverPreviewWrapper = styled.div`
    background: #f7f8f9;
    line-height: 192px;
    color: gray;
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
`;
export const  EditorButton = styled.div`{
    padding: 0 5px;
    text-align: center;
    font-size: 14px;
    color: #8590a6;
    cursor: pointer;
    width: 24px
    height: 24px
    line-height: 24px
`;
export const  EditorButtonRight = styled.div`{
    padding: 0 5px;
    text-align: center;
    font-size: 14px;
    color: #8590a6;
    cursor: pointer;
    width: 24px
    height: 24px
    line-height: 24px
    position: relative;
    display: inline-block;
    margin-left: auto;
`;
export const  EditableToolbarSeparator = styled.span`{
   background-color: #ebebeb;
    display: inline-block;
    height: 20px;
    margin: 0 3px;
    vertical-align: middle;
    width: 1px;
`;