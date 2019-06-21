import {Platform,StyleSheet} from 'react-native';
var Dimensions = require('Dimensions');
global.vw = Dimensions.get('window').width;
global.vh=Dimensions.get('window').height;


const ajaxPost=(url,data,success)=>{
    let tempData=''
    for(i in data){
        tempData=tempData+i+'='+data[i]+'&'    
    }
    console.log(tempData,'准备要上传的数据',url,'地址')
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:tempData//JSON.stringify(data),
    })
    // .then(res => res.text())
    // .then(text => console.log(text))
    .then((response) => response.json())
    .then((responseJson) =>success(responseJson))
    .catch((error) => {
        console.error(error);
    });

}
const ajaxPostImg=(url,data,success)=>{
    let formdata=new FormData();
    for(let i=0;i<data.length;i++){
        let file = {uri: data[i], type: 'application/octet-stream', name: 'image.jpg'};
        formdata.append('file',file)
    }
    console.log(formdata,'formdata',url,'要上传的地址')
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata,
    })
    //.then(res => res.text())
    //.then(text => console.log(text))
    .then((response) => response.json())
    .then((responseJson) =>success(responseJson))
    .catch((error) => {
        console.error(error);
    });
}

//global.host='http://172.20.10.3:8080'//手机主机地址
//global.host='http://192.168.0.107:8080'//宿舍无线主机地址
 global.host='http://10.8.30.89:8080'//图书馆wifi地址
//global.host='http://192.168.8.158:8080'//家里地址
global.Url={
    news_0:'http://v.juhe.cn/toutiao/index?type=0&key=5b17dafc6727b810d8d91b408c5ba232', //首页新闻
    news_1:'http://v.juhe.cn/toutiao/index?type=shehui&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    news_2:'http://v.juhe.cn/toutiao/index?type=guonei&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    news_3:'http://v.juhe.cn/toutiao/index?type=guoji&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    news_4:'http://v.juhe.cn/toutiao/index?type=yule&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    news_5:'http://v.juhe.cn/toutiao/index?type=tiyu&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    news_6:'http://v.juhe.cn/toutiao/index?type=junshi&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    news_7:'http://v.juhe.cn/toutiao/index?type=keji&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    news_8:'http://v.juhe.cn/toutiao/index?type=caijing&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    news_9:'http://v.juhe.cn/toutiao/index?type=shishang&key=5b17dafc6727b810d8d91b408c5ba232', //社会
    weather: 'http://apis.juhe.cn/simpleWeather/query?city=%E7%A6%8F%E5%B7%9E&key=67d6391830fd7db5604893ad3fd07f74',
    URLsendCode:'http://v.juhe.cn/sms/send?mobile=13205054527&tpl_id=140471&tpl_value=%23code%23%3D654654&key=318fee1e5eeeb355357f95d66f37b1b4', //获取验证码
    URLavailaboleCode:'http://106.13.0.234:8080/linewell/api/sendCodeMessage.do?availaboleCode',//验证码验证 
    imgUploader:'http://106.13.0.234:8080/linewell/api/wqjbWechatController.do?imgloads',
    writeMoment:host+'/writeMoment/words',//发表状态
    uploadImg:host+'/uploader/imgs',//上传图片
    getmoment:host+'/writeMoment/getmoment',//获取动态
    changeImg:host+'/user/changeImg',//修改用户头像
    getReply:host+'/writeMoment/getReply',//获取时刻的评论
    setFavor:host+'/writeMoment/setFavor',//点赞
    deleteFavor:host+'/writeMoment/deleteFavor',//取消赞
    writeReply:host+'/writeMoment/writeReply',//写回复
}

global.content={flex:1}

global.ajaxPost=ajaxPost //正常的post请求
global.ajaxPostImg=ajaxPostImg //图片上传
global.platfrom=Platform //全局定义平台
global.themeColor='#4fb0fd' //主题风格

//定义普通的边框
global.commonBorder={
    right:{
        borderRightWidth:1,
        borderColor:'#cccccc',
    },
    left:{
        borderLeftWidth:1,
        borderColor:'#cccccc',
    },
    top:{
        borderTopWidth:1,
        borderColor:'#cccccc',
    },
    bottom:{
        borderBottomWidth:1,
        borderColor:'#cccccc',
    }

}


