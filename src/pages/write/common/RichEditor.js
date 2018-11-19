import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from "../../write/store";
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import {LayoutMain, WriteIndexTitleInput, TextareaInput} from '../style';
import UploadUrl from './../../../api/config'

class RichEditor extends Component {
    render() {
        const {titleHandleChange, content, handleChange} = this.props;
        return (
            <LayoutMain>
                <WriteIndexTitleInput>
                    <TextareaInput placeholder="请输入标题（最多 50 个字）" onChange={titleHandleChange}/>
                </WriteIndexTitleInput>
                <BraftEditor
                    contentStyle={{height: 'auto', minHeight: 600}}
                    value={content}
                    onChange={handleChange}
                    media={{uploadFn: myUploadFn}}
                />
            </LayoutMain>
        )
    }
}

const myUploadFn = (param) => {

    const serverURL = UploadUrl.article_homepage_image_upload;
    const xhr = new XMLHttpRequest;
    const fd = new FormData();

    const successFn = (response) => {
        // 假设服务端直接返回文件上传后的地址
        // 上传成功后调用param.success并传入上传后的文件地址
        const data = JSON.parse(response.currentTarget.responseText);
        console.log(data.data.imageUrl);
        param.success({
            url: data.data.imageUrl
        })
    };

    const progressFn = (event) => {
        // 上传进度发生变化时调用param.progress
        param.progress(event.loaded / event.total * 100)
    };

    const errorFn = (response) => {
        console.log(response);
        // 上传发生错误时调用param.error
        param.error({
            msg: 'unable to upload.'
        })
    };

    xhr.upload.addEventListener("progress", progressFn, false);
    xhr.addEventListener("load", successFn, false);
    xhr.addEventListener("error", errorFn, false);
    xhr.addEventListener("abort", errorFn, false);

    fd.append('file', param.file);
    xhr.open('POST', serverURL, true);
    xhr.send(fd)
};


const mapState = (state) => ({
    content: state.getIn(['write', 'content'])
});

const mapDispatch = (dispatch) => ({
    getValue(content) {
        dispatch(actionCreators.articleValue(content))
    },
    titleHandleChange(e) {
        dispatch(actionCreators.titleHandleChange(e.target.value))
    },
    handleChange(editorState) {
        dispatch(actionCreators.articleValue(editorState.toHTML()))
    }
});

export default connect(mapState, mapDispatch)(RichEditor);

