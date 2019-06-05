import React from 'react';
import { Text, View ,StyleSheet,StatusBar,ScrollView,Image,Animated,TouchableWithoutFeedback,FlatList} from 'react-native';
import Video from 'react-native-video';

const Dimensions = require('Dimensions');
const vw = Dimensions.get('window').width;
const vh=Dimensions.get('window').height;
const sintel = require('./oceans.mp4');
const scales=Dimensions.get('window').scale;


export default class video extends React.Component {
  
  static navigationOptions=({ navigation }) => {
    return {
      header:null
    };
  };
   
  
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: true,
      fadeAnim: [new Animated.Value(0),new Animated.Value(0),new Animated.Value(0),new Animated.Value(0)],
      fadeAnimValue:[0,0,0,0],
      showMarsk:'none',
      listData:[0,1,2,3,4]
    };
  }
  componentDidMount(){
    this._navListener = this.props.navigation.addListener('didFocus', () => {
        StatusBar.setBarStyle('dark-content');
    });

  }
  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView style={{position:'relative'}}>
          <FlatList 
          data={this.state.listData}
          renderItem={(item)=>
            <View  style={styles.videoBrand}>
              <Text style={styles.videoTitle}>习近平春节前夕在北京看望慰问基层干部群众,向广大干部群众致以美好的新春祝福 祝各族人民幸福安康祝伟大祖国繁荣吉祥</Text>
              <View style={styles.videoContent}>
                <Video source={sintel}   //Can be a URL or a local file.
                ref={(ref) => {
                  this.player = ref
                }}
                controls={true}
                playWhenInactive={true}
                volume={1}  
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError} 
                //fullscreen={true}              // Callback when video cannot be loaded
                style={styles.Video} >
                </Video>
              </View>
              <View style={styles.actionBtns}>
                <Text style={styles.origin_1} onPress={()=>this.showPop()}>人民日报</Text>
                <Image source={require('../img/zan_06.png')}  style={styles.origin_2}></Image>
                <Text style={styles.origin_3}>12</Text>
                <Image source={require('../img/zan_03.jpg')}  style={styles.origin_4}></Image>
                <Text style={styles.origin_5}>12</Text>
                <TouchableWithoutFeedback onPress={()=>this._showPopup(item)}>
                  <Image source={require('../img/ping_03.png')}  style={styles.origin_6}></Image>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.showPop(item)}>
                  <Image source={require('../img/ping_06.png')}  style={styles.origin_7}></Image>
                </TouchableWithoutFeedback>
                <Animated.View style={{    
                  position:'absolute',
                  borderRadius:8,
                  backgroundColor:'#cccccc',
                  bottom:0.085*vw,
                  right:10,
                  zIndex:1000,
                  opacity:this.state.fadeAnim[item.index]
                }}>
                  <Text  style={styles.popCenterBrand}>加入收藏</Text>
                  <Text  style={styles.popCenterBrand} onPress={()=>this._removeBrand(item)}>不感兴趣</Text>

                </Animated.View>
              </View>
            </View>}>

          </FlatList>
          
        </ScrollView>
        {/* <View style={{height:vh,backgroundColor:'#333',width:vw,zIndex:9999,marginTop:10}}>
          <View style={{}}></View>
        </View> */}
      </View>
      
    );
  }
  
  showPop(item){
    if(this.state.fadeAnimValue[item.index]==1){
      Animated.timing(                  
        this.state.fadeAnim[item.index],            
        {
          toValue: 0,                   
          duration: 500,              
        }
      ).start(); 
      let temp=this.state.fadeAnimValue;
      temp[item.index]=0;  
      this.setState({
        fadeAnimValue:temp
      })
      console.warn(0)
    }
    else{
      console.warn(1)
      Animated.timing(                  
        this.state.fadeAnim[item.index],            
        {
          toValue: 1,                   
          duration: 500,              
        }
      ).start(); 
      let temp=this.state.fadeAnimValue;
      temp[item.index]=1;  
      this.setState({
        fadeAnimValue:temp
      })

    }
    
  }
  _showPopup(item){
    console.warn(this.props.navigation)
    
  }
  _removeBrand(item){
    var _this=this;
    this.showPop(item);
    let temp=this.state.listData;
    temp.splice(item.index,1);
    this.setState({
      listData:temp
    })
    
  }
}

var styles = StyleSheet.create({
  videoBrand:{
    position:'relative',
    height:0.85*vw,
    width:vw,
    borderBottomWidth:1,
    borderColor:'#cccccc',
    paddingBottom:5
  },
  videoTitle:{
    marginTop:35,
    fontWeight:'bold',
    fontSize:0.035*vw,
    height:0.08*vw,
    lineHeight:0.04*vw,
    color:'#333',
    width:0.92*vw,
    marginLeft:0.03*vw
  },
  videoContent:{
    flex:1
  },
  Video: {
    height:0.5*vw,
    width:vw,

  },
  actionBtns:{
    flexDirection:'row',
    position:'relative'
  },
  origin_1:{
    marginLeft:0.03*vw,
    color:'#888',
    width:0.48*vw,
    fontSize:0.03*vw
  },
  origin_2:{
    width:0.038*vw,
    height:0.035*vw,

  },
  origin_3:{
    marginLeft:5,
    marginTop:-3,
    width:0.08*vw
  },
  origin_4:{
    width:0.04*vw,
    height:0.04*vw,
  },
  origin_5:{
    marginLeft:5,
    marginTop:-1,
    width:0.08*vw

  },
  origin_6:{
    width:0.04*vw,
    height:0.04*vw,
    marginRight:0.08*vw
  },
  origin_7:{
    marginTop:4,
    width:0.073*vw,
    height:0.015*vw
  },
  marsk:{
  },
  popCenterBrand:{
    width:0.362*vw,
    height:0.092*vw,
    lineHeight:0.092*vw,
    textAlign:'center'
  }
});