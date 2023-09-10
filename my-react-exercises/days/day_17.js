// Day 17: React Router

/*
What is React Router?

The literal meaning of route is a path or a way to get somewhere. React Router is by itself a React
component which allows you to navigate between React components. We will use React Router version 4 for this
tutorial. React Router is a third party library created to solve the problem of routing in React app.


Lets start by implementing React Router in our app.
*/

/* Browser Router is a component that we wrap around our app. 
      It is the parent of all the other components 
      and we can access the browser history in all the child components. 
      It is the component that makes routing possible in our app. */
      import React, { Component } from "react";
      import ReactDOM from "react-dom";
      import { BrowserRouter as Router, Route } from "react-router-dom";
      
      // Home component
      const Home = (props) => <h1>Welcome Home</h1>;
      // About component
      const About = (props) => <h1>About Us</h1>;
      // Contact component
      const Contact = (props) => <h1>Contact us</h1>;
      // Challenge component
      const Challenges = (props) => (
        <div>
          <h1>30 Days Of React Challenge</h1>
        </div>
      );
      
      class App extends Component {
        render() {
          return (
            <Router>
              <div className="App">
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/challenges" component={Challenges} />
              </div>
            </Router>
          );
        }
      }
      
      const rootElement = document.getElementById("root");
      ReactDOM.render(<App />, rootElement);
      