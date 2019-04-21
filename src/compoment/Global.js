import {AsyncStorage} from 'react-native';
var Dimensions = require('Dimensions');
global.vw = Dimensions.get('window').width;
global.vh=Dimensions.get('window').height;

global.themeColor='#4fb0fd'

const ajaxPost=(url,data,success)=>{
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((responseJson) =>success(responseJson))
    .catch((error) => {
        console.error(error);
    });

}
const ajaxPostImg=(url,data,success)=>{
    let formdata=new FormData();
    formdata.append('file',data)
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata,
    })
    .then((response) => response.json())
    .then((responseJson) =>success(responseJson))
    .catch((error) => {
        console.error(error);
    });
}
global.content={
    flex:1
}


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
    imgUploader:'http://106.13.0.234:8080/linewell/api/wqjbWechatController.do?imgloads'
}
global.ajaxPost=ajaxPost
global.ajaxPostImg=ajaxPostImg

