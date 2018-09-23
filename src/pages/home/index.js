import React, {Component} from 'react'
import {
    AppMain,
    TopstoryContainer,
    TopstoryMainColumn,
    Card,
    TopstoryHeader,
    GlobalSideBar,
    TopstoryHeaderNav,
    TopstoryHeaderNavItem,
    TopstoryHeaderRightItem,
    TopstoryV2Content
} from "./style";

class Index extends Component {
    render() {
        return (
            <AppMain>
                <TopstoryContainer>
                    <TopstoryMainColumn>
                        <Card>
                            <TopstoryHeader>
                                <TopstoryHeaderNav>
                                    <TopstoryHeaderNavItem><i
                                        className="iconfont">&#xe695;</i>提问</TopstoryHeaderNavItem>
                                    <TopstoryHeaderNavItem><i
                                        className="iconfont">&#xe7a0;</i>问答</TopstoryHeaderNavItem>
                                    <TopstoryHeaderNavItem><i
                                        className="iconfont">&#xe65e;</i>写文章</TopstoryHeaderNavItem>
                                    <TopstoryHeaderNavItem><i
                                        className="iconfont">&#xe610;</i>写想法</TopstoryHeaderNavItem>
                                </TopstoryHeaderNav>
                                <TopstoryHeaderRightItem>草稿</TopstoryHeaderRightItem>
                            </TopstoryHeader>
                        </Card>
                            <TopstoryV2Content>
                            </TopstoryV2Content>
                        <GlobalSideBar></GlobalSideBar>
                    </TopstoryMainColumn>
                </TopstoryContainer>
            </AppMain>
        )
    }
}

export default Index;