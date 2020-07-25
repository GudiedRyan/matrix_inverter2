import React from 'react';
import './App.css';
import ThreeByThree from "./Matrix";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      a: "",
      b: "",
      c: "",
      d: "",
      det: "",
      e:"",
      f:"",
      g:"",
      h:"",
      allowInvert: false,
      showDet: false
    }
  }
  render() {
    return(
      <div className="body">
        <h4>Matrix Inverter</h4>
        <div className="vector">
        <table className="matrix">
              <tr>
                <td><input onChange={this.handleChange} name="a" placeholder="a" value={this.state.a}></input></td>
                <td><input onChange={this.handleChange} name="b" placeholder="b" value={this.state.b}></input></td>
              </tr>
              <tr>
                <td><input onChange={this.handleChange} name="c" placeholder="c" value={this.state.c}></input></td>
                <td><input onChange={this.handleChange} name="d" placeholder="d" value={this.state.d}></input></td>
              </tr>
            </table>
            </div>
            <br />
          <button onClick={this.invert}>Invert</button>
          <button onClick={this.reset}>Reset</button>
          <hr />
          <div>
            {this.state.showDet? <p>det = {this.state.det}</p> : <p></p>}
            <br />
            {this.state.allowInvert? 
            <div className="vector">
              <table className="matrix">
                <tr>
                  <td>{this.state.h}</td>
                  <td>{this.state.f}</td>
                </tr>
                <tr>
                  <td>{this.state.g}</td>
                  <td>{this.state.e}</td>
                </tr>
              </table>
            </div> : <p>If determinant is equal to 0, the matrix is not invertible.</p>}
          </div>
          <hr />
              <ThreeByThree />
      </div>
    )
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  invert = () => {
    this.setState(state => ({
      det: state.a * state.d - state.b * state.c,
      showDet: true
    }));
    if (this.state.det === 0) {
      this.setState({
        allowInvert: false
      })
    } else {
      this.setState(state => ({
        allowInvert: true,
        e: state.a/state.det,
        f: state.b/state.det*-1,
        g: state.c/state.det*-1,
        h: state.d/state.det,
      }))
    }
  }
  reset = () => {
    this.setState(state => ({
      a:"",
      b:"",
      c:"",
      d:"",
      det:"",
      showDet:"",
      allowInvert: false
    }))
  }
}

export default App;
