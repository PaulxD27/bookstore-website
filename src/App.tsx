import { Provider } from "react-redux";
import Navigation from "./routes/Navigation";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="dark">
        <Navigation />
      </div>
    </Provider>
  );
}

export default App;
