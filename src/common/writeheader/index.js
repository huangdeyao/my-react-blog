import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Avatar, Icon, Popover, Upload, message} from 'antd';
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
import userImage from './../../statics/2.jpeg';

const Dragger = Upload.Dragger;

const draft = {
    backgroundColor: 'transparent',
    marginRight: '25px',
    marginLeft: '5px'
};
const avatarStyle = {
    marginLeft: '25px'
};
const text = <span>选择分类</span>;
const content = (
    <TagContiner>
        <TagsBtn>
            <Button style={{margin: 5}}>android</Button>
            <Button style={{margin: 5}}>前端</Button>
            <Button style={{margin: 5}}>服务器</Button>
            <Button style={{margin: 5}}>服务服</Button>
            <Button style={{margin: 5}}>服务服务器器</Button>
            <Button style={{margin: 5}}>服务器服务器</Button>
        </TagsBtn>
        <Button type="primary" block>确认并发布</Button>
    </TagContiner>
);

const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const upload = (
    <Dragger {...props}>
        <div style={{width: 150}}>
            <p className="ant-upload-drag-icon">
                <Icon type="inbox"/>
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company
                data or other band files</p>
        </div>
    </Dragger>
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
                        <TitleTip>文章会自动保存到</TitleTip>
                        <Button size="small" type="dashed" style={draft}>草稿</Button>
                        <Popover placement="bottom" content={upload} trigger="click">
                            <NavItem><i className="iconfont">&#xe672;</i></NavItem>
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

const initMapStateToProps = (state) => ({});

const initMapDispatchToProps = (dispatch) => ({});

export default connect(initMapStateToProps, initMapDispatchToProps)(Index);