
import * as React from 'react';

import { View, Text,Image,StyleSheet ,TextInput,TouchableOpacity} from 'react-native'
import { NavigationActions, SafeAreaView, StackActions } from 'react-navigation';
import COLORS from '../constants/Colors';
import Toast from 'react-native-simple-toast';


export default class LoginScreen extends React.Component {



    constructor() {
        super();
    
        this.state = { 
          email: '',
          password:'',
        
        }
      }

      componentDidMount(){
        this.setState.email ='';
      }
    
    


    render() {


    
        return (



          <SafeAreaView style={styles.container}>

            <Text style={styles.boldTextstyle}>Hi again</Text>
            <Text style={styles.smallTextstyle}>We just need your email and password.</Text>
     

         <View style={styles.SectionStyle}>
         
          <TextInput
            style={styles.inputStyle}
            ref={input => { this.email = input }}
            underlineColorAndroid = "transparent"
            placeholder = "Email address"
            placeholderTextColor = {COLORS.blueGrey}
            autoCapitalize = "none"
            keyboardType ='email-address'
            returnKeyType = { "next" }
            onSubmitEditing={() => { this.password.focus(); }}
            onChangeText={(text) => this.setState({email:text})}
          />
        </View>



        <View style={styles.SectionStyle}>
         
          <TextInput
            style={styles.inputStyle}
            ref={(input) => { this.password = input; }}
            underlineColorAndroid = "transparent"
            placeholder = "Password"
            placeholderTextColor = {COLORS.blueGrey}
            autoCapitalize = "none"
            secureTextEntry={this.state.hidePassword}
            onChangeText={(text) => this.setState({password:text})}
           
          />

     

        </View>

    
        <TouchableOpacity
                 style = {styles.submitButton}
                 onPress={this.validationLogin}
                 
                >
                 <Text style = {styles.submitButtonText}> LOGIN </Text>
              </TouchableOpacity>    
    
     
    
              </SafeAreaView>
               );
             }

             validationLogin=()=>{

              if (this.state.email == '') {
                Toast.show("Please Enter Email !");
              }
             else if(!this.validateEmail(this.state.email)){
              Toast.show("Please Enter Valid Email");
            }
            else if(this.state.password == ''){
              Toast.show("Please Enter Password");
            }
            else if(this.state.password.length < 6){
              Toast.show("Password Length must be greater than 6");
            }
            else{
             const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'BottomNavigator' })],
              });
              this.props.navigation.dispatch(resetAction);
            }
          }

          validateEmail = email => {
            var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            };
                     
     }


const styles = StyleSheet.create({
   
  container: {
    flex:1,
      backgroundColor:COLORS.white  
  },

  inputStyle:{
    height:50,
     width: "95%", 
     borderColor: COLORS.lightGrey, 
     borderWidth: 2, 
     borderRadius: 12,
     padding:15, 
      marginBottom: 20,
       fontSize: 14
  },


boldTextstyle:{
  color: COLORS.dark,
  fontSize:26,
  fontFamily:'../assets/fonts/segoeuili.ttf',
  fontWeight:'bold',
  fontFamily:'segoeuisb',
  marginStart:30,
  marginTop:90,

},

smallTextstyle:{
  color: COLORS.dark,
  fontSize:14,
  fontWeight:'bold',
  marginStart:30,
  marginEnd:20,
  marginTop:10,
  marginBottom:40
},
  
  SectionStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart:20,
    marginEnd:20
  },


  
  submitButton: {
    backgroundColor: COLORS.dark,
    margin:20,
    height: 50,
    width:"75%",
    borderRadius:8,
    alignSelf:"center",
    justifyContent: 'center',
    alignItems: 'center',
     
 },
 submitButtonText:{
    color: COLORS.white,
    fontSize:15,
  
    fontWeight:'bold',
  
 },
 

});