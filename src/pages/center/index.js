import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Card, Tag, Icon, Avatar, Divider, Tooltip, Input, Row, Col} from 'antd';
import anIcon from '../../statics/6.jpeg';
import {Link} from 'react-router-dom';
import {
    CenterWrapper,
    CenterLeft,
    CenterRight,
    CenterIcon,
    CenterDetail,
    CenterTeam
} from './style';

class Index extends PureComponent {
    state = {
        tags: ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子', '海纳百川'],
        inputVisible: false,
        inputValue: '',
        notice: [
            {
                id: "xxx1",
                logo: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
                member: "科学搬砖组",
                href: "/"
            }, {
                id: "xxx2",
                logo: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
                member: "全组都是吴彦祖",
                href: "/"
            }, {
                id: "xxx3",
                logo: "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
                member: "中二少女团",
                href: "/"
            }, {
                id: "xxx4",
                logo: "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
                member: "程序员日常",
                href: "/"
            }, {
                id: "xxx5",
                logo: "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
                member: "高逼格设计天团",
                href: "/"
            }, {
                id: "xxx6",
                logo: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
                member: "骗你来学计算机",
                href: "/"
            }
        ],
        operationTabList: [
            {
                key: 'articles',
                tab: (
                    <span>
            文章 <span style={{fontSize: 14}}>(8)</span>
          </span>
                ),
            },
            {
                key: 'applications',
                tab: (
                    <span>
            应用 <span style={{fontSize: 14}}>(8)</span>
          </span>
                ),
            },
            {
                key: 'projects',
                tab: (
                    <span>
            项目 <span style={{fontSize: 14}}>(8)</span>
          </span>
                ),
            },
        ]
    };

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({tags});
    };

    showInput = () => {
        this.setState({inputVisible: true}, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    };

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: ''
        });
    };

    saveInputRef = input => this.input = input;

    render() {
        const {tags, inputVisible, inputValue, notice, operationTabList,children} = this.state;
        console.log(children);
        return (
            <CenterWrapper>
                <CenterLeft>
                    <Card
                        className='tabsCard'
                        bordered={false}
                        tabList={operationTabList}
                        onTabChange={this.onTabChange}
                    >
                        {children}
                    </Card>
                </CenterLeft>
                <CenterRight>
                    <Card>
                        <CenterIcon>
                            <Avatar alt="" src={anIcon} size={100}/>
                            <div className='name'>Serati Ma</div>
                            <div>海纳百川，有容乃大</div>
                        </CenterIcon>
                        <CenterDetail>
                            <div><i className="iconfont">&#xe604;</i>交互专家</div>
                            <div><i className="iconfont">&#xe668;</i>蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
                            <div><i className="iconfont">&#xe61b;</i>浙江省杭州市</div>
                        </CenterDetail>
                        <Divider dashed/>
                        <CenterTeam>
                            <div className='tagsTitle'>标签</div>
                            <div>
                                {tags.map((tag) => {
                                    const isLongTag = tag.length > 20;
                                    const tagElem = (
                                        <Tag className='global-tag' key={tag} afterClose={() => this.handleClose(tag)}>
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </Tag>
                                    );
                                    return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                                })}
                                {inputVisible && (
                                    <Input
                                        ref={this.saveInputRef}
                                        type="text"
                                        size="small"
                                        style={{width: 78}}
                                        value={inputValue}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleInputConfirm}
                                        onPressEnter={this.handleInputConfirm}
                                    />
                                )}
                                {!inputVisible && (
                                    <Tag onClick={this.showInput} style={{background: '#fff', borderStyle: 'dashed'}}>
                                        <Icon type="plus"/> New Tag
                                    </Tag>
                                )}
                            </div>
                        </CenterTeam>
                        <Divider style={{marginTop: 16}} dashed/>
                        <CenterTeam>
                            <div className='teamTitle'>团队</div>
                            <Row gutter={8} className='row'>
                                {notice.map(item => (
                                    <Col key={item.id} lg={24} xl={12} className='team-text'>
                                        <Link to={item.href}>
                                            <Avatar size="small" src={item.logo} className='avatar'/>
                                            {item.member}
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </CenterTeam>
                    </Card>
                </CenterRight>
            </CenterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));