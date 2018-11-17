import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LayoutMain} from '../style';
import {actionCreators} from "../../write/store";
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

class RichEditor extends Component {
    render() {
        return (
            <LayoutMain>
                <BraftEditor
                    contentStyle={{height: 'auto', minHeight: 200}}
                />
            </LayoutMain>
        )
    }
}


const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
    getValue(content) {
        dispatch(actionCreators.articleValue(content))
    },
    titleHandleChange(e) {
        dispatch(actionCreators.titleHandleChange(e.target.value))
    },
    handlePreview() {

    }
});

export default connect(mapState, mapDispatch)(RichEditor);

