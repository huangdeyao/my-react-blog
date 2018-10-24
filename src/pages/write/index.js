import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriteHome, ContainerFixed, ContainerBtn, NavItem} from './style';
import RichEditor from './common/RichEditor';
import {actionCreators} from "../write/store";
import {actionCreators as writeActionCreators} from "./store";

class Index extends PureComponent {

    render() {
        const {releaseArticle} = this.props;
        return (
            <WriteHome>
                <RichEditor/>
                <ContainerFixed>
                    <ContainerBtn>
                        <NavItem><i className="iconfont" onClick={releaseArticle}>&#xe62f;</i></NavItem>
                        <NavItem><i className="iconfont">&#xe6c4;</i></NavItem>
                        <NavItem><i className="iconfont">&#xe613;</i></NavItem>
                    </ContainerBtn>
                </ContainerFixed>
            </WriteHome>
        )
    }

    componentDidMount() {
        this.props.writingHandle(true);
    };

    componentWillUnmount() {
        this.props.writingHandle(false);
    };
}


const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
    writingHandle(handle) {
        dispatch(actionCreators.writingHandle(handle))
    },
    releaseArticle(){
        dispatch(writeActionCreators.releaseArticle());
    }
});

export default connect(mapState, mapDispatch)(Index);
