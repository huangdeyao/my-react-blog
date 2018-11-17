import React, {PureComponent} from 'react';
import GlobalHeader from './../globalHeader';
import WriteHeader from './../writeheader';
import {connect} from 'react-redux';

class Index extends PureComponent {
    render() {
        const {writing} = this.props;
        return (
            <div>
                {
                    writing ? <WriteHeader/> : <GlobalHeader/>
                }
            </div>
        )
    }
}

const initMapStateToProps = (state) => ({
    writing: state.getIn(['write', 'writing'])
});


export default connect(initMapStateToProps, null)(Index);