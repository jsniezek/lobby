import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: ' '};
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <JoeWidget txt={this.state.txt} update={this.update} />
        <JoeWidget txt={this.state.txt} update={this.update} />
        <JoeWidget txt={this.state.txt} update={this.update} />
        <JoeWidget txt={this.state.txt} update={this.update} />
      </div>
    )
  }
}

const JoeWidget = (props) => {
  return (
    <div>
      <h1>Hi there {props.txt}</h1>
        <input type="text"
          onChange={props.update} />
    </div>
  );
}

ReactDOM.render(
  <App txt=''/>,
   document.getElementById('app')
 );

export default App
