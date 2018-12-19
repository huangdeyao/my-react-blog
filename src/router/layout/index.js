import React, {PureComponent} from 'react';
import {Route} from 'react-router-dom'
import Header from '../../common/header';
import Home from '../../pages/home';
import Detail from '../../pages/detail/loadableComponent';
import Center from '../../pages/center/loadableComponent';
import Write from '../../pages/write';
import {Layout} from 'antd'

class Index extends PureComponent {
    componentWillMount() {
    }

    render() {
        return (
            <Layout>
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/detail/:id' exact component={Detail}/>
                <Route path='/write' exact component={Write}/>
                <Route path='/center' exact component={Center}/>
            </Layout>
        )
    }
}


export default Index;