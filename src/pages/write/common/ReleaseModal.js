import React, {Component} from 'react';
import {Modal, Tag} from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from "../../write/store";

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];
const CheckableTag = Tag.CheckableTag;

class ReleaseModal extends Component {

    render() {
        const {myState, handleCancel, handleOk} = this.props;
        return (
            <Modal title="发布"
                   visible={myState.get('tagsModel')}
                   closable={false}
                   onCancel={handleCancel}
                   onOk={() => handleOk(myState)}>
                {tagsFromServer.map(tag => (
                    <CheckableTag
                        style={{border: '0.5px solid #0084ff'}}
                        key={tag}
                        onChange={checked => this.handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
            </Modal>
        );
    }

}

const mapState = (state) => ({
    myState: state.get('write')
});

const mapDispatch = (dispatch) => ({
    handleCancel() {
        dispatch(actionCreators.tagHandleCancel(false));
    },
    handleOk(myState) {
        dispatch(actionCreators.handleOk(myState));
        dispatch(actionCreators.tagHandleCancel(false));
    }
});
export default connect(mapState, mapDispatch)(ReleaseModal);