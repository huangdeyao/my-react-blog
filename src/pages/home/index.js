import React, {PureComponent} from 'react';
import HomeList from './common/HomeList';
import Recommend from './common/Recommend';
import Writer from './common/Writer';
import Advertisement from './common/Advertisement';
import {actionCreators} from './store';
import {connect} from 'react-redux';
import {Tabs, BackTop} from 'antd';
import {StickyContainer, Sticky} from 'react-sticky';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";

const TabPane = Tabs.TabPane;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({style}) => (
            <DefaultTabBar {...props} style={{...style, zIndex: 1, background: '#fff', margin: '0'}}/>
        )}
    </Sticky>
);

class Index extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <StickyContainer>
                        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} onChange={callback}>
                            <TabPane tab="Tab 1" key="1"> <HomeList/></TabPane>
                            <TabPane tab="Tab 2" key="2"> <HomeList/></TabPane>
                            <TabPane tab="Tab 3" key="3"> <HomeList/></TabPane>
                        </Tabs>
                    </StickyContainer>
                </HomeLeft>
                <HomeRight>
                    <Writer/>
                    <Advertisement/>
                    <Recommend/>
                </HomeRight>
                <BackTop/>
            </HomeWrapper>
        )
    };

    componentDidMount() {
        this.props.changeHomeData();
    };
}

function callback(key) {
    console.log(key);
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll']),
});
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollShow() {
        if (document.documentElement.scrollTop > 150) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }

    }
});

export default connect(mapState, mapDispatch)(Index);