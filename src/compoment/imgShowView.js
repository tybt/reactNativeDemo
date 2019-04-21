import React from 'react';
import { StyleSheet } from 'react-native';
import PhotoBrowser from 'react-native-photo-browser';       

var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class imgShowView extends React.Component{
    static navigationOptions={
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
    

        };
    }
    render(){
        return(
                <PhotoBrowser
                onBack={()=>this.props.navigation.goBack()}
                mediaList={this.props.navigation.state.params.imgData}
                >
                </PhotoBrowser>

        )
    }
}
const styles=StyleSheet.create({
       

})
