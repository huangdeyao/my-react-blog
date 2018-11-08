import React, {Component} from 'react';
import {Modal, Tag} from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from "../../write/store";

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];
const CheckableTag = Tag.CheckableTag;

class ReleaseModal extends Component {
    state = {
        selectedTags: []
    };

    handleChange(tag, checked) {
        const {selectedTags} = this.state;
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter(t => t !== tag);
        console.log("You are interested in: ", nextSelectedTags);
        this.setState({selectedTags: nextSelectedTags});
    }


    render() {
        const {selectedTags} = this.state;
        const {visible, handleCancel,handleOk,data} = this.props;
        return (
            <Modal title="发布" visible={visible} closable={false} onCancel={handleCancel} onOk={handleOk(data)}>
                {tagsFromServer.map(tag => (
                    <CheckableTag
                        style={{border: '0.5px solid #0084ff'}}
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
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
    visible: state.getIn(['write', 'tagsModel']),
    data: state.get('write')
});

const mapDispatch = (dispatch) => ({
    handleCancel() {
        dispatch(actionCreators.tagHandleCancel(false));
    },
    handleOk(data) {
        dispatch(actionCreators.handleOk(data));
        dispatch(actionCreators.tagHandleCancel(false));
    }
});
export default connect(mapState, mapDispatch)(ReleaseModal);