import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../ui/Login";
import SplashScreen from "../ui/Splash";
import ListScreen from "../ui/ListView";
import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import COLORS from "../constants/Colors";
import { Image, View } from "react-native";
import CarouselScreen from "../ui/CarouselView";


const AppNavigator = createStackNavigator(  
    {  
        Splash: {
            screen: SplashScreen,
                  navigationOptions: {
                    headerShown:false,
                  }
        },  

        Login: {
          screen: LoginScreen,
                navigationOptions: {
                  headerShown:false,
                }
      },
    },
      
    {  
        initialRouteName: "Splash" ,
        navigationOptions:{
          headerShown:false,
        } 
    }  
  ); 


  const BottomNavigator = createMaterialBottomTabNavigator(
    {
   
      Carousel: {
          screen: CarouselScreen,
          navigationOptions:{ 
  
            tabBarLabel:() => {return null},
            tabBarIcon: ({ focused }) => (  
              <View>  
                  <Image
          //  style={{ width: 25, height: 25,alignSelf:"center",marginTop:5}}
            source= {focused ? require('../assets/img/icon_corousel_select/iconCarouselSelected.png') :  require('../assets/img/icon_corousel_unselect/iconCarouselDeSelected.png')}/>
              </View>), 
            activeColor: '#f0edf6',
            inactiveColor: '#3e2465',     
            tabBarLabel:'Home',
            barStyle: { backgroundColor: 'transparent' },  
            shifting: false,
            labeled: false,          
        }  
      }, 
  
  
      List: {
        screen: ListScreen,
        navigationOptions:{  
          tabBarLabel:() => {return null},
          tabBarIcon: ({ focused }) => (  
            <View>  
                <Image
        //  style={{ width: 25, height: 25,alignSelf:"center",marginTop:5}}
          source= {focused ? require('../assets/img/icon_list_selected/iconListSelected.png') :  require('../assets/img/icon_list_unselect/iconListDeSelected.png')}/>
            </View>), 
          activeColor: '#f0edf6',
          inactiveColor: '#3e2465',  
          tabBarLabel:'Scan',
          activeColor: '#f0edf6',
          inactiveColor: '#3e2465',  
          barStyle: { backgroundColor:'transparent' },  
          shifting: false,
          labeled: false,
      }  
    }, 
 
  },
  
  {  
      initialRouteName: "Carousel" ,
      navigationOptions:{
        headerShown:false,
      } 
  },
  
  ); 


  const ThirdNavigator = createStackNavigator(  
    { 
        AppNavigator,
       BottomNavigator
    },  
   {navigationOptions:{
    headerShown:false,
   }}
  ); 

  const AppContainer = createAppContainer(ThirdNavigator);  
  export default AppContainer