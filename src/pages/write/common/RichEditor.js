import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from "../../write/store";
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { LayoutMain, WriteIndexTitleInput, TextareaInput } from '../style';

class RichEditor extends Component {
    render() {
        const {titleHandleChange} = this.props;
        return (
            <LayoutMain>
                <WriteIndexTitleInput>
                    <TextareaInput placeholder="请输入标题（最多 50 个字）" onChange={titleHandleChange}/>
                </WriteIndexTitleInput>
                <BraftEditor
                    contentStyle={{height: 'auto', minHeight: 600}}
                />
            </LayoutMain>
        )
    }
}


const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
    getValue(content) {
        dispatch(actionCreators.articleValue(content))
    },
    titleHandleChange(e) {
        dispatch(actionCreators.titleHandleChange(e.target.value))
    },
    handlePreview() {

    }
});

export default connect(mapState, mapDispatch)(RichEditor);

