import {constants} from './index';
import {message} from 'antd';

export const writingHandle = (handle) => ({
    type: constants.WRITING_HANDLE,
    value: handle
});

export const releaseArticle = () => ({
    type: constants.RELEASE_ARTICLE,
    value: true
});

export const articleValue = (article) => ({
    type: constants.ARTICLE_VALUE,
    value: article
});

export const handleChangeState = (imageUrl, loading) => ({
    type: constants.ARTICLE_UPLOAD,
    imageUrl: imageUrl,
    loading: loading
});

export const handleChange = (info) => {
    return (dispatch) => {
        console.log(info);
        if (info.file.status === 'uploading') {
            dispatch(handleChangeState('', true));
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => dispatch(handleChangeState(imageUrl, false)));
        }
    }
};

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

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
