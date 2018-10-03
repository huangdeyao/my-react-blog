import React, {Component} from 'react';
import List from './common/List';
import Recommend from './common/Recommend';
import Topic from './common/Topic';
import Writer from './common/Writer';
import {actionCreators} from './store';
import {connect} from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";

class Index extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    }
});

export default connect(null, mapDispatch)(Index);