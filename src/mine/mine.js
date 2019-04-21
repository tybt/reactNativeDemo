import React from 'react';
import { Platform,Text, View ,Image,StyleSheet,ScrollView,TouchableOpacity,TouchableNativeFeedback,Switch,StatusBar} from 'react-native';

var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class mine extends React.Component {
  static navigationOptions={
    header:null
  }
  constructor(props){
    super();
    this.state={
      changeSwitch:true,
      isIos:'',
      isAndroid:''
    }
  }
  componentDidMount(){
    this._navListener = this.props.navigation.addListener('didFocus', () => {
        StatusBar.setBarStyle( 'dark-content');
    });
    if(Platform.OS=="ios"){
      this.setState({isAndroid:'none',isIos:'flex'})
    }
    else{
      this.setState({isIos:'none',isAndroid:'flex'})
    }

  }
  componentWillUnmount() {
      this._navListener.remove();
  }

  
  render() {
    return (
      <ScrollView >
        <View style={styles.header}>
          <Text style={{textAlign:'center',fontSize:0.036*vw,marginTop:0.15*vw}}>一键登录，即可点评收藏文章</Text>
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
        </View>
        {/* //ios系统用的 */}
        <View style={{display:'flex'}}>
          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_23.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>收藏文章</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_27.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>24小时热点</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_31.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>搜狐时刻</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_34.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>阅读历史</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_37.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>看看搜狐号文章</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_39.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>狐友动态</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>

          <View style={styles.brandBorder}></View>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_42.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>设置</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_46.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_4}>夜间模式</Text>
              <Switch value={this.state.changeSwitch} onValueChange={()=>this.changeValue()} style={{marginTop:0.015*vw}}></Switch>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_49.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>帮助与反馈</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_033.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>活动</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.brand}>
              <Image source={require('../img/mine_07.png')} style={styles.brand_1}></Image>
              <Text style={styles.brand_2}>申请成为搜狐号</Text>
              <Image source={require('../img/forward_03.png')} style={styles.brand_3}></Image>
            </View>
          </TouchableOpacity >
        </View>
          
     </ScrollView>
    );
  }

  changeValue(){
    if(this.state.changeSwitch==true){
      this.setState({
        changeSwitch:false
      })
    }
    else{
      this.setState({
        changeSwitch:true
      })
    }
  }

}
const styles=StyleSheet.create({
  header:{
    backgroundColor:'#f2f2f2',
    height:0.42*vw
  },
  loginBrand:{
    width:0.13*vw,
    height:0.13*vw,
    borderRadius:0.13*vw,
    backgroundColor:'#ffffff',
    alignItems:'center',
  },
  headerBox:{
    justifyContent:'space-between',
    flexDirection:'row',
    flexWrap:'nowrap',
    width:0.92*vw,
    marginLeft:0.04*vw,
    marginTop:0.05*vw
  },
  brand:{
    height:0.133*vw,
    flexDirection:'row',
    
  },
  brandBorder:{
    borderBottomWidth:1,//StyleSheet.hairlineWidth,
    borderColor:'#cccccc'

  },
  brand_1:{
    marginTop:0.04*vw,
    marginLeft:0.033*vw,
    width:0.055*vw,
    height:0.055*vw
  },
  brand_2:{
    marginTop:0.045*vw,
    marginLeft:0.028*vw,
    width:0.817*vw,
    fontSize:0.035*vw,
    color:'#333'
  },
  brand_3:{
    marginTop:0.04*vw,
    width:0.025*vw,
    height:0.055*vw
  },
  brand_4:{
    marginTop:0.045*vw,
    marginLeft:0.028*vw,
    width:0.73*vw,
    fontSize:0.035*vw,
    color:'#333'

  }
})