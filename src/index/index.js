
import React from 'react';
import {View,Text,StyleSheet,ImageBackground,FlatList,ScrollView,Image,Button,StatusBar,TouchableWithoutFeedback,SafeAreaView} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import Tab_2 from './topTab/tab_2'
import Tab_3 from './topTab/tab_3'
import Tab_4 from './topTab/tab_4'
import Tab_5 from './topTab/tab_5'
import Tab_6 from './topTab/tab_6'
import Tab_7 from './topTab/tab_7'
import Tab_8 from './topTab/tab_8'
import Tab_9 from './topTab/tab_9'

var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class index extends React.Component{
    static navigationOptions={
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
            opcityCount:0,
            modalVisible:false,
            statusBarVisible:false,
            news:[],
            weather:{},
            city:''
        };
    }
    componentDidMount(){
  
    }
    componentWillMount(){
        //获取新闻数据，
        let _this=this;
        ajaxPost(Url.news_0,{},function(res){
            _this.setState({news:res.result.data})
        })
        ajaxPost(Url.weather,{},function(res){
            _this.setState({weather:res.result.realtime,city:res.result.city})

        })
    }

    componentWillUnmount() {
        this._navListener.remove();
    }
    
    render(){
        return(
            <View style={content}>
                <StatusBar
                    backgroundColor={"transparent"}
                    hidden={this.state.statusBarVisible} 
                    barStyle={'dark-content'}
                    translucent={true}/> 
                <SafeAreaView style={{flex:1}}>
                    <View style={{flex:1}}>
                        <ScrollableTabView
                            style={{}}
                            initialPage={0}
                            
                            tabBarUnderlineStyle={{height:0}}
                            tabBarTextStyle={{}}
                            tabBarActiveTextColor={'#333'}
                            tabBarInactiveTextColor={'#888'}
                            renderTabBar={() => <ScrollableTabBar />}
                        >
                            <Tab_2 navigation={this.props.navigation} tabLabel='头条'></Tab_2>
                            <Tab_3 navigation={this.props.navigation} tabLabel='社会'></Tab_3>
                            <Tab_4 navigation={this.props.navigation} tabLabel='国内'></Tab_4>
                            <Tab_5 navigation={this.props.navigation} tabLabel='国际'></Tab_5>
                            <Tab_6 navigation={this.props.navigation} tabLabel='娱乐'></Tab_6>
                            <Tab_7 navigation={this.props.navigation} tabLabel='体育'></Tab_7>
                            <Tab_8 navigation={this.props.navigation} tabLabel='军事'></Tab_8>
                            <Tab_9 navigation={this.props.navigation} tabLabel='科技'></Tab_9>
                        </ScrollableTabView>
                    </View>
                </SafeAreaView>

            </View>
        )
    }
}



const styles=StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
