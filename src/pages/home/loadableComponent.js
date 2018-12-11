import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading: () => (

        <div>正在加载...</div>
    )
});

export default () => <LoadableComponent/>
