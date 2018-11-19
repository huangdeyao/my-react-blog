import {constants} from './index'
import homeList from "../../../api/config";
import axios from "axios/index";

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
        axios.get(homeList.article_get_tags).then((res) => {
            const result = res.data.data;
            dispatch(tagsData(result));
        });
    }
};

export const handleTagBtn=(tagName)=>({
    type: constants.TAGS_VALUE,
    tagName: tagName
});