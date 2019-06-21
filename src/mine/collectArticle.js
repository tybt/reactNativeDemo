import React from 'react';
import { StyleSheet,SafeAreaView,View,Text,Animated } from 'react-native';
import BottomBack from '../compoment/bttomBack'           
export default class collectArticle extends React.Component{
    static navigationOptions={
        header:null,
    }

    constructor(props) {
        super(props);
        this.state = {
            borderLeft:new Animated.Value(0.04*vw),
        };
        console.log(platfrom,'platfrom.os')
    }
    
    render(){
        return(
            <SafeAreaView style={{flex:1,marginTop: platfrom.OS == "ios" ? 0 : 30}}>
                <View style={styles.header}>
                    <View style={styles.headrBox}>
                        <Text style={[styles.headerWords]} onPress={()=>this.setBorder(0)}>我的收藏</Text>
                        <Text style={[styles.headerWords]} onPress={()=>this.setBorder(1)}>我的分享</Text>
                        <Text style={styles.edit}>管理</Text>
                    </View>
                    <Animated.View style={[styles.bottomBorder,{left:this.state.borderLeft}]}></Animated.View>
                </View>
                <BottomBack navigation={this.props.navigation}></BottomBack>
            </SafeAreaView>
        )
    }
    //methods
    setBorder(index){
        if(index==0){
            Animated.timing(
                this.state.borderLeft,
                {
                    toValue:0.04*vw,
                    duration:2300
                }
            ).start();
        }
        else{
            Animated.timing(
                this.state.borderLeft,
                {
                    toValue:0.24*vw,
                    duration:300
                }
            ).start();
        }
    }
}
const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        borderColor:'#cccccc',
        borderBottomWidth:1,
        paddingBottom:10,
        position:'relative'
    },
    bottomBorder:{
        borderBottomColor:'tomato',
        borderBottomWidth:2,
        width:0.16*vw,
        position:'absolute',
        bottom:0
    },
    headerWords:{
        fontWeight:'bold',
        fontSize:0.04*vw,
        marginLeft:0.04*vw,
        color:'tomato',
    },
    edit:{
        marginLeft:0.5*vw,
        fontSize:0.04*vw,
        color:'#333'
    },
    headrBox:{
        flexDirection:'row',

    }

})
