import React from 'react';
import ReactDOM from 'react-dom';

let Mixer = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0};
  }
  update() {
    this.setState({val: this.state.val + 1});
  }
  componentWillMount() {
    console.log('mounting');
  }
  componentDidMount() {
    console.log('mounting');
    // console.log(ReactDOM.findDOMNode(this));
    // this.inc = setInterval(this.update,500);
  }
  render() {
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }
}

const Button = (props) => <button
                            onClick={props.update}>
                            {props.txt} - {props.val}
                          </button>

const Label = (props) => <label
                            onMouseMove={props.update}>
                            {props.txt} - {props.val}
                          </label>

let ButtonMixed = Mixer(Button)
let LabelMixed = Mixer(Label)


class App extends React.Component {
  render() {
    return (
      <div>
          <ButtonMixed txt="Button" />
          <LabelMixed txt="Label" />
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App txt=''/>,
   document.getElementById('app')
 );
