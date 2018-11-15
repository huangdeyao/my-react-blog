/***
 *
 *统一定义接口，有利于维护
 *
 **/

const HOST = 'http://article.yrclubs.com';
// const HOST = 'http://localhost:8770';
const URL = {
    //获取所有文章
    article_get_all: HOST + '/api/get/all/article',
    //新增
    article_add: HOST + '/api/add/article',
    // 文章上传
    article_homepage_image_upload: HOST + '/api/image/upload',
    // 文章上传
    article_get_details: HOST + '/api/get/article/details?id='
};
export default URL
