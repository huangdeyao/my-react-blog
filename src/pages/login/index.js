import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import Particles from 'react-particles-js';
import {particles} from './params';
import {Input, Icon, Form} from 'antd';
import {
    LoginWrapper,
    LoginContent
} from "./style";

const FormItem = Form.Item;

class Login extends PureComponent {

    handleSubmit = e => {
        e.preventDefault();
        const {active, type} = this.state;
        const {form, onSubmit} = this.props;
        const activeFileds = active[type];
        form.validateFields(activeFileds, {force: true}, (err, values) => {
            onSubmit(err, values);
        });
    };


    render() {
        return (
            <LoginWrapper>
                <Particles params={{particles}} style={{width: '100%', height: '100%'}}/>
                <LoginContent>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            <Input
                                placeholder="User"
                                prefix={<Icon style={{color: 'rgba(0,0,0,.25)'}} type="user"/>}
                            />
                        </FormItem>
                    </Form>
                </LoginContent>
            </LoginWrapper>
        )
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    handleLogin(name, password) {
        dispatch(actionCreators.loginAccount(name.value, password.value))
    }
});

export default connect(mapState, mapDispatch)(Login);