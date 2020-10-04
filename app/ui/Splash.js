import * as React from 'react';

import { View, Text,Image,StyleSheet } from 'react-native'

 
export default class SplashScreen extends React.Component {

   componentDidMount(){
   

    setTimeout(() => {
      
        this.props.navigation.replace('Login')  
        
    }, 3000);
}


    render() {
        return (
          <View style={styles.container}>
         <Image source= {require('../assets/img/icon_splash/imageSplash.png')} style={styles.image}  resizeMode="stretch"/>
              </View>
               );
             }
          }


const styles = StyleSheet.create({
   
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#111023'
  },

  image:{
    alignSelf:"center"
  } 
});


