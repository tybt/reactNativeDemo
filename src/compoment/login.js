import React from 'react';
import { StyleSheet ,View ,Text,Image,TextInput,TouchableWithoutFeedback,TouchableOpacity,AsyncStorage,Alert} from 'react-native';
import {SafeAreaView} from 'react-navigation';
var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class login extends React.Component{
    static navigationOptions={
        header:null,
        title:'登录',
        headerStyle:{
            paddingTop:20,
            height:60,
            
        },
    }
    constructor(props) {
        super(props);
        this.state = {
            checkedImg:[require('../img/check_01.png'),require('../img/check_02.png')],
            checked:1,
            phone:'',
            passWord:'',
            times:'获取验证码',
            userName:''

        };
    }
    async componentDidMount(){
        // if(await AsyncStorage.getItem("phone")!=123){
            console.warn(await AsyncStorage.getItem("phone"))
        // }
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={styles.loginBrands}>
                    <Image source={require('../img/login_03.png')} style={[styles.loginIcon,{width:0.028*vw}]}></Image>
                    <TextInput
                        placeholder={"请输入昵称"}
                        style={[styles.inputBrand,{width:0.7*vw}]}
                        onChangeText={(text)=>this.setState({userName:text})}
                    />
                </View>

                <View style={styles.loginBrands}>
                    <Image source={require('../img/login_03.png')} style={[styles.loginIcon,{width:0.028*vw}]}></Image>
                    <TextInput
                        placeholder={"请输入手机号"}
                        style={[styles.inputBrand,{width:0.7*vw}]}
                        onChangeText={(text)=>this.setState({phone:text})}
                    />
                </View>
                <View style={styles.loginBrands}>
                    <Image source={require('../img/login_07.png')} style={[styles.loginIcon,{width:0.035*vw}]}></Image>
                    <TextInput
                        placeholder={"请输入验证码"}
                        style={[styles.inputBrand,{width:0.4*vw}]}
                        onChangeText={(text)=>this.setState({passWord:text})}
                    />
                    <Text style={{color:'#0998f2',marginLeft:0.2*vw,textAlign:'center',width:0.2*vw}} onPress={()=>this.getMesCode()}>{this.state.times}</Text>
                </View>
                <View style={styles.checkBrand}>
                    <TouchableWithoutFeedback onPress={()=>this.setCheck()}>
                        <Image source={this.state.checkedImg[this.state.checked]} style={styles.checkedImg}></Image>
                    </TouchableWithoutFeedback>
                    <Text style={{marginTop:12,marginLeft:10}}>我已阅读并同意</Text>
                    <Text style={{marginTop:12,marginLeft:5,color:'#3478f6'}} onPress={()=>this.props.navigation.push('agreement')}>《用户服务协议》</Text>
                    <Text style={{marginTop:12,marginLeft:5}}>和</Text>
                    <Text style={{marginTop:12,marginLeft:5,color:'#3478f6'}} onPress={()=>this.props.navigation.push('agreement')}>《隐私政策》</Text>
                </View>
                <View style={styles.btnBox}>
                    <TouchableOpacity onPress={()=>this.logins()}>
                        <Text style={styles.btn}>立即登录</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:20}}>未注册用户，手机验证后自动登录</Text>
                </View>
                <View style={styles.otherLogin}>
                    <Text style={styles.othBorder}></Text>
                    <Text style={{height:20}}>其他登录方式</Text>
                    <Text style={styles.othBorder}></Text>
                </View>
                <View style={styles.headerBox }>
                    <View style={styles.loginBrand}>
                        <Image source={require('../img/mine_06.png')} style={{width:0.042*vw,height:0.065*vw,marginTop:0.033*vw,}}></Image>
                    </View>
                    <View style={styles.loginBrand}>
                        <Image source={require('../img/mine_03.png')} style={{width:0.069*vw,height:0.075*vw,marginTop:0.033*vw,}}></Image>
                    </View>
                    <View style={styles.loginBrand}>
                        <Image source={require('../img/mine_09.png')} style={{width:0.067*vw,height:0.065*vw,marginTop:0.033*vw,}}></Image>
                    </View>
                    <View style={styles.loginBrand}>
                        <Image source={require('../img/mine_12.png')} style={{width:0.077*vw,height:0.065*vw,marginTop:0.033*vw,}}></Image>
                    </View>
                    <View style={styles.loginBrand}>
                        <Image source={require('../img/mine_15.png')} style={{width:0.083*vw,height:0.065*vw,marginTop:0.033*vw,}}></Image>
                    </View>
                </View>
                <View style={styles.back}>
                    <TouchableWithoutFeedback onPress={()=>this.goback()}>
                        <Image source={require('../img/back_03.png')} style={styles.backImg}></Image>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
        )
    }
    setCheck(){
        if(this.state.checked==1){
            this.setState({checked:0})
        }
        else{
            this.setState({checked:1})
        }
    }
    goback(){
        this.props.navigation.goBack()
    }
    async logins(){
        let phone=this.state.phone;
        let passWord=this.state.passWord;
        let userName=this.state.userName;
        
        let _this=this;
        if(passWord!="654654"){
            Alert.alert("验证码不正确")
        }
        else{
            try{
                await AsyncStorage.setItem('phone',phone)
                await AsyncStorage.setItem('passWord',passWord)
                await AsyncStorage.setItem('userName',userName)
                _this.props.navigation.navigate('makeFriends')
        
            }
            catch(err){
                console.warn('存储异常')
    
            }
        }
    }
    getMesCode(){
        let regPhone=/^1[134578]\d{9}$/
        if(!regPhone.test(this.state.phone)){
            Alert.alert("手机号错误")
        }
        else{
            let _this=this;
            let  count=60;
            if(this.state.times=="获取验证码"||this.state.times=="重新发送"){
                let interval=setInterval(function(){
                    _this.setState({times:count+'s'});
                    count--;
                    if(count==0){
                        clearInterval(interval);
                        _this.setState({times:'重新发送'})
                    }
                },1000)
                console.log(Url.URLsendCode)
                ajaxPost(Url.URLavailaboleCode,{},function(res){
                    console.log(res)
                })
    
            }
        }
    }
}
const styles=StyleSheet.create({
    loginBrands:{
        backgroundColor:'#f2f2f2',
        width:0.9*vw,
        height:0.116*vw,
        marginLeft:0.05*vw,
        flexDirection:'row',
        alignItems:'center',
        marginTop:0.04*vw,
    },
    inputBrand:{
        height:40,
        marginLeft:0.02*vw
    },
    loginIcon:{
        height:0.04*vw,
        marginLeft:0.028*vw
    },
    checkedImg:{
        width:0.043*vw,
        height:0.043*vw,
        marginLeft:0.06*vw,
        marginTop:0.03*vw,
    },
    checkBrand:{
        flexDirection:'row'
    },
    btnBox:{
        marginTop:150,
        alignItems:'center'
    },
    btn:{
        width:0.7*vw,
        color:'#ffffff',
        textAlign:'center',
        height:0.12*vw,
        lineHeight:0.12*vw,
        backgroundColor:'#e68875',
        fontSize:0.044*vw
    },
    back:{
        position:'absolute',
        bottom:0,
        height:40,
        borderTopWidth:1,
        borderColor:'#cccccc',
        width:vw,
    },
    backImg:{
        width:0.029*vw,
        height:0.053*vw,
        marginTop:10,
        marginLeft:0.04*vw
    },
    othBorder:{
        width:0.367*vw,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#cccccc',
        height:1
    },
    otherLogin:{
        flexDirection:'row',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },
    headerBox:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:vw,
        paddingLeft:0.04*vw,
        paddingRight:0.04*vw,
        marginTop:0.02*vw,
    },
    loginBrand:{
        width:0.13*vw,
        height:0.13*vw,
        alignItems:'center',
    },
        
})
