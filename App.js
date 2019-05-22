import React, { Component } from "react";
import configureStore from "./configStore";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NewsList from "./src/screens/NewsList";
import NewsListContainer from "./src/containers/NewsListContainer";
const mainStack = createStackNavigator({
  Home: {
    screen: NewsListContainer
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
