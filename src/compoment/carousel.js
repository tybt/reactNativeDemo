import React from 'react';
import {StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';  

var Dimensions = require('Dimensions');
var vw = Dimensions.get('window').width;
var vh=Dimensions.get('window').height;
export default class Carousels extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render(){
        return(
            <Carousel
            renderItem={()=>(
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>)}
            sliderWidth={0.8*vw}
            itemWidth={0.8*vw}
            />

        )
    }
}
const styles=StyleSheet.create({
       

})
