import React from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  AsyncStorage,
  Alert,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView
} from "react-native";


export default class makeFriends extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      isLogin: false
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      imgData: [
        { photo: require("../img/timg.jpg") },
        { photo: require("../img/timg.jpg") },
        { photo: require("../img/timg.jpg") }
      ],
      showLogin: "none",
      modalVisible: false,
      hiddenStausbar: false,
      showInput: false,
      momentData: [],
      isRefreshing:false,
      getFavor:[require('../img/nozan.png'),require('../img/haszan_03.png')],
      isFavor:0
    };
  }
  componentWillMount() {
    let _this = this;
    ajaxPost(Url.getmoment, { userid: 9999999999999 }, function(res) {
      console.log(res, "动态数据");
      if (res.code == 1) {
        for(let i=0;i<res.data.length;i++){
          let tempDate=new Date(res.data[i].create_time);
          res.data[i].create_time=tempDate.toLocaleString();
          let tempImg=res.data[i].imgs.split(",");
          res.data[i].imgData=tempImg;
          
        }
        _this.setState({
          momentData: res.data
        });
      }
    });
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
      var temp = AsyncStorage.getItem("phone");
      console.log(temp,'是否登录')
      if (temp != null) {
        this.setState({ isLogin: true });
      } else {
        this.setState({ isLogin: false });
      }
    });
  }
  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <SafeAreaView
        forceInset={{ bottom: "always" }}
        style={{
          position: "relative",
          marginTop: platfrom.os == "ios" ? 0 : 30,
          paddingBottom: 35
        }}
      >
        <View style={styles.headerNav}>
          {this.state.isLogin == true ? this.isLoginView(): this.isNoLoginView()}
        </View>
        <ScrollView >
          <FlatList
            
            onRefresh={()=>this.setRefresh()}
            refreshing={this.state.isRefreshing}
            data={this.state.momentData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item,index }) => (
              <View >

                {/* 用户信息部分 */}
                <View style={styles.userBrand}>
                  <Image
                    source={{uri:host+item.user_photo}}
                    style={styles.useImg}
                  />
                  <View style={styles.userInfo}>
                    <Text
                      style={styles.userName}
                      onPress={() => this.props.navigation.push("personIndex")}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={styles.userActivity}
                      onPress={() => this._headRightPress()}
                    >
                      分享照片
                    </Text>
                    <Text style={styles.userMoment}>{item.create_time}</Text>
                  </View>
                </View>
                <Text style={styles.commentContent}>{item.content}</Text>

                {/* 图片部分 */}
                <FlatList
                  style={styles.imgsList}
                  data={item.imgData}
                  contentContainerStyle={styles.commentImgs}
                  renderItem={({ item}) => (
                    <TouchableWithoutFeedback
                      onPress={() =>
                        this.props.navigation.push("imgShowView", {
                          imgData: item.imgData
                        })
                      }
                    >
                      <Image
                        source={{uri:host+item}}
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

                {/* 转发、评论和私信 */}
                <View style={styles.writeComment}>
                  <TouchableWithoutFeedback onPress={() => this.showTransfer()}>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={require("../img/friends_06.png")}
                        style={{ width: 0.045 * vw, height: 0.045 * vw }}
                      />
                      <Text style={{ marginLeft: 5 }}>转发</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={() => this.goDetail(item)}>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={require("../img/friends_09.png")}
                        style={{ width: 0.045 * vw, height: 0.045 * vw }}
                      />
                      <Text style={{ marginLeft: 5 }}>评论</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={this.setFavor.bind(this, item, index)}>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={item.islike==0?this.state.getFavor[0]:this.state.getFavor[1]}
                        style={{ width: 0.045 * vw, height: 0.045 * vw }}
                      />
                      <Text style={{ marginLeft: 5 }}>{item.favors}</Text>
                    </View>                  
                  </TouchableWithoutFeedback>
                  
                </View>
                <View style={styles.bottomBorder} />
              </View>
            )}
          />
        </ScrollView>
        {this.transfer()}
        

        
      </SafeAreaView>
    );
  }
  isLoginView(){
    return(
      <View
        style={[styles.isLogin]}
      >
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("WriteMoment")}
        >
          <Image
            source={require("../img/friends/friends_06.png")}
            style={styles.loginImgs}
          />
        </TouchableWithoutFeedback>
        <View style={styles.isLoginRight}>
          <TouchableWithoutFeedback>
            <Image
              source={require("../img/friends/friends_03.png")}
              style={styles.loginImgs}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("personIndex")}
          >
            <Image
              source={require("../img/friends/friends_09.png")}
              style={styles.loginImgs}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image
              source={require("../img/friends/friends_12.png")}
              style={styles.loginImgs}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
  isNoLoginView(){
    return(            
      <View
        style={[styles.noLogin,]}
      >
        <Text style={{ color: "#333", fontSize: 0.04 * vw }}>狐友</Text>
        <Text
          style={{ color: "#027fdb", fontSize: 0.04 * vw }}
          onPress={() => this.props.navigation.navigate("login")}
        >
          登录
        </Text>
      </View>
    )
  }
  _headRightPress = () => {
    if (this.props.navigation.state.params.headerRight == "登录") {
      this.props.navigation.navigate("login");
    } else {
      Alert.alert(
        "提示",
        "是否要退出",
        [{ text: "确定", onPress: () => this.loginOut() }, { text: "取消" }],
        { cancelable: false }
      );
    }
  };
  loginOut() {
    AsyncStorage.setItem("phone", "");
  }
  showTransfer() {
    let _this = this;
    this.setState({ showStausbar: true });
    console.log(vh);
    setTimeout(function() {
      _this.setState({ modalVisible: true });
    }, 100);
  }
  closeModal() {
    this.setState({ showStausbar: false, modalVisible: false });
  }
  //点赞
  setFavor(item,index){
    if(item.islike==0){
      item.islike=1
      item.favors++
      console.log(this.state.momentData,'this.state.momentData')

      this.state.momentData[index]=item
      let temp=this.state.momentData
      console.log(temp,'temp')
      this.setState({momentData:temp})
      ajaxPost(Url.setFavor,{moment_id:item.ID,favorite_user_id:item.userID},function(res){
        console.log(res,'res')
      })
    }
    else{
      item.islike=0
      item.favors--
      this.state.momentData[index]=item
      let temp=this.state.momentData
      console.log(temp,'temp')
      this.setState({momentData:temp})
      ajaxPost(Url.deleteFavor,{moment_id:item.ID,favorite_user_id:item.userID},function(res){
        console.log(res,'res')
      })
    }
  }

  //下拉刷新
  setRefresh(){
    console.log('刷新')
    let _this=this;
    if(this.state.isRefreshing==true){
      setTimeout(function(){
        _this.setState({
          isRefreshing:false
        })
        console.log('刷新')
      },1500)
    }
    else{
      setTimeout(function(){
        _this.setState({
          isRefreshing:true
        })
      },1500)
    }
  }
  //转发弹窗
  transfer(){
    
      return(
      <Modal
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.marsk} />
        <View style={styles.shareBox}>
          <Text
            style={{
              lineHeight: 0.1 * vw,
              fontSize: 0.045 * vw,
              color: "#333",
              marginLeft: 0.04 * vw
            }}
          >
            分享到
          </Text>
          <View style={styles.shareContent}>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image
                  source={require("../img/mine_03.png")}
                  style={styles.shareBrand_2}
                />
              </View>
              <Text style={styles.shareBrand_3}>QQ</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image
                  source={require("../img/share/share_06.jpg")}
                  style={styles.shareBrand_2}
                />
              </View>
              <Text style={styles.shareBrand_3}>微信好友</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image
                  source={require("../img/share/share_03.jpg")}
                  style={styles.shareBrand_2}
                />
              </View>
              <Text style={styles.shareBrand_3}>狐友</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image
                  source={require("../img/share/share_12.jpg")}
                  style={styles.shareBrand_2}
                />
              </View>
              <Text style={styles.shareBrand_3}>微信朋友圈</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image
                  source={require("../img/share/share_09.jpg")}
                  style={styles.shareBrand_2}
                />
              </View>
              <Text style={styles.shareBrand_3}>QQ空间</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image
                  source={require("../img/share/share_21.jpg")}
                  style={styles.shareBrand_2}
                />
              </View>
              <Text style={styles.shareBrand_3}>新浪微博</Text>
            </View>
            <View style={styles.shareBrand}>
              <View style={styles.shareBrand_1}>
                <Image
                  source={require("../img/share/share_19.png")}
                  style={styles.shareBrand_2}
                />
              </View>
              <Text style={styles.shareBrand_3}>复制链接</Text>
            </View>
            <View style={styles.shareBrand} />
            <View style={styles.shareBrand} />
            <View style={styles.shareBrand} />
            <View style={styles.shareBrand} />
          </View>
          <Text onPress={() => this.closeModal()} style={styles.closeModal}>
            取消
          </Text>
        </View>
      </Modal>


      )
    
  }
  //写回复
  writeReply(){
    return(
      <Modal
          transparent={true}
          visible={this.state.showInput}
          onRequestClose={() => {}}
          animationType={"slide"}
        >
          <KeyboardAvoidingView style={styles.writeComments}>
            <View style={styles.inputBox}>
              <View style={styles.inputBrand}>
                <Text style={{ height: 0.045 * vw, color: "#888" }}>
                  回复伍祥清：
                </Text>
                <TextInput
                  autoFocus={true}
                  onBlur={() => this.closeInput()}
                  style={styles.inputComment}
                  style={{
                    fontSize: 0.045 * vw,
                    color: "#888",
                    width: 0.65 * vw
                  }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
    )
  }
  //跳转到详情页
  goDetail(data){
    this.props.navigation.navigate('momentDetail',{data:JSON.stringify(data)})
  }
}

const styles = StyleSheet.create({
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
    width: 0.8 * vw,
    marginLeft: 0.1 * vw,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  bottomBorder: {
    marginTop: 10,
    height: 10,
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  marsk: {
    flex: 1,
    height: vh,
    width: vw,
    top: 0,
    backgroundColor: "#333",
    opacity: 0.8
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
  inputComment: {},
  inputBrand: {
    width: 0.8 * vw,
    paddingLeft: 0.03 * vw,
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  inputBox: {
    height: 60,
    width: vw,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#cccccc",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
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
    paddingRight: 0.03 * vw,
    paddingBottom: 5
  },
  loginImgs: {
    width: 0.05 * vw,
    height: 0.05 * vw,
    marginRight: 0.04 * vw
  },
  isLoginRight: {
    flexDirection: "row"
  },
  imgsList:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
