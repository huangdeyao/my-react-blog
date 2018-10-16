import React,{Component} from 'react';
import {WriteCoverWrapper,WriteCoverPreviewWrapper,UploadPictureWrapper} from '../style';

class RichEditorHeaderImg extends Component{
    render(){
        return (
                <WriteCoverWrapper>
                    <WriteCoverPreviewWrapper>
                        <UploadPictureWrapper>
                            <i className="iconfont">&#xe672;</i>
                            <input type="file" accept=".jpeg, .jpg, .png" className="upload-picture-input"/>
                        </UploadPictureWrapper>
                    </WriteCoverPreviewWrapper>
                </WriteCoverWrapper>
        )
    }
}

export default RichEditorHeaderImg;

