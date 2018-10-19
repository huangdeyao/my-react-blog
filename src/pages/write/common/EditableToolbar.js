import React, {Component} from 'react';
import {PostEditor, EditableToolbarSticky, EditorButton} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store'

class EditableToolbar extends Component {
    render() {
        const {headerToolBar, handleClick} = this.props;
        return (
            <PostEditor>
                <EditableToolbarSticky>
                    {
                        headerToolBar.map(item => (
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
    headerToolBar: state.getIn(['write', 'headerToolBar'])
});

const mapDispatch = (dispatch) => ({
    handleClick(id) {
        dispatch(actionCreators.handleOnClick(id))
    }
});

export default connect(mapState, mapDispatch)(EditableToolbar);

