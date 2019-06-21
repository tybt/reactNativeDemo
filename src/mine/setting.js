import React from 'react';
import { StyleSheet ,View ,Text,SafeAreaView,Switch,Image,ScrollView,TouchableOpacity} from 'react-native';
import BottomBack from '../compoment/bttomBack'   
export default class setting extends React.Component{
    static navigationOptions={
        header:null,
    }
    constructor(props) {
        super(props);
        this.state = {
            WIFI_value:false
        };
    }
    componentDidMount(){
    }
    render(){
        return(
            <SafeAreaView style={{marginTop:platfrom.OS=='ios'?0:30,flex:1}}>
                <ScrollView style={{backgroundColor:'#f2f2f2',paddingBottom:120}}>
                    <View style={styles.header}>
                        <View style={styles.headrBox}>
                            <Text style={[styles.headerWords]} >设置</Text>
                        </View>
                    </View>
                    <View style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>非WIFI网络不显示图片</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Switch onValueChange={()=>this.changeWifiValue()} value={this.state.WIFI_value}></Switch>
                        </View>
                    </View>
                    <View style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>滑动隐藏操作栏</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Switch onValueChange={()=>this.changeWifiValue()} value={this.state.WIFI_value}></Switch>
                        </View>
                    </View>
                    <View style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>WIFI下智能播放视频</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Switch onValueChange={()=>this.changeWifiValue()} value={this.state.WIFI_value}></Switch>
                        </View>
                    </View>

                    <View style={[styles.brand,commonBorder.bottom,{marginTop:10}]}>
                        <View style={styles.brandLeft}>
                            <Text>截屏反馈</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Switch onValueChange={()=>this.changeWifiValue()} value={this.state.WIFI_value}></Switch>
                        </View>
                    </View>
                    <View style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>字体大小</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Switch onValueChange={()=>this.changeWifiValue()} value={this.state.WIFI_value}></Switch>
                        </View>
                    </View>
                    <View style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>智能关闭夜间模式</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Switch onValueChange={()=>this.changeWifiValue()} value={this.state.WIFI_value}></Switch>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>正文页小窗播放</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Switch onValueChange={()=>this.changeWifiValue()} value={this.state.WIFI_value}></Switch>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>新闻推送设置</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>已缓存</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Text>120MB</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.brand,commonBorder.bottom,{marginTop:20}]}>
                        <View style={styles.brandLeft}>
                            <Text>关于</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>封面</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>搜狐号</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>免费声明</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>用户隐私保护政策</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.brand,commonBorder.bottom]}>
                        <View style={styles.brandLeft}>
                            <Text>系统权限</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.brand,commonBorder.bottom,{marginBottom:30}]}>
                        <View style={styles.brandLeft}>
                            <Text>关于</Text>
                        </View>
                        <View style={styles.brandRight}>
                            <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <BottomBack navigation={this.props.navigation}></BottomBack>
            </SafeAreaView>
        )
    }
    changeWifiValue(){
        if(this.state.WIFI_value==false){
            this.setState({WIFI_value:true})
        }
        else{
            this.setState({WIFI_value:false})
        }
    }
}
const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        borderColor:'#cccccc',
        borderBottomWidth:1,
        paddingBottom:10,
        position:'relative',
        backgroundColor:'#ffffff'
    },
    headerWords:{
        marginTop:10,
        fontWeight:'bold',
        fontSize:0.04*vw,
        marginLeft:0.04*vw,
        color:'tomato',
    },
    bottomBorder:{
        backgroundColor:'#f2f2f2',
    },
    brand:{
        paddingLeft:0.04*vw,
        paddingRight:0.04*vw,
        flexDirection:'row',
        alignItems:'center',
        height:0.13*vw,
        backgroundColor:'#ffffff'
    },
    brandLeft:{
        width:0.8*vw
    },
    brand_3:{
        marginLeft:0.06*vw,
        width:0.02*vw,
        height:0.035*vw
    },
    
})