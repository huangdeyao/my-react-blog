import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 1000px;
    margin: 10px auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 694px;
`;


export const HomeRight = styled.div`
    width: 295px;
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

export const ItemContainer = styled.div`
    padding: 15px 30px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border-bottom: 1px solid #f0f2f7;
`;
export const ItemTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 1.6;
    color: #1a1a1a;
    margin-bottom: 12px;
`;

export const ItemInfo = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
`;

export const ItemImage = styled.div`
    position: relative;
    width: 190px;
    height: 105px;
    margin-top: -2px;
    margin-bottom: 4px;
    float: left;
    overflow: hidden;
    background: url(${(props) => props.imgUrl}) no-repeat;
    background-size: 100%;
    border-radius: 4px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
`;

export const ItemDes = styled.div`
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 20px;
    line-height: 24px;
`;

export const ItemTools = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 20px;
    margin: 0 -20px -10px;
    color: #646464;
    clear: both;
`;

export const ItemToolslike = styled.div`
    display: inline-block;
    transition: color .2s ease-in;
    padding: 0 8px;
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

export const WriterContainer = styled.div`
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box;
`;
export const WriterNav = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;
export const GlobalWriteNavItem = styled.div`
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 23px;
    color: #444;
    font-size: 16px;
    .iconfont {
        font-family: "iconfont" !important;
        color: #8590a6;
        margin-bottom: 6px;
        width: 24;
        height: 24;
    }
`;

export const GlobalWriteDraft = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid #f0f2f7;
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 48px;
    margin: 0 20px;
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

export const AdvertisementImg = styled.div`
    width: 295px;
    height: 194px;
    background: url(${(props) => props.imgUrl}) no-repeat;
    background-size: 100%;
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #0084ff;;
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