import React from 'react';

class ThreeByThree extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            a11: "",
            a12: "",
            a13: "",
            a21: "",
            a22: "",
            a23: "",
            a31: "",
            a32: "",
            a33: "",
            b11: "",
            b12: "",
            b13: "",
            b21: "",
            b22: "",
            b23: "",
            b31: "",
            b32: "",
            b33: "",
            det: "",
            showDet: false
        }
    }
    render(){
        return(
            <div>
                <h5>3x3 Matrix Inverter</h5>
                <div className="vector">
                <table className="matrix">
                  <tr>
                    <td><input onChange={this.handleChange} name="a11" placeholder="a11" value={this.state.a11}></input></td>
                    <td><input onChange={this.handleChange} name="a12" placeholder="a12" value={this.state.a12}></input></td>
                    <td><input onChange={this.handleChange} name="a13" placeholder="a13" value={this.state.a13}></input></td>
                  </tr>
                  <tr>
                    <td><input onChange={this.handleChange} name="a21" placeholder="a21" value={this.state.a21}></input></td>
                    <td><input onChange={this.handleChange} name="a22" placeholder="a22" value={this.state.a22}></input></td>
                    <td><input onChange={this.handleChange} name="a23" placeholder="a23" value={this.state.a23}></input></td>
                  </tr>
                  <tr>
                    <td><input onChange={this.handleChange} name="a31" placeholder="a31" value={this.state.a31}></input></td>
                    <td><input onChange={this.handleChange} name="a32" placeholder="a32" value={this.state.a32}></input></td>
                    <td><input onChange={this.handleChange} name="a33" placeholder="a33" value={this.state.a33}></input></td>
                  </tr>
                </table>
                </div>
                <br />
                <button onClick={this.calculateDet}>Get determinant</button><button onClick={this.reset}>Reset</button>
                <div>
                  <br />
                  {this.state.showDet? <p>det = {this.state.det}</p> : <p></p>}
                </div>
            </div>
        )
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    calculateDet = () => {
        this.setState(state => ({
          det: state.a11*state.a22*state.a33 - state.a11*state.a23*state.a32 - 
          state.a12*state.a21*state.a33 + state.a12*state.a23*state.a31 + 
          state.a13*state.a21*state.a32 - state.a13*state.a22*state.a31,
          showDet: true
        }))
    }
    reset = () => {
      this.setState(state => ({
            a11: "",
            a12: "",
            a13: "",
            a21: "",
            a22: "",
            a23: "",
            a31: "",
            a32: "",
            a33: "",
            b11: "",
            b12: "",
            b13: "",
            b21: "",
            b22: "",
            b23: "",
            b31: "",
            b32: "",
            b33: "",
            det: "",
            showDet: false
      }))
    }
}

export default ThreeByThree;