import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store';
import ArticleDetail from './common/ArticleDetail';
import {
    DetailWrapper,
    ArticleLeft,
    ArticleRight
} from './style';

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <ArticleLeft>
                    <ArticleDetail/>
                </ArticleLeft>
                <ArticleRight>1322</ArticleRight>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    detail: state.getIn(['detail', 'article'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));