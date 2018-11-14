import React, {PureComponent} from 'react'
import {
    WriterContainer,
    WriterNav,
    GlobalWriteNavItem,
    GlobalWriteDraft
} from "./../style";
class Writer extends PureComponent {
    render() {
        return (
            <WriterContainer>
                <WriterNav>
                    <GlobalWriteNavItem>
                        <i className="iconfont">&#xe60b;</i>
                        <div>写回答</div>
                    </GlobalWriteNavItem>
                    <GlobalWriteNavItem>
                        <i className="iconfont">&#xe65e;</i>
                        <div>写文章</div>
                    </GlobalWriteNavItem>
                    <GlobalWriteNavItem>
                        <i className="iconfont">&#xe638;</i>
                        <div>写想法</div>
                    </GlobalWriteNavItem>
                </WriterNav>
                <GlobalWriteDraft>
                    理想是人生的太阳。 — 德莱赛
                </GlobalWriteDraft>
            </WriterContainer>
        )
    }
}

export default Writer;