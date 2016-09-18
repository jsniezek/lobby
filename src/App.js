import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 128,
      green: 128,
      blue: 128,
      color: "rgb(128,128,128)"
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
            <p className="joe message">{'Hi there! I\u0027m Joe, and I\u0027m a UX Designer.'}</p>
            <p className="joe message">{'What would you like to see?'}</p>
            <p className="user message posted">{'Oh, hi Joe.'}</p>
            <p className="user message candidate">{'Tell me a bit about yourself.'}</p>
            {/* <p className="user message candidate">{'Show me some work you\u0027ve done.'}</p>*/}
            <p className="user message candidate">{'I\u0027m looking for your resume.'}</p>
            <p className="user message candidate">{'What\u0027s a UX Designer?'}</p>
            <p className="joe message">{'This is another message'}</p>
            <p className="joe message">{'This is another message'}</p>
            <p className="joe message">{'This is another message'}</p>
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

ReactDOM.render(
  <App txt=''/>,
   document.getElementById('app')
 );

export default App
