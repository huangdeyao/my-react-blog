import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {actionCreators} from "../store";
import {Link} from 'react-router-dom';
import {ItemContainer, ItemTitle, ItemInfo, ItemImage, ItemDes, ItemTools, ItemToolslike, LoadMore} from '../style';

class HomeList extends PureComponent {

    render() {
        const {articleList, getMoreList, page} = this.props;
        const detail = articleList.toJSON();
        return (
            <div>
                {
                    detail.map(item => (
                            <ItemContainer key={item.id}>
                                <Link to={'/detail/' + item.id}>
                                    <ItemTitle>{item.title}</ItemTitle>
                                </Link>
                                <ItemInfo>
                                    <ItemImage imgUrl={item.imageUrl}/>
                                    <ItemDes dangerouslySetInnerHTML={{__html: item.des}}/>
                                </ItemInfo>
                                <ItemTools>
                                    <div style={{marginRight: '20px'}}>{item.author}</div>
                                    <ItemToolslike>
                                        <i className="iconfont">&#xe743;</i>
                                        {item.likes}
                                    </ItemToolslike>
                                    <ItemToolslike>
                                        <i className="iconfont">&#xe63b;</i>
                                        200
                                    </ItemToolslike>
                                    <ItemToolslike>
                                        <i className="iconfont">&#xe61c;</i>
                                        12000
                                    </ItemToolslike>
                                </ItemTools>
                            </ItemContainer>
                        )
                    )
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}


const mapSate = (state) => ({
    articleList: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
});
export default connect(mapSate, mapDispatch)(HomeList);