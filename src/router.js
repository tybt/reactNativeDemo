
import React from 'react';
import {Image,StyleSheet} from 'react-native';
import Global from '../src/compoment/Global';
import { createStackNavigator, createAppContainer ,createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation'; // Version can be specified in package.json
import article from './index/article';
import index from './index/index';
import mine from './mine/mine';
import video from './video/video';
import makefriends from './makeFriends/makeFriends';
import imgs from './index/imgSource';
import imgShowView from './compoment/imgShowView'
import login from './compoment/login'
import agreement from './compoment/agreement'
import personIndex from '../src/mine/personIndex'
import appStart from '../src/compoment/startApp' 
import allInfo from '../src/mine/allInfo'
import editInfo from './mine/editInfo'
import textInput from './mine/textInput'
import WriteMoment from './makeFriends/writeMoment'

var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;

const tabs=createBottomTabNavigator(
  {
    
    '首页':index,
    '狐友':makefriends,
    '视频':video,
    '我的':mine,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === '首页') {
          iconName = (focused?imgs.index_2:imgs.index_1);
        } 
        else if (routeName === '我的') {
          iconName = (focused?imgs.mine_2:imgs.mine_1);
        }
        else if (routeName === '视频') {
          iconName = (focused?imgs.video_2:imgs.video_1);
        }
        else if (routeName === '狐友') {
          iconName = (focused?imgs.makefriends_2:imgs.makefriends_1);
        }
        return <Image source={iconName} style={{width:0.05*vw,height:0.05*vw}}></Image>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    navigationOptions : {
      header: null,
    }
  }
)



const AppStackNavigator = createStackNavigator(
  {
    home:tabs,
    appStart:appStart,
    article:article,
    imgShowView:imgShowView,
    login:login,
    agreement:agreement,
    personIndex:personIndex,
    makefriends:makefriends,
    allInfo:allInfo,
    editInfo:editInfo,
    textInput:textInput,
    WriteMoment:WriteMoment
  },
);

const AppContainer=createAppContainer(AppStackNavigator);
export default AppContainer;

