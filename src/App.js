import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
var data = require('json!./content.json');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      step: 1,
      joeIntro: [
        "Hi there! I'm Joe, and I'm a UX Designer Robot.",
        'What would you like to see?'
      ]
    };
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({
      step: 1
    })
  }

  render(){
    return (
      <div className="box">
        <div className="content-area">
          <Snippet content={data["Start"]}/>
        </div>
        <nav>
          <div className="page-title">
            <h1>Joe Sniezek</h1>
            <h1>◉</h1>
            <h2>User Experience Design</h2>
          </div>
          <ul className="primary-nav">
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

function Snippet(props) {
  return (
    <div className="chat-area">
      {props.content.txt.length > 0 &&
        <p className="user message posted">
          {props.content.txt}
        </p>
      }
      {props.content.response.split("\n").map(function(sentence){
        return <p className="joe message" key={sentence.toString()}>{sentence}</p>;
      })}
      {props.content.say.length > 0 &&
        <p className="user message posted">
          {props.content.say}
        </p>
      }
      {props.content.choices.map(function(candidate){
        return <p className="user message candidate" key={candidate.toString()}>{data[candidate].txt}</p>;
      })}
    </div>
  )
}

//experimental
class JoeMessage extends React.Component {
  render() {
    return (
      <p className="joe message">
        {this.props.txt}
      </p>
    );
  }
}

var UserMessage = React.createClass({
  getInitialState: function() {
    return {
      txt: 'Oh, hi Joe.', classes: 'user message candidate'
    };
  },
  handleSelect: function() {
    this.setState({classes: "user message"});
  },
  render: function() {
    return (
      <p className={this.state.classes} onClick={this.handleSelect}>
      {this.state.txt}
      </p>
    );
  }
});

ReactDOM.render(
  <App txt=''/>,
   document.getElementById('app')
 );

export default App
