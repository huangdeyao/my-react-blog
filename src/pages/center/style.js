import styled from 'styled-components';

export const CenterWrapper = styled.div`
    width: 1000px;
    margin: 10px auto;
`;

export const CenterLeft = styled.div`
    float: right;
    width: 694px;
    .tabsCard {
  :global {
    .ant-card-head {
      padding: 0 16px;
    }
  }
}
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
        margin-right: 10px;
    }
`;

export const CenterTeam = styled.div`
    text-overflow: ellipsis;
    .global-tag {
        margin-bottom: 8px;
    }
    .row {
        margin-top: 8px;
    }
    .avatar{
        margin-right: 8px;
    }
    .team-text{
        margin-top: 15px;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        width:125px;
    }
    .tagsTitle {
        font-weight: 500;
        margin-bottom: 12px;
    }
`;
