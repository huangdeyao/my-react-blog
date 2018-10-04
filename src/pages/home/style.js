import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
    height: 300px;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 694px;
`;


export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;


export const TopicWrapper = styled.div`
    margin-top:10px;
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 58px;
    padding: 0 20px;
`;

export const TopstoryHeaderRightItem = styled.div`
    color: #8590a6;
    font-size: 14px;
    transition: color .2s ease-in;
    cursor: pointer;
`;

export const TopstoryHeaderNav = styled.div`
    display: block;
`;
export const TopstoryHeaderNavItem = styled.div`
    display: inline-block;
    transition: color .2s ease-in;
    padding: 0 12px;
    font-size: 16px;
    line-height: 32px;
    color: #1a1a1a;
    text-align: center;
    cursor: pointer;
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 14px;
        font-style: normal;
        color: #8a8a8a;
        margin-right: 5px;
    }
`;

export const ListItem = styled.div`
    padding: 20px;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border-bottom: 1px solid #f0f2f7;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 520px;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    margin: 30px 0;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height:　60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 12px;
`;