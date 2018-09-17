import React, {Component} from 'react';
import Header from './common/header'
import HomePage from './pages/home'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HomePage/>
            </div>
        );
    }
}

export default App;
