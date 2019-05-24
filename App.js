import React, { Component } from "react";
import configureStore from "./configStore";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NewsListContainer from "./src/containers/NewsListContainer";
import NewsDetails from "./src/screens/NewsDetails";
const mainStack = createStackNavigator({
  Home: {
    screen: NewsListContainer
  },
  Details: {
    screen: NewsDetails
  }
});
const AppContainer = createAppContainer(mainStack);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore()
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <AppContainer />
      </Provider>
    );
  }
}
