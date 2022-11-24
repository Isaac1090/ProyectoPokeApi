import React, { Component } from "react";

export default class SearchPokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      img: "#",
      types:"",
      sprites:{other:{dream_world:{front_default:""}}}

    };
  }

  fetchApi = async () => {
    let resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.state.name}`
    );
    let data = await resp.json();

    //console.log(data.sprites.other["official-artwork"].front_default);
    this.setState({
      img: data.sprites.other.dream_world.front_default,
      types: data.types[0].type.name
    });
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleImage = (event) =>{
    this.setState({
        img: event.target.value,
        
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchApi();
  };

  render() {
    console.log(this.state.type);
    if (this.state.img === "#") {
      return (
        <div className="card text-center">
          <div className="card-header"></div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <label>Enter your Pokemon name</label>
              <br />
              <input
                type="text"
                placeholder="nombre"
                value={this.state.name}
                onChange={this.handleName}
              />
              <br />
              <br />
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </form>
            
          </div>
          
        </div>
      );
    } else{
      return (
        <div className="card text-center">
          <div className="card-header">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <label>Enter your Pokemon name</label>
              <br />
              <input
                type="text"
                placeholder="nombre"
                value={this.state.name}
                onChange={this.handleName}
              />
              <br />
              <br />
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </form>
            <img src={this.state.img} alt=""/>
            
          </div>
          <div className="card-footer text-muted">
          <p>
            Type: {this.state.types}
          </p>
          </div>
         </div> 
        </div>
      );
    }
    
  }
}
