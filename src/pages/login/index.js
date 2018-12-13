import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import logo from './../../statics/logo.png';
import {
    Form, Input, Button, Icon
} from 'antd';
import {
    LoginWrapper,
    LoginContent,
    LoginLogoWrapper,
    LoginAside,
    LoginOther
} from "./style";

const FormItem = Form.Item;

class Login extends Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <LoginWrapper>
                <LoginContent>
                    <LoginLogoWrapper>
                        <img className='login-img' src={logo} alt="logo"/>
                        <p className='login-p'>时光荏苒,初心依然</p>
                    </LoginLogoWrapper>
                    <Form style={{padding: '0 40px'}} onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                       placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <LoginAside>
                                <span>手机号登录</span>
                                <a href="/">忘记密码</a>
                            </LoginAside>
                            <Button type="primary" style={{width: '100%', marginBottom: '20px'}} htmlType="submit"
                                    className="login-form-button">登录</Button>
                        </FormItem>
                    </Form>
                    <LoginOther>
                        <div>其他登录
                            <i className="iconfont">&#xe6d6;</i>
                        </div>
                        <a href="/">注册</a>
                    </LoginOther>
                </LoginContent>
            </LoginWrapper>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleLogin(values.userName, values.password)
            }
        });
    };
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    handleLogin(name, password) {
        window.localStorage.setItem('token',"1234567890");
        dispatch(actionCreators.loginAccount(name.value, password.value))
        // window.location.href = '/';
    }
});

export default connect(mapState, mapDispatch)(Form.create()(Login));