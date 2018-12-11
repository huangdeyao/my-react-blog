import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/login';
import Layout from './router/layout';

class App extends Component {

    componentWillMount() {
        console.log('*****************************************************');
        console.log(window.location.hash);
        console.log(localStorage.getItem('token'));
        console.log('*****************************************************');
        window.onhashchange = () => {
            if (localStorage.getItem('token') === null) {
                console.log('login==login');
                window.location.href = '/login'
            }else {
                console.log('login==login');
            }
        }
    }


    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route
                            component={Login}
                            exact
                            path='/login'
                        />
                        <Route
                            component={Layout}
                            path='/'
                        />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
