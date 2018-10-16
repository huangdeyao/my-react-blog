import React, {Component} from 'react';
import RichEditorHeaderImg from './RichEditorHeaderImg'
import EditableToolbar from './EditableToolbar'
import {
    LayoutMain,
    WriteIndexTitleInput,
    TextareaInput
} from '../style';

class RichEditor extends Component {
    render() {
        return (
            <LayoutMain>
                <RichEditorHeaderImg/>
                <WriteIndexTitleInput>
                    <TextareaInput placeholder="请输入标题（最多 50 个字）"/>
                </WriteIndexTitleInput>
                <EditableToolbar/>
            </LayoutMain>
        )
    }
}

export default RichEditor;

