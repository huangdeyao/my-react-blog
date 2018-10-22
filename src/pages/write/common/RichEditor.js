import React, {Component} from 'react';
import Simditor from "simditor";
import $ from "jquery";
import RichEditorHeaderImg from './RichEditorHeaderImg';
import {connect} from 'react-redux';
import {LayoutMain, WriteIndexTitleInput, TextareaInput} from '../style';
import {actionCreators} from "../../write/store";

require("simditor/styles/simditor.css");

class RichEditor extends Component {

    initEditor = () => {
        let config = {
            defaultImage: 'images/image.png',
            params: {},
            tabIndent: true,
            toolbar: [
                'title',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'fontScale',
                'color',
                'ol',
                'ul',
                'blockquote',
                'code',
                'table',
                'link',
                'image',
                'hr',
                'alignment',
            ],
            upload: {
                url: '/updata', //文件上传的接口地址
                params: {
                    appid: 'id',
                    secret: 'xxx',
                }, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
                fileKey: 'file', //服务器端获取文件数据的参数名
                connectionCount: 3,
                leaveConfirm: '正在上传文件',
            },
            toolbarFloat: true,
            toolbarFloatOffset: 0,
            toolbarHidden: false,
            pasteImage: false,
            cleanPaste: false,
            textarea: $(this.refs.textarea)
        };
        this.editor = new Simditor(config);
        this.editor.on('valuechanged', () => {
            this.getValue()
        })
    };

    render() {
        return (
            <LayoutMain>
                <RichEditorHeaderImg/>
                <WriteIndexTitleInput>
                    <TextareaInput placeholder="请输入标题（最多 50 个字）"/>
                </WriteIndexTitleInput>
                <textarea
                    id={this.props.id}
                    ref="textarea"/>
            </LayoutMain>
        )
    }

    componentDidMount = () => {
        this.initEditor();
        const detail = this.props.detail.toJSON();
        this.editor.setValue(detail.content)
    };

    getValue() {
        this.props.getValue(this.editor.getValue().trim());
    };
}

const mapState = (state) => ({
    article: state.getIn(['write', 'article']),
    detail: state.getIn(['detail', 'article'])
});

const mapDispatch = (dispatch) => ({
    getValue(article) {
        dispatch(actionCreators.articleValue(article))
    }
});

export default connect(mapState, mapDispatch)(RichEditor);

