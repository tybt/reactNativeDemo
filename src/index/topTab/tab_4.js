
import React from 'react';
import {View,Text,StyleSheet,ImageBackground,FlatList,ScrollView,Image,Button,StatusBar,TouchableWithoutFeedback} from 'react-native';

var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class Tab_3 extends React.Component{
    static navigationOptions={
        header:null
      }
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            news:[],
            weather:{},
            city:'',
            opcityCount:1
        };
    }
    componentDidMount(){
  
        
    }
    componentWillMount(){
        //获取新闻数据，
        let _this=this;
        ajaxPost(Url.news_4,{},function(res){
            _this.setState({news:res.result.data})
        })
        ajaxPost(Url.weather,{},function(res){
            _this.setState({weather:res.result.realtime,city:res.result.city})

        })
    }

    
    componentWillUnmount() {
    }
    
    render(){
        return(
            <View >
                <ScrollView onScroll={this.showNavMarsk} >
                    <FlatList data={this.state.news}  renderItem={({item})=>//新闻内容
                        <View style={[styles.newBrands,{}]} >
                            {/* 三张图片 */}
                            <View style={{display:item.thumbnail_pic_s02?'flex':'none'}}> 
                                <Text onPress={()=>this.props.navigation.navigate('article',{url:item.url})}>{item.title}</Text>
                                <View style={styles.newsImg}>
                                    <TouchableWithoutFeedback onPress={()=>this.goBigImg(item.thumbnail_pic_s,item.thumbnail_pic_s02,item.thumbnail_pic_s03) }>
                                        <Image source={{uri:item.thumbnail_pic_s}} style={{width:0.29*vw,height:0.29*vw}} ></Image>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={()=>this.goBigImg(item.thumbnail_pic_s,item.thumbnail_pic_s02,item.thumbnail_pic_s03) }>
                                        <Image source={{uri:item.thumbnail_pic_s02}} style={{width:0.29*vw,height:0.29*vw}} ></Image>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={()=>this.goBigImg(item.thumbnail_pic_s,item.thumbnail_pic_s02,item.thumbnail_pic_s03) }>
                                        <Image source={{uri:item.thumbnail_pic_s03}} style={{width:0.29*vw,height:0.29*vw}} ></Image>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                            {/* 一张图片 */}
                            <View style={{display:item.thumbnail_pic_s02?'none':'flex'}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={styles.newsImg}>
                                        <TouchableWithoutFeedback onPress={()=>this.goBigImg(item.thumbnail_pic_s,item.thumbnail_pic_s02,item.thumbnail_pic_s03) }>
                                            <Image source={{uri:item.thumbnail_pic_s}} style={{width:0.29*vw,height:0.29*vw}} ></Image>
                                        </TouchableWithoutFeedback>
                                        <Text onPress={()=>this.props.navigation.navigate('article',{url:item.url})} style={styles.oneImgTitile}>{item.title}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.newsInfo}>
                                <Text style={styles.newBrandsOrigin} >{item.author_name}</Text>
                                <Text style={styles.commentCount}>{item.date}</Text>
                            </View>
                        </View>
                        

                    }>
                    </FlatList>
                </ScrollView>
            </View>
            
        )
    }
    showNavMarsk=(event)=>{
        let h=event.nativeEvent.contentOffset.y;
        
        if(h<=70){
            let count=0.014*h
            this.setState({opcityCount:count})
        }
        else{
            this.setState({opcityCount:1})
        }
    }
    async showBtn(){
        await this.setState({statusBarVisible:true});
        let _this=this;
        setTimeout(function(){
            _this.setState({modalVisible:true})
        },20) 
    }
    goBigImg(a,b,c){
        let arry=[{photo:a}]
        if(b!=undefined){
            arry.push({photo:b})
        }
        if(c!=undefined){
            arry.push({photo:c})
        }
        
        this.props.navigation.navigate('imgShowView',{imgData:arry})
    }
    
}



const styles=StyleSheet.create({
    wrapper:{
        height:400,
        width:vw
    },
    navBox:{
        backgroundColor:'#007fd8',
        height:0.165*vw,
        position:'absolute',
        width:vw,
        top:0
    },
    navBrand:{
        flex:1,
        flexDirection:'row',
        position:'absolute',
        justifyContent:'space-between'
    },
    head_backgroundImg:{

        width:vw,
        height:0.6*vw
    },
    navTitle:{
        paddingTop:0.075*vw,
        zIndex:99,
        width:0.2*vw,
    },
    navTitleBox:{
        color:'#ffffff',
        fontSize:20,
        marginRight:30,
    },
    navTips:{
        backgroundColor:'#ffffff',
        height:0.154*vw,
        marginLeft:0.075*vw,
        width:0.85*vw,
        borderRadius:10,
        marginTop:0.076*vw,
        borderWidth:1,
        borderColor:'#cccccc',
        paddingTop:0.023*vw,
        paddingBottom:0.025*vw,
        paddingLeft:0.056*vw,
        paddingRight:0.056*vw,
        shadowOffset:{h:10,w:10},
        shadowRadius:3,
        shadowColor:'red',
        shadowOpacity:0.8,
    },
    newBrands:{
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#666',
        paddingTop:0.04*vw,
        paddingBottom:0.04*vw,
        width:0.9*vw,
        marginLeft:0.05*vw,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    newBrandsImg:{
        width:0.305*vw,
        height:0.202*vw,
        borderRadius:3
    },
    newBrandsOrigin:{
        marginTop:0.034*vw,
        color:'#888',
        fontSize:0.03*vw
    },
    commentCount:{
        marginTop:0.034*vw,
        color:'#888',
        fontSize:0.03*vw,
        marginLeft:0.025*vw
    },
    ctoImg:{
        width:0.053*vw,
        height:0.053*vw,
        borderRadius:5,
        zIndex:99,
        marginTop:0.07*vw,
        marginLeft:0.04*vw
    },
    addIcon:{
        color:'#ffffff',
        marginTop:0.02*vw,
        right:0.04*vw,
        marginLeft:0.85*vw
    },
    brand_1:{
        fontSize:0.04*vw,
        marginTop:0.03*vw,
        marginLeft:0.02*vw,
    },
    brand_2:{
        marginTop:0.02*vw,
        flexDirection:'row',
        paddingBottom:0.01*vw,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#cccccc'
    },
    topNews:{
        backgroundColor:'#ffffff',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        paddingBottom:0.05*vw
    },
    newsInfo:{
        flexDirection:'row',
    },
    newsImg:{
        marginTop:5,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    oneImgTitile:{
        width:0.6*vw
    },
    weaInfo:{
        flexDirection:'row',
        paddingLeft:0.1*vw,
    },
    weaTemp:{
        fontSize:0.05*vw,
        fontWeight:'bold',
        marginLeft:0.1*vw,
        color:'#ffffff'
    },
    weaBox:{
        marginTop:0.15*vw
    },
    weaInfoText:{
        color:'#ffffff',
        marginLeft:5
    }

})
