import React, {PureComponent} from 'react';
import HomeList from './common/HomeList';
import Recommend from './common/Recommend';
import Topic from './common/Topic';
import Writer from './common/Writer';
import {actionCreators} from './store';
import {connect} from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from "./style";

class Index extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    {/*<Topic/>*/}
                    <HomeList/>
                </HomeLeft>
                {/*<HomeRight>*/}
                    {/*<Recommend/>*/}
                    {/*<Writer/>*/}
                {/*</HomeRight>*/}
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    };

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    };
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollShow)
    };

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow)
    };
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll']),
});
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollShow() {
        if (document.documentElement.scrollTop > 150){
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }

    }
});

export default connect(mapState, mapDispatch)(Index);