import React from 'react';
import { StyleSheet ,View ,Text,TouchableOpacity,TextInput} from 'react-native';
import {SafeAreaView} from 'react-navigation';
var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class textInput extends React.Component{
    static navigationOptions={
        header:null,
    }
    constructor(props) {
        super(props);
        this.state = {
            text:''
        };
    }
    componentDidMount(){
        this.setState({text:this.props.navigation.state.params.value})

    }
    render(){
        return(
            <SafeAreaView>
                <View style={styles.topBrand}>
                    <Text onPress={()=>this.props.navigation.goBack()}>取消</Text>
                    <Text style={{fontSize:0.045*vw}}>{this.props.navigation.state.params.name}</Text>
                    <TouchableOpacity>
                        <View style={styles.btnSave}>
                            <Text style={{color:'#ffffff'}}>保存</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10,width:0.92*vw,marginLeft:0.04*vw}}>
                    <TextInput 
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}></TextInput>
                </View>

            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
    topBrand:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:0.12*vw,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#cccccc',
        paddingLeft:0.04*vw,
        paddingRight:0.04*vw

    },
    btnSave:{
        height:0.08*vw,
        width:0.15*vw,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:themeColor,
        borderRadius:5
    }
})