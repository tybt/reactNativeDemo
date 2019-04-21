import React from 'react';
import { StyleSheet ,View ,TouchableOpacity,Image} from 'react-native';
var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class BottomBack extends React.Component{
    static navigationOptions={
        header:null,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
    }
    render(){
        return(
            <View style={styles.back}>
                <TouchableOpacity onPress={()=>this.goBack()}>
                    <Image source={require('../img/back_03.png')} style={styles.backImg}></Image>
                </TouchableOpacity>
            </View>

        )
    }
    goBack(){
        console.log(this.props)
        this.props.navigation.goBack()
    }
}
const styles=StyleSheet.create({

    back:{
        position:'absolute',
        bottom:0,
        height:0.12*vw,
        borderColor:'#cccccc',
        borderTopWidth:1,
        flex:1,
        justifyContent:'center',
        width:vw,
        backgroundColor:'#ffffff'
    },
    backImg:{
        marginLeft:0.06*vw,
        height:0.06*vw,
        width:0.04*vw
    }

})