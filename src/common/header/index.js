import React, {Component} from 'react'
import {
    AppHeader,
    AppHeaderInner,
    Logo,
    AppHeaderNav,
    AppHeaderNavItem,
    SearchWrapper,
    NavSearch,
    AppHeaderUserInfo,
    NavItem,
    AppHeaderProfileEntry
} from "./style";

class Index extends Component {
    render() {
        return (
            <AppHeader>
                <AppHeaderInner>
                    <Logo/>
                    <AppHeaderNav>
                        <AppHeaderNavItem className='active'>首页</AppHeaderNavItem>
                        <AppHeaderNavItem className='nav'>发现</AppHeaderNavItem>
                        <AppHeaderNavItem className='nav'>话题</AppHeaderNavItem>
                    </AppHeaderNav>
                    <SearchWrapper>
                        <NavSearch/>
                    </SearchWrapper>
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

export default Index;