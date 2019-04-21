import React from 'react';
import { Text, View ,ScrollView ,StatusBar,Image,StyleSheet,FlatList,TouchableWithoutFeedback,AsyncStorage,Alert,Modal,KeyboardAvoidingView,TextInput,SafeAreaView} from 'react-native';

var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;

export default class makeFriends extends React.Component {
static navigationOptions=({navigation})=>{
  return{
    header:null,
    isLogin:false
  }
}

constructor(props) {
  super(props);
  this.state = { 
      imgData:[{photo:require('../img/timg.jpg')},{photo:require('../img/timg.jpg')},{photo:require('../img/timg.jpg')}],
      showLogin:'none',
      modalVisible:false,
      hiddenStausbar:false,
      showInput:false
  };
}
 componentDidMount(){
  this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      var temp=AsyncStorage.getItem("phone")
      if(temp!=null){
        this.setState({isLogin:true})
      }
      else{
        this.setState({isLogin:false})      
      }
    
  });
  

}
componentWillUnmount() {
  this._navListener.remove();
}


render() {
  return (
    <SafeAreaView forceInset={{ bottom: 'always' }} style={{position:'relative'}}>
      <View>
        {this.state.isLogin==true?
        <View style={[styles.isLogin,{display:this.state.isLogin==true?'flex':'none',paddingBottom:5}]} >
          <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('WriteMoment')}>
            <Image source={require('../img/friends/friends_06.png')} style={styles.loginImgs}></Image>
          </TouchableWithoutFeedback>
          <View style={styles.isLoginRight}>
            <TouchableWithoutFeedback>
              <Image source={require('../img/friends/friends_03.png')} style={styles.loginImgs}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('personIndex')}>
              <Image source={require('../img/friends/friends_09.png')} style={styles.loginImgs}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Image source={require('../img/friends/friends_12.png')} style={styles.loginImgs}></Image>
            </TouchableWithoutFeedback>
          </View>
        </View>
        :
        <View style={[styles.noLogin,{display:this.state.isLogin==true?'none':'flex'}]}>
          <Text style={{color:'#333',fontSize:0.04*vw}}>狐友</Text>
          <Text style={{color:'#027fdb',fontSize:0.04*vw}} onPress={()=>this.props.navigation.navigate('login')}>登录</Text>
        </View>
      }

      </View>
      <ScrollView>
        <View>
          <View style={styles.userBrand}>
            <Image source={require('../img/timg.jpg')} style={styles.useImg}></Image>
            <View style={styles.userInfo}>
              <Text style={styles.userName} onPress={()=>this.props.navigation.push('personIndex')}>这小子很低调</Text>
              <Text style={styles.userActivity} onPress={()=>this._headRightPress()}>分享照片</Text>
              <Text style={styles.userMoment}>12小时前</Text>
            </View>
          </View>
          <Text style={styles.commentContent}>使用flex布局的容器（flex container），它内部的元素自动成为flex项目（flex item）。容器拥有两根隐形的轴，水平的主轴（main axis），和竖直的交叉轴。主轴开始的位置，即主轴与右边框的交点，称为main start；主轴结束的位置称为main end；交叉轴开始的位置称为cross start；交叉轴结束的位置称为cross end。item按主轴或交叉轴排列，item在主轴方向上占据的宽度称为main size，在交叉轴方向上占据的宽度称为cross size。
          </Text>
          <View >
            {/* <FlatList data={data.imgData} renderItem={(item)=><Image source={item} style={{height:0.462*vw,width:0.462*vw}}  onPress={()=>console.warn(item.key)}></Image>}>
            </FlatList> */}
            <FlatList data={this.state.imgData} 
            contentContainerStyle={styles.commentImgs}
            renderItem={({item})=>
              <TouchableWithoutFeedback onPress={()=>this.props.navigation.push('imgShowView',{imgData:this.state.imgData})}>
                <Image source={item.photo} style={{height:0.45*vw,width:0.45*vw,marginLeft:0.01*vw,marginTop:0.01*vw}}  ></Image>
              </TouchableWithoutFeedback>
            }>
            </FlatList>
          </View>
          <View style={styles.writeComment}>
            <TouchableWithoutFeedback onPress={()=>this.showTransfer()}>
              <View style={{flexDirection:'row'}}>
                  <Image source={require('../img/friends_06.png')} style={{width:0.045*vw,height:0.045*vw}}></Image>
                  <Text style={{marginLeft:5}}>转发</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>this.showInput()}>
              <View style={{flexDirection:'row'}}>
                    <Image source={require('../img/friends_09.png')} style={{width:0.045*vw,height:0.045*vw}}></Image>
                    <Text style={{marginLeft:5}}>评论</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../img/friends_03.png')} style={{width:0.045*vw,height:0.045*vw}}></Image>
                <Text style={{marginLeft:5}}>私信</Text>
            </View>
          </View>
          <View style={styles.bottomBorder}></View>

        </View>
        
      </ScrollView>
      
      <Modal transparent={true} visible={this.state.modalVisible} onRequestClose={()=>{}} >
        <View style={styles.marsk}>
        </View>
        <View style={styles.shareBox}>
          <Text style={{lineHeight:0.1*vw,fontSize:0.045*vw,color:'#333',marginLeft:0.04*vw}}>分享到</Text>
          <View style={styles.shareContent}>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image source={require('../img/mine_03.png')} style={styles.shareBrand_2}></Image>
              </View>
              <Text style={styles.shareBrand_3}>QQ</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image source={require('../img/share/share_06.jpg')} style={styles.shareBrand_2}></Image>
              </View>
              <Text style={styles.shareBrand_3}>微信好友</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image source={require('../img/share/share_03.jpg')} style={styles.shareBrand_2}></Image>
              </View>
              <Text style={styles.shareBrand_3}>狐友</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image source={require('../img/share/share_12.jpg')} style={styles.shareBrand_2}></Image>
              </View>
              <Text style={styles.shareBrand_3}>微信朋友圈</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image source={require('../img/share/share_09.jpg')} style={styles.shareBrand_2}></Image>
              </View>
              <Text style={styles.shareBrand_3}>QQ空间</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image source={require('../img/share/share_21.jpg')} style={styles.shareBrand_2}></Image>
              </View>
              <Text style={styles.shareBrand_3}>新浪微博</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image source={require('../img/share/share_19.png')} style={styles.shareBrand_2}></Image>
              </View>
              <Text style={styles.shareBrand_3}>复制链接</Text>
            </View>
            <View style={styles.shareBrand}></View>
            <View style={styles.shareBrand}></View>
            <View style={styles.shareBrand}></View>
            <View style={styles.shareBrand}></View>
          </View>
          <Text onPress={()=>this.closeModal()} style={styles.closeModal}>取消</Text>
        </View>
      </Modal>

      <Modal transparent={true} visible={this.state.showInput} onRequestClose={()=>{}} animationType={'slide'}>
        <KeyboardAvoidingView style={styles.writeComments}>
        <View style={styles.inputBox}>
          <View style={styles.inputBrand}>
            <Text  style={{height:0.045*vw,color:'#888'}} >回复伍祥清：</Text>
            <TextInput autoFocus={true} onBlur={()=>this.closeInput()} style={styles.inputComment} style={{fontSize:0.045*vw,color:'#888',width:0.65*vw}}></TextInput>
          </View>
        </View>
        </KeyboardAvoidingView>

      </Modal>
    </SafeAreaView>
  );
}
  _headRightPress=()=>{
    if(this.props.navigation.state.params.headerRight=="登录"){
      this.props.navigation.navigate('login')
    }
    else{
      Alert.alert(
        '提示',
        '是否要退出',
        [
          {text: '确定', onPress: () => this.loginOut()},
          {text: '取消'},
        ],
        { cancelable: false }
      )
    }
  }
  loginOut(){
    AsyncStorage.setItem("phone","");
  }
  showTransfer(){
    let _this=this;
    this.setState({showStausbar:true});
    console.log(vh)
    setTimeout(function(){
      
      _this.setState({modalVisible:true})
    },100)

  }
  closeModal(){
    this.setState({showStausbar:false,modalVisible:false});

  }
  showInput(){
    let _this=this;
    this.setState({showStausbar:true});
    
    setTimeout(function(){
      _this.setState({showInput:true})
    },100)

  }
  closeInput(){
    this.setState({showStausbar:false,showInput:false});
  }
}

