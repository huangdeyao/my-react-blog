import React, {Component} from 'react';
import RichEditorHeaderImg from './RichEditorHeaderImg';
import EditableToolbar from './EditableToolbar';
import {Editor, EditorState} from 'draft-js';
import {
    LayoutMain,
    WriteIndexTitleInput,
    TextareaInput
} from '../style';

class RichEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }

    render() {
        return (
            <LayoutMain>
                <RichEditorHeaderImg/>
                <WriteIndexTitleInput>
                    <TextareaInput placeholder="请输入标题（最多 50 个字）"/>
                </WriteIndexTitleInput>
                <EditableToolbar/>
                <Editor
                    placeholder="Enter some text..."
                    editorState={this.state.editorState}
                    onChange={this.onChange} />
            </LayoutMain>
        )
    }
}

export default RichEditor;

