import {constants} from './index';
import {message} from 'antd';
import ArticleAdd from "../../../api/config";
import {Buffer} from "buffer";
import axios from "axios";

export const handleOk = (state) => {
    return (dispatch) => {
        const content = state.getIn(['write', 'content']);
        console.log(content);
        const params = {
            'author': 'author',
            'title': state.getIn(['write', 'title']),
            'content': Buffer(content).toString('base64'),
            'imageUrl': state.getIn(['write', 'imageUrl']),
            'imageUrlId': state.getIn(['write', 'imageUrlId']),
            'likes': 12,
            'tag': state.getIn(['header', 'tagName'])
        };
        axios.post(ArticleAdd.article_add, params).then(res => {
            const result = res.data.data;
            dispatch(isHandleOk(result.id));
        }).catch(error => {
            console.log(error);
        });
    }
};

const isHandleOk = (articleId) => ({
    type: constants.RELEASE_ARTICLE,
    release: true,
    articleId: articleId
});

export const titleHandleChange = (value) => ({
    type: constants.ARTICLE_TITLE_HANDLE_CHANGE,
    title: value
});

export const tagHandleCancel = (visible) => ({
    type: constants.RELEASE_MODEL,
    tagsModel: visible
});

export const releaseArticle = (visible) => ({
    type: constants.RELEASE_MODEL,
    tagsModel: visible
});

export const articleValue = (content) => ({
    type: constants.ARTICLE_VALUE,
    content: content
});

export const handleChangeState = (data, loading) => ({
    type: constants.ARTICLE_UPLOAD,
    imageUrl: data.imageUrl,
    imageUrlId: data.id,
    loading: loading
});

export const handleWriting = () => ({
    type: constants.HANDLE_WRITING,
    writing: true
});

export const handleWritten = () => ({
    type: constants.HANDLE_WRITTEN,
    writing: false
});


export const handleChange = (info) => {
    return (dispatch) => {
        if (info.file.status === 'uploading') {
            dispatch(handleChangeState('', true));
            return;
        }
        if (info.file.status === 'done') {
            dispatch(handleChangeState(info.file.response.data, false));
        }
    }
};


export const beforeUpload = (file) => {
    // 检查图片类型
    // 只能上传三种图片格式
    const isJPG = file.type === 'image/jpeg';
    const isPNG = file.type === 'image/png';
    const isBMP = file.type === 'image/bmp';
    const isGIF = file.type === 'image/gif';
    const isWEBP = file.type === 'image/webp';
    const isPic = isJPG || isPNG || isBMP || isGIF || isWEBP;
    if (!isPic) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
};
