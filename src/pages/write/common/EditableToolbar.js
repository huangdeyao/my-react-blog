import React, {Component} from 'react';
import {PostEditor, EditableToolbarSticky, EditorButton} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store'

class EditableToolbar extends Component {
    render() {
        const {editableTypes, handleClick} = this.props;
        return (
            <PostEditor>
                <EditableToolbarSticky>
                    {
                        editableTypes.map(item => (
                            <EditorButton key={item.get('id')}
                                          className={item.get('className')}
                                          onClick={() => handleClick(item.get('id'))}
                            >
                                <i className={item.get('click') ? 'focused iconfont' : 'iconfont'}>{item.get('icon')}</i>
                            </EditorButton>)
                        )
                    }
                </EditableToolbarSticky>
            </PostEditor>
        )
    }
}

const mapState = (state) => ({
    editableTypes: state.getIn(['write', 'editableTypes'])
});

const mapDispatch = (dispatch) => ({
    handleClick(id) {
        dispatch(actionCreators.handleOnClick(id - 1))
    }
});

export default connect(mapState, mapDispatch)(EditableToolbar);

