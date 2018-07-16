import * as React from "react";
import { Link, Route } from "react-router-dom";

const PageOne = () => <h1>This is page one.</h1>;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <Link to="/page/1">Page 1</Link>
          <div>
            <Route path="/page/1" component={PageOne} />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
