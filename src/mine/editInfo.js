
    import React from 'react';
    import { StyleSheet ,View ,Text,ScrollView,StatusBar,TouchableOpacity,Image,Picker,TouchableWithoutFeedback,Modal,DatePickerIOS} from 'react-native';
    import {SafeAreaView} from 'react-navigation';
    import BottomBack from '../compoment/bttomBack'       
    
    var Dimensions = require('Dimensions');
    var vw = Dimensions.get('window').width;
    var vh=Dimensions.get('window').height;
    export default class editInfo extends React.Component{
        static navigationOptions={
            header:null,
        }
        constructor(props) {
            super(props);
            this.state = {
                userName:'wxq',
                pickSex:false,
                sex:'男',
                pick:false,
                pickXZ:false,
                XZ:"白羊座",
                chosenDate: new Date(),
                pickerDateIOS:false 
            };
            this.setDate = this.setDate.bind(this);
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
                <SafeAreaView style={{flex:1}}>
                    <StatusBar></StatusBar>
                    <ScrollView>
                        <Text style={[styles.commonText,{paddingBottom:0.03*vw,fontWeight:'bold',marginLeft:0.04*vw}]}>编辑资料</Text>
                        <Text style={[styles.commonText,styles.branTitle]}>基本资料</Text>
                        <View style={styles.brand}>
                            <Text>用户名</Text>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('textInput',{name:'用户名',value:this.state.userName})}>
                                <Text>{this.state.userName}</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.brand}>
                            <Text>性别</Text>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.setState({pickSex:true,pick:true})}>
                                <Text>{this.state.sex}</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.brand}>
                            <Text>生日</Text>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.setState({pickerDateIOS:true,pick:true})}>
                                <Text>{JSON.stringify(this.state.chosenDate)}</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.brand}>
                            <Text>星座</Text>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.setState({pickXZ:true,pick:true})}>
                                <Text>{this.state.XZ}</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.brand}>
                            <Text>简介</Text>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text>jingjing</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.commonText,styles.branTitle]}>地区</Text>
                        <View style={styles.brand}>
                            <Text>所在地</Text>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text>jingjing</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.brand}>
                            <Text>家乡</Text>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text>jingjing</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.commonText,styles.branTitle]}>行业/职业</Text>
                        <View style={styles.brand}>
                            <Text>行业</Text>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text>jingjing</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.brand}>
                            <Text>职业</Text>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text>jingjing</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.commonText,styles.branTitle]}>教育经历</Text>
                        <View style={styles.brand}>
                            <Text>学校</Text>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text>jingjing</Text>
                                <Image source={require('../img/forward_03.png')} style={styles.forwardImg}></Image>
                            </TouchableOpacity>
                        </View>
    
                    </ScrollView>
                    <BottomBack navigation={this.props.navigation}></BottomBack>
                    
                    <Modal
                    visible={this.state.pick}
                    animationType="slide"
                    transparent={true}
                    >   
                        <TouchableWithoutFeedback  onPress={()=>this.setState({pickSex:false,pick:false})}>
                            <View style={styles.marsk}></View>
                        </TouchableWithoutFeedback>
                        
                        <View style={styles.pickSex}>
                            <View style={styles.pickHeader}> 
                                <Text onPress={()=>this.setState({pick:false,pickSex:false,pickXZ:false,pickerDateIOS:false})}>取消</Text>
                                <Text onPress={()=>this.setState({pick:false,pickSex:false,pickXZ:false,pickerDateIOS:false})}>确定</Text>
                            </View>
                            {this.state.pickSex?
                            <Picker
                                selectedValue={this.state.sex}
                                style={{ height: 0.4*vw, width: vw }}
                                mode={'dropdown'}
                                onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}>
                                <Picker.Item label="男" value="男" />
                                <Picker.Item label="女" value="女" />
                                <Picker.Item label="未知" value="未知" />
                            </Picker>
                            :
                            <View></View>
                            }
                            
                            {
                                this.state.pickXZ?
                                <Picker
                                    selectedValue={this.state.XZ}
                                    style={{ height: 0.4*vw, width: vw }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({XZ: itemValue})}>
                                    <Picker.Item label="白羊座" value="白羊座" />
                                    <Picker.Item label="金牛座" value="金牛座" />
                                    <Picker.Item label="双子座" value="双子座" />
                                    <Picker.Item label="巨蟹座" value="巨蟹座" />
                                    <Picker.Item label="狮子座" value="狮子座" />
                                    <Picker.Item label="处女座" value="处女座" />
                                    <Picker.Item label="天秤座" value="天秤座" />
                                    <Picker.Item label="天蝎座" value="天蝎座" />
                                    <Picker.Item label="射手座" value="射手座" />
                                    <Picker.Item label="摩羯座" value="摩羯座" />
                                    <Picker.Item label="水瓶座" value="水瓶座" />
                                    <Picker.Item label="双鱼座" value="双鱼座" />
                                </Picker>
                                :
                                <View></View>
                            }
                            {
                                this.state.pickerDateIOS?
                                <DatePickerIOS
                                date={this.state.chosenDate}
                                onDateChange={this.setDate}
                                style={{height: 0.4*vw, width: vw}}
                                />
                                :
                                <View></View>
                            }
                        </View>                        
                        
                       
                    </Modal>
                </SafeAreaView>
            )
        }
        setDate(newDate) {
            this.setState({chosenDate: newDate})
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
        forwardImg:{
            height:0.04*vw,
            width:0.024*vw,
            marginLeft:0.02*vw
        },
        marsk:{
            position:'absolute',
            height:vh,
            width:vw,
            zIndex:10,
            backgroundColor:'#333',
            opacity:0.8
        },
        pickSex:{
            position:'absolute',
            zIndex:11,
            bottom:0,
            backgroundColor:'#ffffff'
        },
        pickHeader:{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingLeft:0.04*vw,
            paddingRight:0.04*vw,
            height:0.1*vw,
            alignItems:'center'
        }
    })
