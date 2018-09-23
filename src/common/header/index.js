import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
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
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className={this.props.focused ? 'focused' : ''}
                                       onFocus={this.props.handleInputFocus}
                                       onBlur={this.props.handleInputBlur}/>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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

const initMapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
};

const initMapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Index);