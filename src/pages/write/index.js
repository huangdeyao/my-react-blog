import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Editor, EditorState} from 'draft-js';
// import BlockStyleControls from './common/BlockStyleControls';
import {WriteHome} from './style';
import {actionCreators} from './store';

class Index extends PureComponent {

    constructor(props) {
        super(props);
        this.setEditor = (editor) => {
            this.editor = editor;
        };
        this.focusEditor = () => {
            if (this.editor) {
                this.editor.focus();
            }
        };
    }

    componentDidMount() {
        this.props.handleFocusEditor(this.props.focus);
    }

    render() {
        const {editorState,handleOnchange,editorFocus} = this.props;
        return (
            <WriteHome onClick={this.focusEditor}>
                <Editor
                    ref={this.setEditor}
                    editorState={editorState}
                    onChange={handleOnchange(editorState)}
                />
            </WriteHome>
        )
    }
}


const mapState = (state) => ({
    editorState: state.getIn(['write', 'editorState']),
    editorFocus: state.focus
});

const mapDispatch = (dispatch) => ({
    handleOnchange(editorState){
        dispatch(actionCreators.handleOnchange(editorState))
    },
    handleFocusEditor(editorFocus){
        if (editorFocus) {
            editor.focus();
        }
    },
    handleFocusEditor(editorFocus){
        if (editorFocus) {
            editorFocus;
        }
    }
});

export default connect(mapState, mapDispatch)(Index);
