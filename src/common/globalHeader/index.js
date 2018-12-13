import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreators} from '../header/store';
import {actionCreators as loginActionCreators} from './../../pages/login/store';
import anIcon from '../../statics/anonymous.jpg';
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
        const {focused, handleInputFocus, handleInputBlur, login, imgUrl, loginOut, clearLocalStorage} = this.props;
        return (
            <AppHeader>
                <AppHeaderInner>
                    <Link to='/'>
                        <Logo/>
                    </Link>
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
                            <NavSearch className={focused ? 'focused' : ''}
                                       onFocus={handleInputFocus}
                                       onBlur={handleInputBlur}/>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                    </SearchWrapper>
                    <AppHeaderUserInfo>
                        <NavItem onClick={clearLocalStorage}><i className="iconfont">&#xe6d6;</i></NavItem>
                        <NavItem><i className="iconfont">&#xe60a;</i></NavItem>
                        {
                            login ? <AppHeaderProfileEntry onClick={loginOut} imgUrl={imgUrl}/> :
                                <Link to='/login'><AppHeaderProfileEntry imgUrl={anIcon}/></Link>
                        }
                    </AppHeaderUserInfo>
                </AppHeaderInner>
            </AppHeader>
        )
    }
}

const initMapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        login: state.getIn(['login', 'login']),
        imgUrl: state.getIn(['login', 'imgUrl'])
    }
};

const initMapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        loginOut() {
            dispatch(loginActionCreators.loginOut());
        },
        clearLocalStorage() {
            // window.localStorage.setItem('token',"");
            window.localStorage.clear();
            console.log('=====>'+ window.localStorage.getItem('token'));
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Index);