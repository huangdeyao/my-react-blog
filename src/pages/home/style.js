import styled from 'styled-components';
import image from '../../statics/timg.gif';

export const HomePage = styled.div`
     display: flex;
 
`;

export const TipYour = styled.div`
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
`;

export const Image = styled.image`
    justify-content: center;
	background: url(${image}) no-repeat;
	background-size: contain;
	align-items: center;
	position: relative;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;