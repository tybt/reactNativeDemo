//自己写的组件
import React from 'react';
import { StyleSheet,Animated,View ,Text,Modal,TouchableWithoutFeedback} from 'react-native';
       

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
            pop_x:0,
            pop_y:0
        };
        console.log(this.props,'this.props.hideModals')
    }
    render(){
       return(
            <View style={{flex:1,position:'absolute'}}>
                <Modal  transparent={true}>
                    <Animated.View style={[styles.popBox,{transform:[{scale:this.state.popScale}],marginTop:this.state.pop_y}]}>
                        <Text style={[styles.popWord,{marginLeft:this.props.pop_x,marginTop:this.props.pop_y}]}>{this.props.words}</Text>
                    </Animated.View>
                    <TouchableWithoutFeedback onPress={()=>this.hide()}>
                        <View style={styles.marsk}></View>
                    </TouchableWithoutFeedback>
                    
                </Modal>
               
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
        let _this=this;
        this.refs.test.measure((ox, oy, width, height, px, py) => {
            console.log(ox, oy, width, height, px, py)
            _this.setState({
                pop_x:px,
                pop_y:py
            })
        })
    }

    hide(){
        console.log('ssssssss')
        
        this.props.hideModals()
    }

}
const styles=StyleSheet.create({
    marsk:{
        flex:1,
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.5)',
        height:vh,
        width:vw,
        zIndex:98
    },
    test:{
        height:0.04*vw,
        width:0.2*vw,
        marginTop:50
    },
    popWord:{
        backgroundColor:'#ffffff',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10
    },
    popBox:{
        flexDirection:'row',
        
    }
})
