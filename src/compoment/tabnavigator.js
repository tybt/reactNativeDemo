import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Index from '../index/index';
import Mine from '../mine/mine';
import Video from '../video/video';
import Makefriends from '../makeFriends/makeFriends';

export default class TabNav extends React.Component{
    constructor(props) {
        super(props);
    
    }
    state= {
        selectedTab: '首页'
        // selectedTab: 'account'
    };


    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item title="发现"
                    selected={this.state.selectedTab === '首页'}
                    onPress={()=>this.setState({selectedTab:'首页'})}
                >
                    <Index></Index>
                </TabNavigator.Item>
                <TabNavigator.Item title="我的"
                     selected={this.state.selectedTab === '我的'}
                     onPress={()=>this.setState({selectedTab:'我的'})}
                >
                    <Mine></Mine>
                </TabNavigator.Item>
                <TabNavigator.Item title="视频"
                    selected={this.state.selectedTab === '视频'}
                    onPress={()=>this.setState({selectedTab:'视频'})}
                    
                >
                    <Video></Video>
                </TabNavigator.Item>
                <TabNavigator.Item title="交友"
                    selected={this.state.selectedTab === '交友'}
                    onPress={()=>this.setState({selectedTab:'交友'})}
                >
                    <Makefriends></Makefriends>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}