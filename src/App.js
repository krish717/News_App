// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import React, { Component } from 'react'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey = "9d6dd67ed19144e592107def8af892ca";
  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render() {
    return (
      <>
       <Router>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<News  setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={5} key="general"  country="in" category="general"/>} />
        <Route exact path="/health" element={<News  setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={5} key="health"  country="in" category="health"/>} />
        <Route exact path="/sports" element={<News  setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={5} key="sports"  country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News  setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={5} key="technology"  country="in" category="technology"/>} />
        <Route exact path="/politices" element={<News  setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={5} key="politices"  country="in" category="politices"/>} />
        <Route exact path="/science" element={<News  setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={5} key="science"  country="in" category="science"/>} />
        <Route exact path="/business" element={<News  setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={5} key="business"  country="in" category="business"/>} />
      </Routes>
        </Router>
      </>
    )
  }
}
