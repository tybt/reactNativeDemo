import React from 'react';
import { StyleSheet ,View ,Text,TouchableOpacity,TextInput,FlatList,Image,Alert} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class WriteMoment extends React.Component{
    static navigationOptions={
        header:null,
    }
    constructor(props) {
        super(props);
        this.state = {
            avatarSource:'',
            imgs:[],
            imgData:'',
            momentWords:'',
            isReady:false
        };
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <SafeAreaView>
                <View style={styles.topBrand}>
                    <Text onPress={()=>this.props.navigation.goBack()}>取消</Text>
                    <Text style={{fontSize:0.045*vw}} onPress={()=>this.upload()}>发布状态</Text>
                    <TouchableOpacity onPress={()=>this.save()}>
                        <View style={[styles.btnSave,{backgroundColor:this.state.isReady?themeColor:'#cccccc'}]}>
                            <Text style={{color:'#ffffff'}} >保存</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10,width:0.92*vw,marginLeft:0.04*vw}}>
                    <TextInput 
                    onChangeText={(text) => this.getWords(text) }
                    multiline={true}
                    value={this.state.text}
                    placeholder={"分享此刻状态..."}></TextInput>
                </View>
                <View style={styles.photoBox}>
                    
                    <Text style={styles.addPhoto} onPress={()=>this.addPhotos()}>+</Text>
                    {
                        this.state.imgs.map((item,index)=>{
                            return <View style={styles.imgBrand}>
                                        <TouchableOpacity style={{position:'absolute',top:0,right:0,zIndex:10,backgroundColor:'#ffffff'}}>
                                            <Image source={require('../img/close.png')} style={styles.close}></Image>
                                        </TouchableOpacity>
                                        <Image style={styles.avatar} source={{uri:item}} />
                                    </View>

                        })
                    }
                </View>

            </SafeAreaView>
        )
    }
    addPhotos(){
        console.log('从相册选择',ImagePicker.showImagePicker)
        var options = {
            title: '选择图片',
            customButtons: [{ name: 'fb', title: '取消' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        };
          
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                let temp=this.state.imgs;
                temp.push(response.uri);
                console.log(response,'response')
                this.setState({
                    avatarSource: source,
                    imgs:temp,
                    imgData:response.data
                });
            }
        })
    }
    upload(){
        ajaxPostImg(Url.imgUploader,this.state.imgData,function(res){
            console.log(res);
        })
    }
    save(){
        console.log(this.state.momentWords)
        let _this=this;
        ajaxPostImg(Url.uploadImg,this.state.imgs,function(res){
            console.log(res,'图片返回数据')
            if(res.code==1){
                let param={
                    content:_this.state.momentWords,
                    userid:9999999999999,
                    imgs:res.result
                }
                ajaxPost(Url.writeMoment,param,function(res){
                    console.log(res)
                    if(res.code==1){
                        Alert.alert("提示",res.success,[{text:'确定',onPress:()=>_this.props.navigation.navigate('makeFriends')}])
                    }
                    else{
                        Alert.alert("提示",'发布失败，请重试',[{text:'确定'}])
                    }
                },function(){
                    console.log('网络故障，请稍后再试')
                })
            }
    
        })
    }
    getWords(text){
        if(text!=""){
            this.setState({isReady:true})
        }
        this.setState({momentWords:text})
    }
}
const styles=StyleSheet.create({
    topBrand:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:0.12*vw,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#cccccc',
        paddingLeft:0.04*vw,
        paddingRight:0.04*vw,
        marginTop:platfrom.os=='ios'?0:30,
    },
    btnSave:{
        height:0.08*vw,
        width:0.15*vw,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    addPhoto:{
        height:0.2*vw,
        width:0.2*vw,
        textAlign:'center',
        lineHeight:0.2*vw,
        fontSize:0.1*vw,
        backgroundColor:'#f2f2f2',
        color:'#ffffff'
    },
    photoBox:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:20,
        width:0.92*vw,
        marginLeft:0.04*vw,
        flexWrap:'wrap'
    },
    avatar: {
        width:0.2*vw,
        height:0.2*vw,
    },
    close:{
        width:0.04*vw,
        height:0.04*vw,
    },
    imgBrand:{
        marginLeft:0.04*vw,
        position:'relative'
    }

})