import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ContainerBtn, ContainerFixed, NavItem, WriteHome} from './style';
import RichEditor from './common/RichEditor';
import {actionCreators as writeActionCreators} from "./store";
import {Tooltip} from 'antd';
import ReleaseArtile from './common/ReleaseModal';
import {Redirect} from 'react-router-dom';

class Index extends PureComponent {
    render() {
        const {releaseArticle, release, articleId} = this.props;
        console.log(123);
        console.log(release);
        console.log(articleId);
        if (!release) {
            return (
                <WriteHome>
                    <RichEditor/>
                    <ContainerFixed>
                        <ContainerBtn>
                            <Tooltip placement="right" title="保存">
                                <NavItem
                                    onClick={releaseArticle}>
                                    <i className="iconfont">&#xe62f;</i>
                                </NavItem>
                            </Tooltip>
                            <ReleaseArtile/>
                            <Tooltip placement="right" title="保存">
                                <NavItem><i className="iconfont">&#xe6c4;</i></NavItem>
                            </Tooltip>
                            <Tooltip placement="right" title="预览">
                                <NavItem><i className="iconfont">&#xe613;</i></NavItem>
                            </Tooltip>
                        </ContainerBtn>
                    </ContainerFixed>
                </WriteHome>
            )
        } else {
            return <Redirect to={'/detail/' + articleId}/>
        }

    }
}


const mapState = (state) => ({
    release: state.getIn(['write', 'release']),
    articleId: state.getIn(['write', 'articleId'])
});

const mapDispatch = (dispatch) => ({
    releaseArticle() {
        dispatch(writeActionCreators.releaseArticle(true));
    }
});

export default connect(mapState, mapDispatch)(Index);
