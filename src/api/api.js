import http from './http'

//     //新增
//     article_add: HOST + '/storage/api/add/article',
//     // 文章上传
//     article_homepage_image_upload: HOST + '/storage/api/image/upload',
//     // 文章上传
//     article_get_details: HOST + '/storage/api/get/article/details?id=',

// 获取token
export const userLogin = (params) => {
    let url = '/sso/oauth/token';
    return http.fetchPost(url, params);
};

// 获取所有文章
export const getAllArticle = (params) => {
    let url = '/storage/api/get/all/article';
    return http.fetchPost(url, params);
};

// 获取标签
export const getAllArticleTags = (params) => {
    let url = '/storage/api/get/article/tags';
    return http.fetchPost(url, params);
};