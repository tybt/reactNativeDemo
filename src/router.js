
import React from 'react';
import {Image,StyleSheet,View,Text} from 'react-native';
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
import collectArticle from './mine/collectArticle'
//import imageCrop from './compoment/imageCrop'
import momentDetail from './makeFriends/momentDetail'
import setting from './mine/setting'

import pop from './compoment/pop'

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/AntDesign';
const tabs=createMaterialBottomTabNavigator(
  {
    
    '首页':index,
    '狐友':makefriends,
    '视频':video,
    '我的':mine,
  },
  { 
    shifting:true,
    labeled:true,
    activeColor: 'red',
    inactiveColor: 'red',
    barStyle: { backgroundColor: '#ffffff',paddingBottom:0},

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === '首页') {
          iconName = <Icon name="home" size={20}></Icon>
        } 
        else if (routeName === '我的') {
          iconName = <Icon name="user" size={20}></Icon>        
        }
        else if (routeName === '视频') {
          iconName = <Icon name="playcircleo" size={20}></Icon>;
        }
        else if (routeName === '狐友') {
          iconName = <Icon name="hearto" size={20} ></Icon>;
        }
        return iconName;
      },
    }),
    navigationOptions : {
      header: null,
    }
  }
)





// const tabs=createBottomTabNavigator(
//   {
    
//     '首页':index,
//     '狐友':makefriends,
//     '视频':video,
//     '我的':mine,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === '首页') {
//           iconName = (focused?imgs.index_2:imgs.index_1);
//         } 
//         else if (routeName === '我的') {
//           iconName = (focused?imgs.mine_2:imgs.mine_1);
//         }
//         else if (routeName === '视频') {
//           iconName = (focused?imgs.video_2:imgs.video_1);
//         }
//         else if (routeName === '狐友') {
//           iconName = (focused?imgs.makefriends_2:imgs.makefriends_1);
//         }
//         return <Image source={iconName} style={{width:0.05*vw,height:0.05*vw}}></Image>;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//     navigationOptions : {
//       header: null,
//     }
//   }
// )



const AppStackNavigator = createStackNavigator(
  { 
    
    home:tabs,
    pop:pop,
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
    WriteMoment:WriteMoment,
    collectArticle:collectArticle,
    //imageCrop:imageCrop,
    momentDetail:momentDetail,
    setting:setting
  },
);

const AppContainer=createAppContainer(AppStackNavigator);
export default AppContainer;

