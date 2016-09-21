import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 128,
      green: 128,
      blue: 128,
      color: "rgb(128,128,128)",
      joeIntro: [
        "Hi there! I'm Joe, and I'm a UX Designer Robot.",
        'What would you like to see?'
      ]
    };
    this.update = this.update.bind(this);
  }
  update(e){
    let redVal = ReactDOM.findDOMNode(this.refs.red.refs.slide).value;
    let greenVal = ReactDOM.findDOMNode(this.refs.green.refs.slide).value;
    let blueVal = ReactDOM.findDOMNode(this.refs.blue.refs.slide).value;

    this.setState({
      red: redVal,
      green: greenVal,
      blue: blueVal,
      color: this.updateColor()
    })
  }
  render(){
    return (
      <div className="box">
        <div className="content-area">
          <div className="chat-area">
            <JoeMessage txt="Hi there! I'm Joe, and I'm a UX Designer Robot."/>
            {/* <p className="joe message">{'Hi there! I\u0027m Joe, and I\u0027m a UX Designer.'}</p>*/}
            <p className="joe message">{'What would you like to see?'}</p>
            <p className="user message posted">{'Oh, hi Joe.'}</p>
            <p className="user message candidate">{'Tell me a bit about yourself.'}</p>
            {/* <p className="user message candidate">{'Show me some work you\u0027ve done.'}</p>*/}
            <p className="user message candidate">{'I\u0027m looking for your resume.'}</p>
            <p className="user message candidate">{'What\u0027s a UX Designer?'}</p>
            <TodoList />
            <div className="chat-spacer"></div>
          </div>
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
  updateColor() {
    return "rgb("+this.state.red+","+this.state.green+","+this.state.blue+")";
  }
}

class JoeMessage extends React.Component {
  render() {
    return (
      <p className="joe message">
        {this.props.txt}
      </p>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.color} {this.props.txt}</h1>
        <input ref="slide" type="range" min="0" max="255" onChange={this.props.update} />
       </div>
    );
  }
}


var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

ReactDOM.render(
  <App txt=''/>,
   document.getElementById('app')
 );

export default App
