import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Avatar, Icon, Popover} from 'antd';
import userImage from './../../statics/2.jpeg';
import RichEditorHeaderImg from './../../pages/write/common/RichEditorHeaderImg';
import WriteTags from './common/WriteTags';
import {
    AppHeader,
    AppHeaderInner,
    Logo,
    AppHeaderUserInfo,
    NavItem,
    AppHeaderProfileEntry,
    TitleTip,
    TagContiner,
    TagsBtn
} from "./style";

const draft = {
    backgroundColor: 'transparent',
    marginRight: '25px',
    marginLeft: '5px'
};
const avatarStyle = {
    marginLeft: '25px'
};
const text = <span>选择分类</span>;
const content = (<WriteTags/>);
const upload = (<RichEditorHeaderImg/>);


class Index extends Component {
    render() {
        const {imageUrl} = this.props;
        return (
            <AppHeader>
                <AppHeaderInner>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <AppHeaderUserInfo>
                        <TitleTip>文章会自动保存到</TitleTip>
                        <Button size="small" type="dashed" style={draft}>草稿</Button>
                        <Popover placement="bottom" content={upload} trigger="click">
                            <NavItem>
                                {
                                    imageUrl ? <i className="iconfontHover">&#xe672;</i> :
                                        <i className="iconfont">&#xe672;</i>
                                }
                            </NavItem>
                        </Popover>
                        <Popover placement="bottom" title={text} content={content} trigger="click">
                            <a className="ant-dropdown-link" href="#">
                                发布 <Icon type="down"/>
                            </a>
                        </Popover>
                        <Avatar src={userImage} style={avatarStyle}/>
                        <AppHeaderProfileEntry/>
                    </AppHeaderUserInfo>
                </AppHeaderInner>
            </AppHeader>
        )
    }
}

const initMapStateToProps = (state) => ({
    imageUrl: state.getIn(['write', 'imageUrl'])
});

const initMapDispatchToProps = (dispatch) => ({});

export default connect(initMapStateToProps, initMapDispatchToProps)(Index);