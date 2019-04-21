
import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Image,StatusBar,WebView} from 'react-native';
import imgSource from './imgSource'
var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class article extends React.Component{
    static navigationOptions={
        title:'文章详情',
        headerStyle:{
            paddingTop:20
        }
    }
    constructor(props) {
        super(props);
        this.state = { 
            isZan:1 
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
    
    render(){
        return(
            
            <View style={{flex:1}}>
                <WebView
                    source={{uri: this.props.navigation.state.params.url}}                        
                    style={{marginTop: 20}}
                />
                {/* <View style={styles.comment}>
                    <View style={{width:0.92*vw}}>
                        <Text style={{color:'#888'}} >最新评论</Text>
                    </View>
                    <View style={styles.commentBrand}>
                        <View style={styles.brand}>
                            <Image source={data.comment.userImg} style={styles.userImg}></Image>
                            <Text style={styles.userName}>{data.comment.userName}</Text>
                            <Text style={styles.zan}>{data.comment.likeCount}</Text>
                            <TouchableOpacity onPress={()=>this.getZan()}>
                                <Image source={imgSource['imgZan'+this.state.isZan]} style={styles.zanImg} ></Image>
                            </TouchableOpacity>
                            <Image source={require('../img/zan_06.png')} style={styles.goWrite}></Image>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.commentTime}>{data.comment.commentTime}</Text>
                            <Text style={styles.location}>{data.comment.location}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:0.037*vw,lineHeight:0.058*vw}}>{data.comment.commentContent}</Text>
                        </View>
                    </View>
                    <View style={styles.commentBrand}>
                        <View style={styles.brand}>
                            <Image source={data.comment.userImg} style={styles.userImg}></Image>
                            <Text style={styles.userName}>{data.comment.userName}</Text>
                            <Text style={styles.zan}>{data.comment.likeCount}</Text>
                            <TouchableOpacity onPress={()=>this.getZan()}>
                                <Image source={imgSource['imgZan'+this.state.isZan]} style={styles.zanImg} ></Image>
                            </TouchableOpacity>
                            <Image source={require('../img/zan_06.png')} style={styles.goWrite}></Image>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.commentTime}>{data.comment.commentTime}</Text>
                            <Text style={styles.location}>{data.comment.location}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:0.037*vw,lineHeight:0.058*vw}}>{data.comment.commentContent}</Text>
                        </View>
                    </View>
                </View>
                 */}
            </View>
        )
    }
    getZan(){
        this.setState({
            isZan:2
        });
        alert('点赞成功')
    }
}




const data={
    comment:{
        userImg:require('./../img/timg.jpg'),
        userName:'这小子很低调',
        likeCount:'999',
        commentTime:'13小时前',
        location:'河北省唐山市',
        commentContent:'给中央点赞 ！给反腐点赞！反腐[赞][赞][赞][赞][赞]这些年，力度可赞，成效可赞，但是腐败太深太广，坚决不能放松，持续反腐，深度反腐，向基层深入，提升党在人民群众中的微信，让人民群众放心，我们的党才有凝聚力，才能立于不败之地。进一步加强反腐，持续深入反腐，我们才能胜利！'
    }
}

const styles=StyleSheet.create({
    news:{
        alignItems:'center'
    },
    newsTitle:{
        fontSize:0.05*vw,
        fontWeight:'bold',
        color:'#333',
        lineHeight:0.08*vw
    },
    newsTime:{
        flexDirection:'row',
        marginTop:0.05*vw,
        width:0.92*vw
    },
    newsContent:{
        color:'#333',
        fontSize:0.04*vw,
        lineHeight:0.072*vw
    },
    comment:{
        marginTop:0.1*vw,
        alignItems:'center'
    },
    commentBrand:{
        width:0.92*vw,
        marginTop:0.05*vw
    },
    brand:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userImg:{
        borderRadius:0.1*vw,
        width:0.1*vw,
        height:0.1*vw,
    },
    userName:{
        marginTop:0.02*vw,
        marginLeft:15,
        width:0.6*vw,
        fontSize:0.045*vw,
        color:'#425594'
    },
    zan:{
        marginTop:0.02*vw,
        marginRight:0.01*vw,
    },
    zanImg:{
        marginTop:0.02*vw,
        width:0.04*vw,
        height:0.04*vw,
        marginRight:0.03*vw
    },
    goWrite:{
        marginTop:0.02*vw,
        width:0.04*vw,
        height:0.04*vw
    },
    commentTime:{
        marginLeft:0.142*vw,
        color:'#888',
        fontSize:0.03*vw
    },
    location:{
        marginLeft:0.052*vw,
        color:'#888',
        fontSize:0.03*vw
    }
})
