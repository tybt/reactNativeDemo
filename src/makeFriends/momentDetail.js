import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert

} from "react-native";

export default class momentDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "详情"
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(this.props.navigation.getParam("data")),
      isRefreshing: false,
      getFavor: [require("../img/nozan.png"), require("../img/haszan_03.png")],
      isFavor: 0,
      totalReply:999,
      showInput:false,
      inptText:'',
      replys:[]

    };
  }
  componentWillMount() {
    console.log(this.state.data, "this.state.data");
    let _this=this;
    ajaxPost(Url.getReply,{momentId:this.state.data.ID},function(res){
      console.log(res,'返回数据')
      for(let i=0;i<res.data.length;i++){
        let temp=new Date(res.data[i].create_time)
        res.data[i].create_time=temp.toLocaleString();
      }
      _this.setState({replys:res.data})
    })
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView style={{marginBottom:40}}>
          {/* 用户信息部分 */}
          <View style={styles.userBrand}>
            <Image
              source={{ uri: host + this.state.data.user_photo }}
              style={styles.useImg}
            />
            <View style={styles.userInfo}>
              <Text
                style={styles.userName}
                onPress={() => this.props.navigation.push("personIndex")}
              >
                {this.state.data.name}
              </Text>
              <Text
                style={styles.userActivity}
                onPress={() => this._headRightPress()}
              >
                分享照片
              </Text>
              <Text style={styles.userMoment}>
                {this.state.data.create_time}
              </Text>
            </View>
          </View>
          <Text style={styles.commentContent}>{this.state.data.content}</Text>

          {/* 图片部分 */}
          <View>
            <FlatList
              style={styles.imgsList}
              data={this.state.data.imgData}
              contentContainerStyle={styles.commentImgs}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.props.navigation.push("imgShowView", {
                      imgData: item.imgData
                    })
                  }
                >
                  <Image
                    source={{ uri: host + item }}
                    style={{
                      height: 0.45 * vw,
                      width: 0.45 * vw,
                      marginLeft: 0.01 * vw,
                      marginTop: 0.01 * vw
                    }}
                  />
                </TouchableWithoutFeedback>
              )}
            />
          </View>

          <View style={styles.bottomBorder} />

          {/* 评论列表 */}
          <View style={styles.replyBox}>
            <Text style={styles.replyHeader}>评论{this.state.replys.length}</Text>
          {
            this.state.replys.map((item,index)=>{
            return(
              <View style={styles.replyBrand}>
                <View style={styles.replyUser}>
                    <Image source={{uri:host+item.user_photo}} style={styles.replyUserImg}></Image>
                    <View style={styles.replyUserInfo}>
                        <Text style={styles.replyUserName}>{item.name}</Text>
                        <Text style={styles.replyTime}>{item.create_time}</Text>
                        <View  style={[styles.replyWord,commonBorder.bottom]}>
                          <Text>{item.content}</Text>
                        </View>
                        
                    </View>
                </View>
            </View>)
          })}
          </View>

        </ScrollView>

        {/* 转发、评论和私信 */}
        <View style={[styles.writeComment,commonBorder.top]}>
          <TouchableWithoutFeedback onPress={() => this.showTransfer()}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../img/friends_06.png")}
                style={{ width: 0.045 * vw, height: 0.045 * vw }}
              />
              <Text style={{ marginLeft: 5 }}>转发</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.showInput()}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../img/friends_09.png")}
                style={{ width: 0.045 * vw, height: 0.045 * vw }}
              />
              <Text style={{ marginLeft: 5 }}>评论</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.setFavor()}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={this.state.getFavor[this.state.isFavor]}
                style={{ width: 0.045 * vw, height: 0.045 * vw }}
              />
              <Text style={{ marginLeft: 5 }}>点赞</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {this.writeReply()}
        {
          this.state.showInput==false?<View/>:   
            <View style={styles.marsk}></View>  
        }          
      </SafeAreaView>
    );
  }

  //写回复
  writeReply(){
    return(
      <View style={{flex:1}}>
        {this.state.showInput==false?<View/>: 
        <View style={{flex:1}}>       
          <Modal
            transparent={true}
            visible={this.state.showInput}
            onRequestClose={() => {}}
            
          >
            <KeyboardAvoidingView style={styles.writeComments}>
              <View style={[styles.inputBox,commonBorder.top]}>
                <View style={styles.inputBrand}>
                  <TextInput
                    autoFocus={true}
                    onBlur={() => this.closeInput()}
                    style={styles.inputComment}
                    onChangeText={(inptText) => this.setState({inptText:inptText})}
                  />
                </View>
                <TouchableOpacity onPress={()=>this.sendReply()}>
                  <Text style={styles.sendButton}>发送</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </Modal>
          
        </View>
      }

      </View>
    )
  }

  //显示写回复
  showInput() {
    this.setState({ showInput: true });
  }

  closeInput() {
    this.setState({ showInput: false });
  }

  sendReply(){
    console.log('send',this.state.data)
    if(this.state.inptText.trim()!=""){
      ajaxPost(Url.writeReply,{
        momentId:this.state.data.ID,
        userid:'9999999999999',
        content:this.state.inptText,
      },function(res){
        console.log(res)
      })
    }
    else{
      Alert.alert("内容不能为空")
    }
  }


  
}
const styles = StyleSheet.create({
  marsk:{
    top:0,
    position:'absolute',
    height:vh,
    width:vw,
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  sendButton:{
    width:0.16*vw,
    backgroundColor:themeColor,
    color:'#ffffff',
    borderRadius:0.01*vw,
    fontSize:0.035*vw,
    height:0.08*vw,
    lineHeight:0.08*vw,
    textAlign:'center',
    marginLeft:0.015*vw,
    marginTop:5
  },
  writeComments: {
    position: "absolute",
    bottom: 0
  },
  replyWord:{
    marginTop:5,
    paddingBottom:10,
    flex:1
  },
  replyUser:{
    flex:1,
    flexDirection:'row',
    marginTop:10
  },
  replyUserInfo:{
    flex:1,
    marginLeft:10
  },
  replyUserImg:{
    width:0.085*vw,
    height:0.085*vw,
    borderRadius:0.0425*vw,
    marginLeft:0.04*vw
  },
  replyHeader:{
    paddingTop:10,
    paddingBottom:10,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor:'#cccccc',
    color:'#666',
    paddingLeft:0.04*vw
  },
  headerNav: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2"
  },
  useImg: {
    width: 0.098 * vw,
    height: 0.098 * vw,
    borderRadius: 0.049 * vw
  },
  userBrand: {
    flexWrap: "nowrap",
    flexDirection: "row",
    marginTop: 0.033 * vw,
    marginLeft: 0.033 * vw
  },
  userInfo: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  userName: {
    fontSize: 0.036 * vw,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#333"
  },
  userActivity: {
    fontSize: 0.036 * vw,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#888",
    width: 0.6 * vw
  },
  userMoment: {
    marginLeft: 20
  },
  commentContent: {
    width: 0.92 * vw,
    marginLeft: 0.03 * vw,
    marginTop: 10,
    fontSize: 0.04 * vw,
    color: "#333",
    lineHeight: 0.055 * vw
  },
  commentImgs: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 0.92 * vw,
    marginLeft: 0.03 * vw,
    justifyContent: "space-between"
  },
  writeComment: {
    paddingLeft:0.06*vw,
    paddingRight:0.06*vw,
    paddingTop:10,
    width: vw,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    paddingBottom:10,
    backgroundColor:'#ffffff'
  },
  bottomBorder: {
    marginTop: 10,
    height: 10,
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  shareBox: {
    height: 0.7 * vw,
    width: vw,
    backgroundColor: "#f2f2f2",
    position: "absolute",
    bottom: 0
  },
  shareBrand_1: {
    backgroundColor: "#ffffff",
    borderRadius: 0.105 * vw,
    height: 0.105 * vw,
    width: 0.105 * vw,
    borderColor: "#e2e2e2",
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center"
  },
  shareBrand_2: {
    width: 0.05 * vw,
    height: 0.05 * vw,
    borderRadius: 0.05 * vw
  },
  closeModal: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    lineHeight: 0.1 * vw,
    fontSize: 0.04 * vw,
    color: "#333",
    borderColor: "#cccccc",
    flex: 1,
    width: vw,
    borderTopWidth: StyleSheet.hairlineWidth
  },
  shareBrand_3: {
    width: 0.2 * vw,
    textAlign: "center",
    color: "#333",
    marginTop: 5
  },
  shareContent: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  shareBrand: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 0.2 * vw,
    marginTop: 20
  },
  inputBrand: {
    width: 0.75 * vw,
    paddingLeft: 0.015 * vw,
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  inputBox: {
    height: 60,
    width: vw,
    paddingTop:10,
    paddingLeft:0.04*vw,
    backgroundColor: "#ffffff",
    flexDirection:'row'
  },
  noLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 0.04 * vw,
    paddingRight: 0.04 * vw
  },
  isLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 0.03 * vw,
    paddingRight: 0.03 * vw
  },
  loginImgs: {
    width: 0.05 * vw,
    height: 0.05 * vw,
    marginRight: 0.04 * vw
  },
  isLoginRight: {
    flexDirection: "row"
  },
  imgsList: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  replyContent:{
    
  },
});
