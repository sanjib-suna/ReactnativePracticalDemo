import * as React from 'react';

import { View, Text,Image,StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import COLORS from '../constants/Colors';
import CustomHeader from '../constants/CustomHeader';
import { itemWidth, sliderWidth } from '../constants/SliderStyle';

 
export default class CarouselScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      listEntries:[]  
    };
   
  }

 

  componentDidMount(){
    this.setState({
      listEntries: [ 
      {key: 'Terminator',type:'Action & Adventure',icon:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ'},
      {key: 'Moana',type:'Cartoon',icon:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCStGlbSfgnn58-5uq4yHTAgEG4VK5moQUtt6XETV9CG9DtZYm'},
       {key: 'The Outpost',type:'Action & Adventure',icon:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ8-NaEIwGrvmmAjtzeoglb1Z1J5_0gqA5SuocAVVnJvGzIH0g'},
       {key: 'Terminator',type:'Action & Adventure',icon:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ'},
       {key: 'Moana',type:'Cartoon',icon:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCStGlbSfgnn58-5uq4yHTAgEG4VK5moQUtt6XETV9CG9DtZYm'},
        {key: 'The Outpost',type:'Action & Adventure',icon:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ8-NaEIwGrvmmAjtzeoglb1Z1J5_0gqA5SuocAVVnJvGzIH0g'}  
      ]})
  }

  _renderItem({item,index}){
    return (
      <View style={{
          borderRadius: 5,
          margin:5
         }}>
             <Image source={{ uri: item.icon}} style = {{height:300,width:255,borderRadius:10,padding:5}} />
        <Text style={{fontSize: 18,textAlign:"center",fontWeight:"bold"}}>{item.key}</Text>
        <Text style={{fontSize: 14,textAlign:"center"}}>{item.type}</Text>
      </View>

    )
}


    render() {
        return (
          <View style={styles.container}>

<CustomHeader  title={'Top Films'} />

                 <Carousel
                  layout={"default"}
                  style="slides"
                  margin={20}
                  ref={ref => this.carousel = ref}
                  data={this.state.listEntries}
                  sliderWidth={sliderWidth}
                  itemWidth={260}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
              </View>
               );
             }
          }


const styles = StyleSheet.create({
   
  container: {
    flex:1,
    
  },
});


