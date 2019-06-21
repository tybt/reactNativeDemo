import React from 'react';
import { StyleSheet ,View ,Text,ScrollView,StatusBar,TouchableOpacity,Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import BottomBack from '../compoment/bttomBack'       

export default class AllInfo extends React.Component{
    static navigationOptions={
        header:null,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        this._navListener = this.props.navigation.addListener('didFocus', async () => {
            StatusBar.setBarStyle('dark-content');
        });
    }
    componentWillUnmount(){
        this._navListener.remove();
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,marginTop:platfrom.OS=='ios'?0:30}}>
                <ScrollView>
                    <Text style={[styles.commonText,{paddingBottom:0.03*vw,fontWeight:'bold',marginLeft:0.04*vw}]}>全部资料</Text>
                    <Text style={[styles.commonText,styles.branTitle]}>基本资料</Text>
                    <View style={styles.brand}>
                        <Text>用户名</Text>
                        <Text>jingjing</Text>
                    </View>
                    <View style={styles.brand}>
                        <Text>性别</Text>
                        <Text>jingjing</Text>
                    </View>
                    <View style={styles.brand}>
                        <Text>生日</Text>
                        <Text>jingjing</Text>
                    </View>
                    <View style={styles.brand}>
                        <Text>星座</Text>
                        <Text>jingjing</Text>
                    </View>
                    <View style={styles.brand}>
                        <Text>简介</Text>
                        <Text>jingjing</Text>
                    </View>
                    <Text style={[styles.commonText,styles.branTitle]}>地区</Text>
                    <View style={styles.brand}>
                        <Text>所在地</Text>
                        <Text>jingjing</Text>
                    </View>
                    <View style={styles.brand}>
                        <Text>家乡</Text>
                        <Text>jingjing</Text>
                    </View>
                    <Text style={[styles.commonText,styles.branTitle]}>行业/职业</Text>
                    <View style={styles.brand}>
                        <Text>行业</Text>
                        <Text>jingjing</Text>
                    </View>
                    <View style={styles.brand}>
                        <Text>职业</Text>
                        <Text>jingjing</Text>
                    </View>
                    <Text style={[styles.commonText,styles.branTitle]}>教育经历</Text>
                    <View style={styles.brand}>
                        <Text>学校</Text>
                        <Text>天津市天津理工大学机械工程学院</Text>
                    </View>

                </ScrollView>
                <BottomBack navigation={this.props.navigation}></BottomBack>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
    commonText:{
        fontSize:0.04*vw,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#cccccc',
        color:'#333'
    },
    branTitle:{
        backgroundColor:'#87CEFA',
        height:0.08*vw,
        lineHeight:0.08*vw,
        paddingLeft:0.04*vw
    },
    brand:{
        borderBottomColor:'#cccccc',
        height:0.12*vw,
        flexDirection:'row',
        justifyContent:'space-between',
        width:0.92*vw,
        marginLeft:0.04*vw,
        alignItems:'center',
        borderBottomWidth:StyleSheet.hairlineWidth
    },
})