import React, {Component} from 'react'
import {AppHeader, AppHeaderInner, Logo, NavItem, SearchWrapper, NavSearch} from "./style";

class Index extends Component {
    render() {
        return (
            <AppHeader>
                <AppHeaderInner>
                    <Logo/>
                    <NavItem className='left active'>首页</NavItem>
                    <SearchWrapper>
                        <NavSearch/>
                    </SearchWrapper>
                </AppHeaderInner>
            </AppHeader>
        )
    }
}

export default Index;