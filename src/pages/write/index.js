import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriteHome} from './style';
import RichEditor from './common/RichEditor';
import {actionCreators as writeActionCreators} from "./store";
import {Redirect, withRouter} from 'react-router-dom';


class Index extends PureComponent {
    render() {
        const {release, articleId} = this.props;
        // if (loginStatus) {
            if (!release) {
                return (
                    <WriteHome>
                        <RichEditor/>
                    </WriteHome>
                )
            } else {
                return <Redirect to={'/detail/' + articleId}/>
            }
        // }else {releaseArticle
        //     return <Redirect to='/login'/>
        // }
    }

    componentDidMount(){
        this.props.handleWriting();
    }

    componentWillUnmount(){
        this.props.handleWritten();
    }
}


const mapState = (state) => ({
    release: state.getIn(['write', 'release']),
    articleId: state.getIn(['write', 'articleId']),
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    releaseArticle() {
        dispatch(writeActionCreators.releaseArticle(true));
    },
    handleWriting(){
        dispatch(writeActionCreators.handleWriting());
    },
    handleWritten(){
        dispatch(writeActionCreators.handleWritten());
    }
});

export default connect(mapState, mapDispatch)(withRouter(Index));