import React, {Component} from 'react';
import {Upload, Icon} from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from '../../write/store';
import uploadUrl from './../../../api/config'

class RichEditorHeaderImg extends Component {
    render() {
        const {loading, imageUrl, beforeUpload, handleChange, handleMouseUserOver, handleMouseOut} = this.props;
        const uploadButton = (
            <div>
                <Icon type={loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    name="file"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action={uploadUrl.article_homepage_image_upload}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {
                        imageUrl ?
                            <img
                                style={{width: 96, height: 96}}
                                onMouseOver={handleMouseUserOver}
                                onMouseLeave={handleMouseOut}
                                src={imageUrl}
                                alt="avatar"
                            />
                            : uploadButton
                    }
                </Upload>
            </div>
        )
    }
}

const mapState = (state) => ({
    loading: state.getIn(['write', 'loading']),
    imageUrl: state.getIn(['write', 'imageUrl'])
});

const mapDispatch = (dispatch) => ({
    handleMouseUserOver(e) {
        // console.log(e);
        // console.log("鼠标进入");
    },
    handleMouseOut() {
        // console.log("鼠标离开");
    },
    beforeUpload(e) {
        actionCreators.beforeUpload(e);
    },
    handleChange(e) {
        dispatch(actionCreators.handleChange(e));
    }
});
export default connect(mapState, mapDispatch)(RichEditorHeaderImg);

