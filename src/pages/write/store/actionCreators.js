import {constants} from './index';

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