import styled from 'styled-components';

/**
 * Detail
 */
export const DetailWrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
`;

export const ArticleLeft = styled.div`
    float: left;
    width: 694px;
`;

export const ArticleRight = styled.div`
    width: 275px;
    float: right;
    background: #fff;
`;


export const DetailMain = styled.div`
    margin: 20px 0 20px 0;
    background: #fff;
    padding: 15px;
`;

export const ArticleImage = styled.div`
    margin: 0 auto;
    display: block;
	width: 640px;
	height: 360px;
	background: url(${(props) => props.imgUrl}) no-repeat;
	background-size: 100%;
`;


export const DetaliHeader = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
  margin: 50px 0 20px 0;
`;

export const DetailAuthor = styled.div`
  margin-bottom: 30px;
  .avatar {
    float: left;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
`;

export const AuthorInfo = styled.div`
  padding-left:55px;
  .author {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 8px;
  }
  .watch {
    font-size: 12px;
    color: #fff;
    background: #42c02e;
    border-radius: 10px;
    padding: 2px 8px;
    vertical-align: middle;
  }
  .info {
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
`;

export const DetailContent = styled.div`
  .img {
    width: 100%;
    margin-bottom: 30px;
  }
  .content {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }
`;