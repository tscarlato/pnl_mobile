import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Switch,
} from 'react-native';

export default class Locations extends Component {

    constructor(props) {
        super(props);
        this.showDoors = this.showDoors.bind(this);
        this.toggleShowDoors = this.toggleShowDoors.bind(this);
        this.state = {
            showDoors: false
          };
       }

    toggleShowDoors() {
        this.setState({showDoors:!this.state.showDoors})
      }

    showDoors() {
        //returns a list of all songs on an album if caret is toggled
        if (!this.state.showDoors){
          return
        }
        // The <Text> will come from an API Call for doors. 
        //list will be a flatlist.
        let list =
          <View style={styles.doorbox}>
                
                <Text style={styles.doortext}> This is a door</Text>
                <Switch />


          </View>;
          return list
      }



      displayLocations(){
          let locationsList = 
          <View  style={styles.locationbox}> 
          <TouchableOpacity onPress={this.toggleShowDoors}>
               <View style={styles.locationpress}>
               {this.showOpenCloseIcon()}
                   <Text style={styles.locationtext}> This is a location</Text> 
                   
               </View>
           </TouchableOpacity>
               {this.showDoors()}                    

           </View>;
                return locationsList;
      }


      showOpenCloseIcon() {
        if(this.state.showDoors)
        {
          return <Icon name="caret-down" size={25} color='#808080' />
        }
        else
        {
          return <Icon name="caret-right" size={25} color='#808080' />
        }
      }


    render() {
        return (
            <View style={styles.mainpage}>
                <View style={styles.header}>
                <Text style={styles.headertext}> Locations </Text >
               </View>

            {this.displayLocations()} 

            </View>
        );
    }
};

const styles = StyleSheet.create({

    mainpage:{
        padding: 5,
    },

    header:{ 
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,     
    },

    headertext:{ 
        fontSize: 28,
        fontWeight: 'bold',
        color: '#bb33bb',
    },

    locationbox:{ 
        paddingTop: 10,
        paddingBottom: 10,  
    },

    locationtext:{ 
        fontSize: 21,
        fontWeight: 'bold',
        color: '#7733bb',
    },

    locationpress:{ 
        flexDirection: 'row',
    },

    doorbox:{ 
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    doortext:{ 
        fontSize: 18,
        fontWeight: 'bold',
        color: '#773355',
    },

});