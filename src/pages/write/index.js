import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriteHome} from './style';
import RichEditor from './common/RichEditor';

class Index extends PureComponent {

    render() {
        return (
            <WriteHome>
                <RichEditor/>
            </WriteHome>
        )
    }
}


const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Index);
