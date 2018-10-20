import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    TopicWrapper,
    TopstoryHeaderNav,
    TopstoryHeaderNavItem,
    TopstoryHeaderRightItem
} from '../style';

class Topic extends PureComponent {
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
                <Link to={'/write'}>
                <TopstoryHeaderRightItem>草稿</TopstoryHeaderRightItem>
                </Link>
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);