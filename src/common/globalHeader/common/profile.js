import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AppHeaderProfileEntry
} from "./../style";
import anIcon from '../../../statics/anonymous.jpg';
import {Menu, Dropdown, Icon} from 'antd';

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1"><Icon type="user"/>个人中心</Menu.Item>
        <Menu.Item key="2"><Icon type="setting"/>个人设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3"><Icon type="logout"/>退出登录</Menu.Item>
    </Menu>
);


class Index extends Component {
    render() {
        return (
            <Dropdown overlay={menu} placement="bottomCenter">
                <AppHeaderProfileEntry imgUrl={anIcon}/>
            </Dropdown>
        )
    }
}

function handleMenuClick(e) {
    if(e.key === '1'){
        window.location.href = '#/center'
    }else if(e.key === '2'){
        window.location.href = '#/login'
    }else if(e.key === '3'){
        window.localStorage.clear();
        window.location.href = '#/login'
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Index);