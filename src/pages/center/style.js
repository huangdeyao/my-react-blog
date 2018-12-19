import styled from 'styled-components';

export const CenterWrapper = styled.div`
    width: 1000px;
    margin: 10px auto;
`;

export const CenterLeft = styled.div`
    float: right;
    width: 694px;
`;


export const CenterRight = styled.div`
    width: 295px;
    float: left;
`;

export const CenterIcon = styled.div`
    text-align: center;
    margin-bottom: 24px;
    .name {
        margin-top: 10px;
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: @heading-color;
        margin-bottom: 4px;
    }
`;

export const CenterDetail = styled.div`
    margin-top: 25px;
    margin-bottom: 8px;
    .iconfont {
        font-style: normal;
        margin-right: 10px;
    }
`;