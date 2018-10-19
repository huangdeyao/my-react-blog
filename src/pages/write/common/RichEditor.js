import React, {Component} from 'react';
import RichEditorHeaderImg from './RichEditorHeaderImg';
import EditableToolbar from './EditableToolbar';
import {Editor, EditorState,RichUtils} from 'draft-js';
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
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command,editorState){
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        return (
            <LayoutMain>
                <RichEditorHeaderImg/>
                <WriteIndexTitleInput>
                    <TextareaInput placeholder="请输入标题（最多 50 个字）"/>
                </WriteIndexTitleInput>
                <EditableToolbar/>
                <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                <Editor
                    placeholder="Enter some text..."
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange} />
            </LayoutMain>
        )
    }
}

export default RichEditor;

