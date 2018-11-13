import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {ListItem, ListInfo, LoadMore} from '../style';
import {actionCreators} from "../store";
import {Link} from 'react-router-dom';
import {List, Avatar, Icon} from 'antd';


const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

class HomeList extends PureComponent {

    render() {
        const {articleList, getMoreList, page} = this.props;
        const detail = articleList.toJSON();
        return (
            <div>
                {
                    detail.map((item, index) => (
                            <ListItem key={index}>
                                <img className='pic'
                                     src={item.imageUrl}
                                     alt=""/>
                                <ListInfo>
                                    <Link to={'/detail/' + item.id}>
                                        <h3 className='title'>{item.title}</h3>
                                    </Link>
                                    <p className='desc'>{item.des}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    )
                }
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