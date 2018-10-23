import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriteHome, ContainerBtn,NavItem} from './style';
import RichEditor from './common/RichEditor';
import {actionCreators} from "../write/store";

class Index extends PureComponent {

    render() {
        return (
            <WriteHome>
                <RichEditor/>
                <ContainerBtn>
                    <NavItem><i className="material-icons">1</i></NavItem>
                    <NavItem><i className="material-icons">2</i></NavItem>
                    <NavItem><i className="material-icons">3</i></NavItem>
                </ContainerBtn>
            </WriteHome>
        )
    }

    componentDidMount() {
        this.props.writingHandle(true);
    };

    componentWillUnmount() {
        this.props.writingHandle(false);
    };
}


const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
    writingHandle(handle) {
        dispatch(actionCreators.writingHandle(handle))
    }
});

export default connect(mapState, mapDispatch)(Index);
