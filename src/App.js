import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoBox from './components/TodoBox';

function App() {
  return (
    <div className="App mt-5 mx-5">
      <Provider store={store}>
        <TodoBox/>
      </Provider>
    </div>
  );
}

export default App;
