import React, {PureComponent} from 'react';
import {Route} from 'react-router-dom'
import Header from '../../common/header';
import Home from '../../pages/home';
import Detail from '../../pages/detail/loadableComponent';
import Write from '../../pages/write';
import { Layout } from 'antd'

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
            </Layout>
        )
    }
}


export default Index;