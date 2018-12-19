import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input} from 'antd';
import anIcon from '../../statics/6.jpeg';
import {
    CenterWrapper,
    CenterLeft,
    CenterRight,
    CenterIcon,
    CenterDetail
} from './style';

class Index extends PureComponent {
    render() {
        return (
            <CenterWrapper>
                <CenterLeft>
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
                    </Card>
                </CenterRight>
            </CenterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));