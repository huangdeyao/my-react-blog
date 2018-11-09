import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {ListItem, ListInfo, LoadMore} from '../style';
import {actionCreators} from "../store";
import {Link} from 'react-router-dom';
import {List, Avatar, Icon} from 'antd';


const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

class HomeList extends PureComponent {

    render() {
        const {articleList, getMoreList, page} = this.props;
        return (
            <ListItem>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={listData}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,<IconText type="message" text="2"/>]}
                            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>} >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar}/>}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </ListItem>
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