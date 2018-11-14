import React, {PureComponent} from 'react'
import {
    WriterContainer,
    AdvertisementImg
} from "./../style";
import aliImage1 from '../../../statics/adver/alibaba.jpg';
import aliImage3 from '../../../statics/adver/alibaba3.png';

class Advertisement extends PureComponent {
    render() {
        return (
            <div>
                <WriterContainer>
                    <a href='https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=1uif58qz'>
                        <AdvertisementImg imgUrl={aliImage1}/>
                    </a>
                </WriterContainer>
                <WriterContainer>
                    <a href='https://promotion.aliyun.com/ntms/act/shoppingcart.html?userCode=1uif58qz'>
                        <AdvertisementImg imgUrl={aliImage3}/>
                    </a>
                </WriterContainer>
            </div>

        )
    }
}

export default Advertisement;