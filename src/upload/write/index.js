import {Upload, Icon, Modal} from 'antd';
import React, {Component} from 'react'
import {connect} from 'react-redux';
import UploadUrl from '../../api/config';


class Index extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };

    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };

    handleChange = ({fileList}) => this.setState({fileList});

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">上传缩略图</div>
            </div>
        );
        return (
            <div>
                <Upload
                    action={UploadUrl.article_homepage_image_upload}
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="缩略图" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}

const initMapStateToProps = (state) => ({});

const initMapDispatchToProps = (dispatch) => ({});

export default connect(initMapStateToProps, initMapDispatchToProps)(Index);