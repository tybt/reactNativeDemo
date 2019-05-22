import React from 'react';
import { StyleSheet,View,Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';       
export default class imageCrop extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
       

        };
    }
    componentDidMount(){
        ImagePicker.openCropper({
            path: this.props.navigation.getParam("uri"),
            width: 300,
            height: 400
        }).then(image => {
            console.log(image);
            let tempArry=[];
            tempArry.push(image.path);
            ajaxPostImg(Url.uploadImg,tempArry,function(res){
                console.log(res);
                if(res.code==1){
                    let postData={userid:9999999999999,user_photo:res.result[0]}
                    ajaxPost(Url.changeImg,postData,function(res){
                        console.log(res,'res')
                        Alert.alert("提示","头像保存成功")
                    })
                    
                }
                else{
                    Alert.alert("提示","头像保存失败")
                }
            })
        });
    }
   render(){
       return(
        <View>

        </View>
        )
   }
}
const styles=StyleSheet.create({
       

})
