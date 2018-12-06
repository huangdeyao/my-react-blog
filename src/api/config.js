/***
 *
 *统一定义接口，有利于维护
 *
 **/

const HOST = 'http://article.yrclubs.com';
const URL = {
    //获取所有文章
    article_get_all: HOST + '/storage/api/get/all/article',
    //新增
    article_add: HOST + '/storage/api/add/article',
    // 文章上传
    article_homepage_image_upload: HOST + '/storage/api/image/upload',
    // 文章上传
    article_get_details: HOST + '/storage/api/get/article/details?id=',
    // 获取标签
    article_get_tags: HOST + '/storage/api/get/article/tags',
    //获取所有文章
    get_token: HOST + '/sso/oauth/token',
};
export default URL
