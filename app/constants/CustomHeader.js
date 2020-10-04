
import Icon from 'react-native-vector-icons/Ionicons';  
import React from "react";
import { View,StyleSheet,Image,TouchableOpacity, Text } from "react-native";
import { color } from 'react-native-reanimated';
import COLORS from './Colors';

const CustomHeader = ({ title }) => (
    <View style={[styles.container]}>
     
               <Text style={styles.textStyle}>{title}</Text>
 

    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      flexDirection:"row",
      backgroundColor:COLORS.dark,
      height: 60,
      paddingTop: 20,
      justifyContent:"center"
    },
    textStyle:{
        textAlign:"center",
        color:'white',
        position:"absolute",
        alignSelf:"center",
        fontWeight:"bold",
        fontSize: 18
    }
  });

  export default CustomHeader;

  
