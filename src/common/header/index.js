import React, {Component} from 'react'
import {AppHeader, AppHeaderInner, Logo, NavItem, SearchWrapper, NavSearch, AnIcon} from "./style";

class Index extends Component {
    render() {
        return (
            <AppHeader>
                <AppHeaderInner>
                    <Logo className='left'/>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>发现</NavItem>
                    <NavItem className='left'>话题</NavItem>
                    <SearchWrapper>
                        <NavSearch/>
                    </SearchWrapper>
                    <AnIcon className='right'/>
                    <NavItem className='right'> <i className="iconfont">&#xe623;</i></NavItem>
                </AppHeaderInner>
            </AppHeader>
        )
    }
}

export default Index;