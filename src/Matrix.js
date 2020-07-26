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
            c11: "",
            c12: "",
            c13: "",
            c21: "",
            c22: "",
            c23: "",
            c31: "",
            c32: "",
            c33: "",
            det: "",
            showDet: false,
            allowInvert: false
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
                <button onClick={this.calculateDet}>Invert</button><button onClick={this.reset}>Reset</button>
                <div>
                  <br />
                  {this.state.showDet? <p>det = {this.state.det}</p> : <p></p>}
                  <br />
                  {this.state.allowInvert? 
                    <div className="vector">
                      <table className="matrix">
                        <tr>
                          <td>{this.state.c11}</td>
                          <td>{this.state.c12}</td>
                          <td>{this.state.c13}</td>
                        </tr>
                        <tr>
                          <td>{this.state.c21}</td>
                          <td>{this.state.c22}</td>
                          <td>{this.state.c23}</td>
                        </tr>
                        <tr>
                          <td>{this.state.c31}</td>
                          <td>{this.state.c32}</td>
                          <td>{this.state.c33}</td>
                        </tr>
                      </table>
                    </div> : <p>If determinant is equal to 0, the matrix is not invertible.</p>}
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
        if (this.state.det === 0) {
          this.setState({
            allowInvert: false
          })
        } else {
          this.setState(state => ({
            b11: state.a22*state.a33 - state.a23*state.a32,
            b12: state.a21*state.a33 - state.a23*state.a31,
            b13: state.a21*state.a32 - state.a22*state.a31,
            b21: state.a12*state.a33 - state.a13*state.a32,
            b22: state.a11*state.a33 - state.a13*state.a31,
            b23: state.a11*state.a32 - state.a12*state.a31,
            b31: state.a12*state.a23 - state.a13*state.a22,
            b32: state.a11*state.a23 - state.a13*state.a21,
            b33: state.a11*state.a22 - state.a12*state.a21,
            allowInvert: true
          }))
          this.final()
        }
    }
    final = () => {
      this.setState(state => ({
        c11: state.b11/state.det,
        c12: state.b21/state.det*-1,
        c13: state.b31/state.det,
        c21: state.b12/state.det*-1,
        c22: state.b22/state.det,
        c23: state.b32/state.det*-1,
        c31: state.b13/state.det,
        c32: state.b23/state.det*-1,
        c33: state.b33/state.det
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
            c11: "",
            c12: "",
            c13: "",
            c21: "",
            c22: "",
            c23: "",
            c31: "",
            c32: "",
            c33: "",
            det: "",
            showDet: false,
            allowInvert: false
      }))
    }
}

export default ThreeByThree;