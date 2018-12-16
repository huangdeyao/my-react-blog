import http from './http'

//     //新增
//     article_add: HOST + '/storage/api/add/article',


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

// 文件保存
export const addArticle = (params) => {
    const url = '/storage/api/add/article';
    return http.fetchPost(url, params);
};