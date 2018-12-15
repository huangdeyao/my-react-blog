import http from './http'
import Util from "../util/util";

//     //新增
//     article_add: HOST + '/storage/api/add/article',
//     // 文章上传
//     article_homepage_image_upload: HOST + '/storage/api/image/upload',
//     // 文章上传
//     article_get_details: HOST + '/storage/api/get/article/details?id=',

// 获取token
export const userLogin = (params) => {
    const url = '/sso/oauth/token';
    return http.fetchPost(url, params);
};

// 获取所有文章
export const getAllArticle = (params) => {
    const url = '/storage/api/get/all/article';
    return http.fetchPost(url, params);
};

// 获取标签
export const getAllArticleTags = (params) => {
    const url = '/storage/api/get/article/tags';
    return http.fetchPost(url, params);
};

// 文章详情
export const getArticleDetails = (params) => {
    const url = '/storage/api/get/article/details';
    return http.fetchPost(url, params);
};

// 文件上传
export const uploadFile = (params) => {
    const url = '/storage/api/image/upload';
    const token = localStorage.getItem('access_token');
        return   url + '?access_token=' + token
};