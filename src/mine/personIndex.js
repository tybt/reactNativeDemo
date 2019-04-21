import React from 'react';
import { StyleSheet ,StatusBar,View,ScrollView,Image,Text,Animated} from 'react-native';
import BottomBack from '../compoment/bttomBack'       

const Dimensions = require('Dimensions');
const vw = Dimensions.get('window').width;
const vh=Dimensions.get('window').height;
export default class personIndex extends React.Component{
    static navigationOptions={
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            tabLeft:new Animated.Value(0.2*vw),
            activeColor_1:'#333',
            activeColor_2:'#888',
            isMyself:true
        };
    }
    componentDidMount(){
        this._navListener = this.props.navigation.addListener('didFocus', () => {
        StatusBar.setBarStyle('light-content');
    });

    }
    componentWillUnmount() {
    this._navListener.remove();
    }
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView >
                    <Image source={require('../img/timg.jpg')} style={styles.perosonBG}></Image>
                    <View style={styles.action}>
                        <Image source={require('../img/girl.jpg')}  style={styles.personImg}></Image>
                        {this.state.isMyself?
                        <View style={{flexDirection:'row',}}>
                            <Text onPress={()=>this.props.navigation.navigate('editInfo')} style={styles.editInfo}>编辑资料</Text>
                        </View>
                        :
                        <View style={{flexDirection:'row',}}>
                            <Text style={styles.sendMess}>私信</Text>
                            <Text style={styles.addAtentinon}>+ 关注</Text>
                        </View>
                        }
                    </View>

                    <View style={styles.name}>
                        <Text style={styles.name_1}>静静的美食</Text>
                        <Image  style={styles.name_2} source={require('../img/female_03.png')}></Image>
                    </View>
                    <View style={styles.favo}>
                        <Text>关注 40</Text>
                        <View style={styles.favoBorder}></View>
                        <Text>粉丝 11440</Text>
                    </View>
                    <Text style={styles.selfIntroduce} numberOfLines={1} ellipsizeMode={'tail'}>备兵驯马以待战机，金鳞岂是池中物，权且忍让,非我族类，其心必异非我族类，其心必异</Text>
                    <Text style={styles.seeMore} onPress={()=>this.props.navigation.navigate('allInfo')}>查看更多资料</Text>
                    <View style={styles.middleBorder}></View>
                    <View style={styles.active}>
                        <Text style={{fontSize:0.045*vw,color:this.state.activeColor_1}} onPress={()=>this._changeTab_1()}>动态</Text>
                        <Text style={{fontSize:0.045*vw,color:this.state.activeColor_2}} onPress={()=>this._changeTab_2()}>相册</Text>
                        <Animated.View style={{width:0.1*vw,height:3,backgroundColor:'#f7d658',position:'absolute',bottom:0,left:this.state.tabLeft}}></Animated.View>
                    </View>
                    <View style={styles.contentTitle}>
                        <Text style={{lineHeight:0.1*vw}}>全部</Text>
                        <Text style={{lineHeight:0.1*vw}}>只看原创</Text>
                    </View>
                    
                </ScrollView>
                <BottomBack navigation={this.props.navigation}></BottomBack>


            </View>
        )
    }
    _changeTab_1(){
        this.setState({activeColor_2:'#888',activeColor_1:'#333',});
        Animated.timing(
            this.state.tabLeft,
            {
                toValue:0.2*vw,
                duration:300
            }
        ).start();
    }
    _changeTab_2(){
        this.setState({activeColor_2:'#333',activeColor_1:'#888',});
        Animated.timing(
            this.state.tabLeft,
            {
                toValue:0.71*vw,
                duration:300
            }
        ).start();
    }
}
const styles=StyleSheet.create({
    perosonBG:{
        height:0.278*vw,

    },
    personImg:{
        borderRadius:0.112*vw,
        width:0.224*vw,
        height:0.224*vw,
        marginTop:-50,
        zIndex:10,
        marginLeft:0.03*vw
    },
    sendMess:{
        marginLeft:0.42*vw,
        marginTop:0.033*vw,
        width:0.115*vw,
        height:0.064*vw,
        textAlign:'center',
        lineHeight:0.064*vw,
        borderColor:"#cccccc",
        borderRadius:5,
        borderWidth:1
    },
    action:{
        flexDirection:'row',
    },
    addAtentinon:{
        marginLeft:0.02*vw,
        marginTop:0.033*vw,
        width:0.142*vw,
        height:0.064*vw,
        textAlign:'center',
        lineHeight:0.064*vw,
        borderRadius:5,
        backgroundColor:'#f7d658'
    },
    name:{
        flexDirection:'row',
        alignItems:'center'
    },
    name_1:{
        fontSize:0.04*vw,
        color:'#333',
        marginLeft:0.036*vw,
        marginTop:0.043*vw
    },
    name_2:{
        width:0.034*vw,
        height:0.034*vw,
        marginTop:0.043*vw,
        marginLeft:3,
    },
    favo:{
        marginLeft:0.036*vw,
        marginTop:0.023*vw,
        flexDirection:'row'
    },
    favoBorder:{
        backgroundColor:'#cccccc',
        width:1,
        height:16,
        marginLeft:15,
        marginRight:15
    },
    selfIntroduce:{
        width:0.9*vw,
        marginLeft:0.036*vw,
        marginTop:0.006*vw
    },
    seeMore:{
        borderTopWidth:StyleSheet.hairlineWidth,
        textAlign:'center',
        fontSize:0.04*vw,
        lineHeight:0.093*vw,
        marginTop:5,
        color:'#333'
    },
    middleBorder:{
        backgroundColor:'#f2f2f2',
        height:10,
    },
    active:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:0.118*vw,
        lineHeight:0.118*vw,
        paddingLeft:0.2*vw,
        paddingRight:0.2*vw,
        paddingTop:0.02*vw,
        paddingBottom:0.02*vw,
        position:'relative',
        borderBottomWidth:1,//StyleSheet.hairlineWidth
        borderColor:'#cccccc'
    },
    contentTitle:{
        flexDirection:'row',
        paddingLeft:0.04*vw,
        paddingRight:0.04*vw,
        justifyContent:'space-between',
        height:0.1*vw,
        backgroundColor:'#f2f2f2'
    },
    editInfo:{
        backgroundColor:themeColor,
        color:'#ffffff',
        fontSize:0.04*vw,
        marginTop:10,
        marginLeft:0.5*vw,
        width:0.22*vw,
        height:0.08*vw,
        lineHeight:0.08*vw,
        textAlign:'center',
        borderRadius:3
    }

})
