import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {ListItem, ListInfo, LoadMore} from '../style';
import {actionCreators} from "../store";
import {Link} from 'react-router-dom';

class List extends PureComponent {
    render() {
        const {articleList, getMoreList, page} = this.props;
        return (
            <div>
                {
                    articleList.map((item, index) => (
                            <ListItem key={index}>
                                <img className='pic'
                                     src={item.get("imgUrl")}
                                     alt=""/>
                                <ListInfo>
                                    <Link to={'/detail/' + item.get('id')}>
                                        <h3 className='title'>{item.get("title")}</h3>
                                    </Link>
                                    <p className='desc'>{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
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
export default connect(mapSate, mapDispatch)(List);