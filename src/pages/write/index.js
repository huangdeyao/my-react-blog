import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (loginStatus) {
            return (
               <div>
               </div>
            )
        } else {
            return <Redirect to='/login'/>
        }
    }

}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});


export default connect(mapState, null)(Login);