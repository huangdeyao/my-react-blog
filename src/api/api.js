import http from './http'

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