import {constants} from './index'
import {getAllArticleTags} from './../../../api/api'

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const tagsData = (result) => ({
    type: constants.TAGS_DATA,
    tagsList: result
});

export const getTagsData = () => {
    return (dispatch) => {
        getAllArticleTags().then(res => {
            if (res.status === 200) {
                const result = res.data.data;
                dispatch(tagsData(result));
            }
        }).catch(reason => {
            console.log("请求异常")
        })
    }
};

export const handleTagBtn = (tagName) => ({
    type: constants.TAGS_VALUE,
    tagName: tagName
});