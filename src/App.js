import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    nombre: '',
    email: '',
    esAdmin: '',
    genero: '',
    color: '',
    comentarios: ''
  };

  valueToState = ({name, value, checked, type}) =>{
    this.setState(() => {
      return {[name]: type === "checkbox" ? checked : value}
      
    });
  };

  render(){
    return (
      <div className="container-fluid formulario">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form>
          <label htmlFor="nombre">Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            placeholder="Ingresa tu nombre"
            onChange={event => this.valueToState(event.target)}
          />
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Ejemplo@gmail.com"
            onChange={event => this.valueToState(event.target)}
          />
          <label htmlFor="esAdmin">¿Es administrador?
          <input 
            type="checkbox" 
            name="esAdmin" 
            onChange={event => this.valueToState(event.target)}
          />
          </label>
          <label>Genero</label>
          <label>Femenino
            <input
              type="radio"
              name="genero"
              value="F"
              onChange={event => this.valueToState(event.target)}
            />
          </label>
          <label>Masculino
            <input
              type="radio"
              name="genero"
              value="M"
              onChange={event => this.valueToState(event.target)}
            />
          </label>
          <label>¿Cúal es tu color favorito?</label>
          <select
            name="color"
            onChange={event => this.valueToState(event.target)}>
              <option value="">- Selecciona uno -</option>
              <option value="Rojo">Rojo</option>
              <option value="Azul">Azul</option>
              <option value="Verde">Verde</option>
          </select>
          <label>Comentarios</label>
          <textarea 
            name="comentarios"
            onChange={event => this.valueToState(event.target)}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default App;
