import React, {Component} from 'react';
import {Modal} from 'antd';
import {connect} from 'react-redux';

class ReleaseModal extends Component {

    render() {
        const {modelVisible} = this.props;
        return (
            <div>
                <Modal title="Title"
                       visible={modelVisible}
                >
                    <p>123213123</p>
                </Modal>
            </div>
        );
    }
}

const mapState = (state) => ({
    visible: state.getIn(['write', 'modelVisible'])
});

const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(ReleaseModal);