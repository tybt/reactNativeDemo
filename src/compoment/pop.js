//自己写的组件
import React from 'react';
import { StyleSheet,Animated,View ,Text,Modal} from 'react-native';
       

export default class pop extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
          header: null,
        };
    };
   constructor(props) {
        super(props);
        this.state = {
            popScale:new Animated.Value(0),
            showModal:false
        };
    }
    render(){
       return(
            <View style={{flex:1}}>
                <Modal visible={this.state.showModal} transparent={true}>
                    <Animated.View style={{transform:[{scale:this.state.popScale}]}}>
                        <Text>这是一条提示</Text>
                    </Animated.View>
                </Modal>
                <Text onPress={()=>this.openPop()} ref="test">提示</Text>
            </View>

        )
    }
    openPop(){
        if(this.state.showModal==false){
            this.setState({showModal:true})
            Animated.timing(                  
                this.state.popScale,            
                {
                    toValue: 1,                  
                    duration: 300,              
                }
            ).start();   
        }
        else{
            this.setState({showModal:false})
            Animated.timing(                  
                this.state.popScale,            
                {
                    toValue: 0,                  
                    duration: 300,              
                }
            ).start();   
        }

        console.log(this.refs)
    }

}
const styles=StyleSheet.create({
       

})
