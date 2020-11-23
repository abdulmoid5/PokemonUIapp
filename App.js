import React, {Component} from 'react';
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import RootStack from "./routers/route";


const middleware = [thunk];
let store = createStore(reducer, applyMiddleware(...middleware));






class App extends Component {
  render() {
    return (
      
        <Provider store={store}>
        <RootStack />
      </Provider>
      
    );
  }
}

export default App;
