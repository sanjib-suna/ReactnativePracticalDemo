import * as React from 'react';

import { View, Text,Image,StyleSheet, SafeAreaView } from 'react-native'
import { FlatList, } from 'react-native-gesture-handler';
import COLORS from '../constants/Colors';
import CustomHeader from '../constants/CustomHeader';

 
export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listEntries:[]  
    };
   
  }

 
  
  componentDidMount(){
    this.setState({
      listEntries: [ 
      {key: 'Terminator',type:'Action & Adventure',icon:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ',artistName:'Rod Lurie',releaseDate:'25 sep 2019'},
      {key: 'Moana',type:'Cartoon',icon:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCStGlbSfgnn58-5uq4yHTAgEG4VK5moQUtt6XETV9CG9DtZYm',artistName:'Rock',releaseDate:'25 sep 2015'},
       {key: 'The Outpost',type:'Action & Adventure',icon:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ8-NaEIwGrvmmAjtzeoglb1Z1J5_0gqA5SuocAVVnJvGzIH0g',artistName:'Artist name: Tim Miller',releaseDate:'25 nov 2019'},
       {key: 'Terminator',type:'Action & Adventure',icon:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ',artistName:'Rod Lurie',releaseDate:'25 sep 2019'},
      {key: 'Moana',type:'Cartoon',icon:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCStGlbSfgnn58-5uq4yHTAgEG4VK5moQUtt6XETV9CG9DtZYm',artistName:'Rock',releaseDate:'25 sep 2015'},
       {key: 'The Outpost',type:'Action & Adventure',icon:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ8-NaEIwGrvmmAjtzeoglb1Z1J5_0gqA5SuocAVVnJvGzIH0g',artistName:'Artist name: Tim Miller',releaseDate:'25 nov 2019'},
      ]})
  }


    render() {
        return (
          <SafeAreaView style={styles.container}>
            <CustomHeader  title={'Top Films'} />
            <FlatList style={{marginBottom:40,marginTop:10}}  
               data= {this.state.listEntries} 
            
               renderItem={({item}) =>
                
               <View style={styles.subView}>
         
                  <Image source={{ uri: item.icon}} style = {styles.image} />

                  <View style={styles.textStyleView}>
                   <Text style={styles.textBold}  >{item.key}</Text> 
                   <Text style={styles.textSmall}  >{ 'Artist name: '+item.artistName}</Text> 
                   <Text style={styles.textSmall}  >{'Release Date: '+item.releaseDate}</Text> 
                   <View  
            style={{height: 1,width:"100%",backgroundColor: COLORS.blueGrey,marginTop:20}}  
                />  
                   </View>
                         </View>
                            }  
                        
               ItemSeparatorComponent={this.renderSeparator}  
               
           />
              </SafeAreaView>
               );
             }
          }


const styles = StyleSheet.create({
   
  container: {
    flex:1,
  },

  subView: {
    flexDirection:"row",
    padding:10,
  },
 textStyleView: {
    padding:10,
  },

  image:{
    height:90,
    width:90,
    marginStart:20,
    borderRadius:15
  } ,
  textBold:{
    fontSize:16,
    fontWeight:"bold",
    color:COLORS.dark
  },
  textSmall:{
    fontSize:12,
    color:COLORS.dark
  },
});


