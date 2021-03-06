import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import MainStack from "./components/navigators/MainStack";

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}