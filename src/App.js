import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from './common/header';
import HomePage from './pages/home';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <HomePage/>
                </div>
            </Provider>
        );
    }
}

export default App;
