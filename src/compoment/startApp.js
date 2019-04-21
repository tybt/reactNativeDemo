import React from 'react';
import { StyleSheet ,View,StatusBar,Image,Text} from 'react-native';
       

const Dimensions = require('Dimensions');
const vw = Dimensions.get('window').width;
const vh=Dimensions.get('window').height;
export default class startApp extends React.Component{
    static navigationOptions=({navigation})=>{
        return{
            header:null
        }
      }
      
   constructor(props) {
       super(props);
       this.state = {
            times:1

        };
    }
    componentDidMount(){
        let _this=this;
        let interval=setInterval(function(){
            if(_this.state.times>0){
                let count=_this.state.times-1;
                _this.setState({times:count})
            }
            else{
                clearInterval(interval);
                _this.props.navigation.navigate('home')
            }
    
        },1000)
    }
   render(){
       return(
            <View style={{flex:1}}>
                <StatusBar hidden={true}></StatusBar>
                <Image source={require('../img/startImg.jpeg')} style={styles.img}></Image>
                <Text style={styles.clock}>{this.state.times}</Text>
            </View>

            )
   }
}
const styles=StyleSheet.create({
    img:{
        width:vw,
        height:vh,
        position:'absolute',
        top:0
    },
    clock:{
        position:'absolute',
        zIndex:20,
        fontSize:0.05*vw,
    }

})
