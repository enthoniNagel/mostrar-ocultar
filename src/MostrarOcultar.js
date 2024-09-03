import React, { Component } from 'react';

class MostrarOcultar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visivel: false
    };
    this.alternarVisibilidade = this.alternarVisibilidade.bind(this);
  }

  alternarVisibilidade() {
    this.setState(prevState => ({
      visivel: !prevState.visivel
    }));
  }

  render() {
    return (
      <div>
        {this.state.visivel && <p>Aaaaa yeah yeah, glu glu, sergio mallandro cara! </p>}
        <button onClick={this.alternarVisibilidade}>
          {this.state.visivel ? 'Esconder Texto' : 'Mostrar Texto'}
        </button>
      </div>
    );
  }
}

export default MostrarOcultar;
