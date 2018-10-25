import React, {Component} from 'react';
import {WriteCoverWrapper, WriteTitleImg} from '../style';
import {Upload, Icon, Modal} from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from "../../write/store";

class RichEditorHeaderImg extends Component {
    render() {
        const {loading, imageUrl, beforeUpload, handleChange} = this.props;
        const uploadButton = (
            <div>
                <Icon type={loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <WriteCoverWrapper>
                <Upload
                    name="file"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//localhost:8888/upload"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? <WriteTitleImg imgUrl={imageUrl} alt="avatar"/> : uploadButton}
                </Upload>
            </WriteCoverWrapper>
        )
    }


}


const mapState = (state) => ({
    loading: state.getIn(['write', 'loading']),
    imageUrl: state.getIn(['write', 'imageUrl'])
});

const mapDispatch = (dispatch) => ({
    beforeUpload(e) {
        actionCreators.beforeUpload(e);
    },
    handleChange(e) {
        dispatch(actionCreators.handleChange(e));
    }
});
export default connect(mapState, mapDispatch)(RichEditorHeaderImg);

