import React, {PureComponent} from 'react'
import {
    WriterContainer,
    AdvertisementImg
} from "./../style";
import aliImage1 from '../../../statics/adver/tx.jpg';
import aliImage3 from '../../../statics/adver/al.jpg';

class Advertisement extends PureComponent {
    render() {
        return (
            <div>
                <WriterContainer>
                    <a href='https://cloud.tencent.com/redirect.php?redirect=1042&cps_key=67213a01a6b22c5f17736dd6857e2581&from=console'>
                        <AdvertisementImg imgUrl={aliImage1}/>
                    </a>
                </WriterContainer>
                <WriterContainer>
                    <a href='https://www.aliyun.com/acts/hi-group-buying?userCode=1uif58qz'>
                        <AdvertisementImg imgUrl={aliImage3}/>
                    </a>
                </WriterContainer>
            </div>

        )
    }
}

export default Advertisement;