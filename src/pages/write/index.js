import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriteHome, ContainerFixed, ContainerBtn, NavItem} from './style';
import RichEditor from './common/RichEditor';
import {actionCreators} from "../write/store";
import {actionCreators as writeActionCreators} from "./store";
import {Tooltip} from 'antd';
import ReleaseArtile from './common/ReleaseModal';

class Index extends PureComponent {
    render() {
        const {releaseArticle, modelVisible} = this.props;
        return (
            <WriteHome>
                <RichEditor/>
                <ContainerFixed>
                    <ContainerBtn>
                        <Tooltip placement="right" title="发布">
                            <NavItem><i className="iconfont"
                                        onClick={releaseArticle(modelVisible)}>&#xe62f;</i></NavItem>
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
    }

    //
    // componentDidMount() {
    //     this.props.writingHandle(true);
    // };
    //
    // componentWillUnmount() {
    //     this.props.writingHandle(false);
    // };
}


const mapState = (state) => ({
    modelVisible: state.getIn(['write', 'modelVisible'])
});

const mapDispatch = (dispatch) => ({
    // writingHandle(handle) {
    //     dispatch(actionCreators.writingHandle(handle))
    // },
    releaseArticle(visible) {
        dispatch(writeActionCreators.releaseArticle(!visible));
    }
});

export default connect(mapState, mapDispatch)(Index);
