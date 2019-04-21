import React from 'react';
import {View,Text,StyleSheet,ImageBackground,FlatList,ScrollView,Image,Button,StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper'
var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class indexSwiper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
        };
    }
    render(){
        return(
            <Swiper style={styles.imgWrapper} 
            showsButtons={true} 
            height={300} 
            autoplay={true} 
            swipeEnabled={false} 
            animationEnabled={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    imgWrapper: {
        width: '100%',
        height: 200,
    },
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
})