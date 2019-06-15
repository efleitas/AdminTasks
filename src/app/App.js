import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

	constructor(){
		super();
		this.state = {
			title: "",
			description: ""
		}
		this.addTask = this.addTask.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	addTask(e) {
		e.preventDefault();
		fetch('/api/tasks', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			}
		})
			.then(this.setState({ title: "", description: ""}))
			.catch(err => console.error(err));
	}

	handleChange(e) {
		const {name, value} =e.target;
		this.setState({
			[name] : value
		})
	}

	render() {
		return(
			<div>
				{/*Navigation*/}
				<nav className="light-blue darken-4">
					<div className="container">
						<a className="brand-logo" href="/">
							Administracion de tareas
						</a>
					</div>
				</nav>

				<div className="container">
					<div className="row">
						<div className="col s5">
							<div className="card">
								<div className="card-content">
									<form onSubmit={this.addTask}>
										<div className="row">
											<div className="input-field col s12">
												<input name="title" type="text" placeholder="Titulo tarea" onChange={this.handleChange} value={this.state.title}/>
											</div>
										</div>

										<div className="row">
											<div className="input-field col s12">
												<textarea name="description" placeholder="Descripcion tarea" className="materialize-textarea" onChange={this.handleChange} value={this.state.description}/>
											</div>
										</div>

										<button type="submit" className="btn light-blue darken-4">
											Enviar
										</button>
									</form>
								</div>
							</div>
						</div>

						<div className="col s7">
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default App;