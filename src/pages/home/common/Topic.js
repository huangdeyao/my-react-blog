import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    TopicWrapper,
    TopstoryHeaderNav,
    TopstoryHeaderNavItem,
    TopstoryHeaderRightItem
} from '../style';

class Topic extends Component {
    render() {
        const {topicList} = this.props;
        return (
            <TopicWrapper>
                <TopstoryHeaderNav>
                    {
                        topicList.map((item) => (
                            <TopstoryHeaderNavItem key={item.get('id')}>
                                {/*<i className="iconfont">{item.get('icon')}</i>*/}
                                {item.get('title')}
                            </TopstoryHeaderNavItem>
                        ))
                    }
                </TopstoryHeaderNav>
                <TopstoryHeaderRightItem>草稿</TopstoryHeaderRightItem>
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);