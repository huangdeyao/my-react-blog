import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {
    DetailMain,
    DetailAuthor,
    AuthorInfo,
    DetaliHeader
} from './../style';


class ArticleDetail extends PureComponent {
    render() {
        const detail = this.props.detail.toJSON();
        console.log(detail);
        return (
            <DetailMain>
                <DetailAuthor>
                    <img className='avatar' alt='' src="./../../../statics/aticle.jpg"/>
                    <AuthorInfo>
                        <span className='author'>{detail.author}</span>
                        <span className='watch'>+关注</span>
                        <p className='info'>{detail.createDate} 字数 3836 阅读 2085评论 19喜欢 43</p>
                    </AuthorInfo>
                </DetailAuthor>
                <DetaliHeader>{detail.title}</DetaliHeader>
                    <div dangerouslySetInnerHTML={{__html: detail.content}}/>
            </DetailMain>
        )
    }
}

const mapStateToProps = (state) => ({
    detail: state.getIn(['detail', 'article'])
});

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);