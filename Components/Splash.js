import React , {Component} from 'react'
import {StyleSheet, Image, View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen'

export default class Screen extends Component{
    constructor(props){
        super(props)
        this.state={timer: 0}
       
}
render(){
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../assests/splash.jpg')} style={{width: '100%', height: '100%',} }>
      
        <Image 
       style={styles.logo}
       source={require('../assests/logo.png')}/>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pokemons')}>
        <Image 
       style={styles.pokeball}
       source={require('../assests/PokeballContinue.gif')}/>
        </TouchableOpacity>
       <Text style={styles.text}>Tap the Pokeball to Continue</Text>
      
       </ImageBackground>
     
       
        </View>
    )
}

}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

},

logo:{
    
    justifyContent:'center',
    alignItems:'center',
    height:200,
    width:400,
    marginTop:'50%',
    shadowColor:'#333',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 5, 
        
         
},
text:{
    color:'#bdbdbd',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    fontWeight:'500',
    marginTop:'12%',
    fontSize:22
},
pokeball:{
    
    justifyContent:'center',
    alignItems:'center',
    height:60,
    width:60,
    marginLeft:'44%',
    shadowColor:'#333',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 5, 
        
         
},


})