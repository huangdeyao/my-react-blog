import React, {Component} from 'react';
import RichEditorHeaderImg from './RichEditorHeaderImg';
import {connect} from 'react-redux';
import {LayoutMain, WriteIndexTitleInput, TextareaInput} from '../style';
import {actionCreators} from "../../write/store";
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'


class RichEditor extends Component {
    render() {
        const {titleHandleChange} = this.props;
        return (
            <LayoutMain>
                <WriteIndexTitleInput>
                    <TextareaInput placeholder="请输入标题（最多 50 个字）" onChange={titleHandleChange}/>
                </WriteIndexTitleInput>
                    <BraftEditor/>
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
    }
});

export default connect(mapState, mapDispatch)(RichEditor);

