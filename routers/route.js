import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Pokemons from '../Components/Pokemons';
import Details from '../Components/Details';
import Splash from '../Components/Splash';

const RootStack = createStackNavigator(
  {
    Splash,
    Pokemons,   
    Details
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);

const App = createAppContainer(RootStack);

export default App;

