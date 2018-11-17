import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Avatar, Menu, Dropdown, Icon} from 'antd';
import {
    AppHeader,
    AppHeaderInner,
    Logo,
    AppHeaderUserInfo,
    NavItem,
    AppHeaderProfileEntry,
    titleTip
} from "./style";
import userImage from './../../statics/2.jpeg';

const draft = {
    backgroundColor: 'transparent',
    marginRight: '25px',
    marginLeft: '5px'
};
const avatarStyle = {
    marginLeft: '25px'
};

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);


class Index extends Component {
    render() {
        return (
            <AppHeader>
                <AppHeaderInner>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <AppHeaderUserInfo>
                        <titleTip>文章会自动保存到</titleTip>
                        <Button size="small" type="dashed" style={draft}>草稿</Button>
                        <NavItem><i className="iconfont">&#xe672;</i></NavItem>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#">
                                发布 <Icon type="down"/>
                            </a>
                        </Dropdown>
                        <Avatar src={userImage} style={avatarStyle}/>
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