const styles=StyleSheet.create({
  useImg:{
    width:0.098*vw,
    height:0.098*vw,
    borderRadius:0.049*vw,
  },
  userBrand:{
    flexWrap:'nowrap',
    flexDirection:'row',
    marginTop:0.033*vw,
    marginLeft:0.033*vw,
  },
  userInfo:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  userName:{
    fontSize:0.036*vw,
    fontWeight:'bold',
    marginLeft:20,
    color:'#333'
  },
  userActivity:{
    fontSize:0.036*vw,
    fontWeight:'bold',
    marginLeft:10,
    color:'#888',
    width:0.6*vw
  },
  userMoment:{
    marginLeft:20,
  },
  commentContent:{
    width:0.92*vw,
    marginLeft:0.03*vw,
    marginTop:10,
    fontSize:0.04*vw,
    color:'#333',
    lineHeight:0.055*vw
  },
  commentImgs:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:0.92*vw,
    marginLeft:0.03*vw,
    justifyContent:'space-between',
  },
  writeComment:{
    width:0.80*vw,
    marginLeft:0.1*vw,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
  },
  bottomBorder:{
    marginTop:10,
    height:10,
    backgroundColor:'#f2f2f2',
    flex:1,
  },
  marsk:{
    flex:1,
    height:vh,
    width:vw,
    top:0,
    backgroundColor:'#333',
    opacity:0.8
  },
  shareBox:{
    height:0.7*vw,
    width:vw,
    backgroundColor:'#f2f2f2',
    position:'absolute',
    bottom:0
  },
  shareBrand_1:{
    backgroundColor:'#ffffff',
    borderRadius:0.105*vw,
    height:0.105*vw,
    width:0.105*vw,
    borderColor:'#e2e2e2',
    borderWidth:StyleSheet.hairlineWidth,
    alignItems:'center',
    justifyContent:'center'
  },
  shareBrand_2:{
    width:0.05*vw,
    height:0.05*vw,
    borderRadius:0.05*vw,
  },
  closeModal:{
    position:'absolute',
    bottom:0,
    textAlign:'center',
    lineHeight:0.1*vw,
    fontSize:0.04*vw,
    color:'#333',
    borderColor:'#cccccc',
    flex:1,
    width:vw,
    borderTopWidth:StyleSheet.hairlineWidth,
  },
  shareBrand_3:{
    width:0.2*vw,
    textAlign:'center',
    color:'#333',
    marginTop:5
  },
  shareContent:{
    justifyContent:'space-between',
    flexWrap:'wrap',
    flexDirection:'row'
    
  },
  shareBrand:{
    justifyContent:'space-between',
    alignItems:'center',
    width:0.2*vw,
    marginTop:20
  },
  writeComments:{
    position:'absolute',
    bottom:0
  },
  inputComment:{

  },
  inputBrand:{
    width:0.8*vw,
    paddingLeft:0.03*vw,
    height:40,
    borderColor:'#cccccc',
    borderWidth:1,
    flexDirection:'row',
    alignItems:'center'
  },
  inputBox:{
    height:60,
    width:vw,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#cccccc',
    borderTopWidth:StyleSheet.hairlineWidth,
    borderBottomWidth:StyleSheet.hairlineWidth
  },
  noLogin:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:0.04*vw,
    paddingRight:0.04*vw,
  },
  isLogin:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:0.03*vw,
    paddingRight:0.03*vw,

  },
  loginImgs:{
    width:0.05*vw,
    height:0.05*vw,
    marginRight:0.04*vw
  },
  isLoginRight:{
    flexDirection:'row',

  }
})