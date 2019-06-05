"use strict"
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Popover, PopoverController } from 'react-native-modal-popover';   

export default class popover extends React.Component{
    static navigationOptions = ({ navigation }) => {
      return {
        header: null,
      };
    };
    constructor(props) {
      super(props);
      this.state = {
       
        isVisible: true,
        buttonRect: {x:"", y:"", width:"", height:""}
      };
    }
    render(){
      return(
       
      <View style={styles.app}>
        <PopoverController>
          {({ openPopover, closePopover, popoverVisible, setPopoverAnchor, popoverAnchorRect }) => (
            <React.Fragment>
              <Button title="Press me!" ref={setPopoverAnchor} onPress={openPopover} />
              <Popover 
                contentStyle={styles.content}
                arrowStyle={styles.arrow}
                backgroundStyle={styles.background}
                visible={popoverVisible}
                onClose={closePopover}
                fromRect={popoverAnchorRect}
                supportedOrientations={['portrait', 'landscape']}
                duration={200}
              >
                <Text onPress={()=>this.pressPopOver()}>Hello from inside popover!</Text>
              </Popover>
            </React.Fragment>
          )}
        </PopoverController>
      </View>
            )
   }
   pressPopOver(){
     console.log('wwwwwww')
   }
   getInitialState() {
    return {
      isVisible: false,
      buttonRect: {},
    };
  }

  showPopover() {
    this.refs.button.measure((ox, oy, width, height, px, py) => {
      this.setState({
        isVisible: true,
        buttonRect: {x: px, y: py, width: width, height: height}
      });
    });
  }

  closePopover() {
    this.setState({isVisible: false});
  }
}
const styles=StyleSheet.create({

})
