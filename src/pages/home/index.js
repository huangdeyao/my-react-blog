import React, {Component} from 'react'
import {
    HomePage, TipYour, Image
} from "./style";

class Index extends Component {
    render() {
        return (
            <HomePage>
                <TipYour><Image/></TipYour>
            </HomePage>
        )
    }
}

export default Index;