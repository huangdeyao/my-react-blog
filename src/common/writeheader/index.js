import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    AppHeader,
    AppHeaderInner,
    Logo,
    AppHeaderUserInfo,
    NavItem,
    AppHeaderProfileEntry
} from "./style";

class Index extends Component {
    render() {
        return (
            <AppHeader>
                <AppHeaderInner>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <AppHeaderUserInfo>
                        <NavItem><i className="iconfont">&#xe6d6;</i></NavItem>
                        <NavItem><i className="iconfont">&#xe60a;</i></NavItem>
                        <AppHeaderProfileEntry/>
                    </AppHeaderUserInfo>
                </AppHeaderInner>
            </AppHeader>
        )
    }
}

const initMapStateToProps = (state) => ({});

const initMapDispatchToProps = (dispatch) => ({});

export default connect(initMapStateToProps, initMapDispatchToProps)(Index);