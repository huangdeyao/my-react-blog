import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {TagContiner, TagsBtn} from "./../style";
import {actionCreators} from './../../header/store';

class WriteTags extends PureComponent {
    render() {
        const {tagsList, handleTagBtn} = this.props;
        return (
            <TagContiner>
                <TagsBtn>
                    {
                        tagsList.map(item => (
                            <Button size="small"
                                    style={{margin: 5}}
                                    key={item.id}
                                    onClick={() => handleTagBtn(item.tagsName)}>
                                {item.tagsName}
                            </Button>
                        ))
                    }
                </TagsBtn>
                <Button type="primary" block>确认并发布</Button>
            </TagContiner>
        )
    }

    componentDidMount() {
        if(this.props.tagsList == null){
            this.props.tagsData();
        }
    };
}

const mapState = (state) => ({
    tagsList: state.getIn(['header', 'tagsList'])
});

const mapDispatch = (dispatch) => ({
    tagsData() {
        dispatch(actionCreators.getTagsData())
    },
    handleTagBtn(tagName) {
        dispatch(actionCreators.handleTagBtn(tagName))
    }
});

export default connect(mapState, mapDispatch)(WriteTags)