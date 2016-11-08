import React from 'react'

export default class CreateTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		}
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="What do I need to do ?" ref="createInput"/>
				<button>Create</button>
				<p style={{color: 'red'}}>{this.state.error}</p>
			</form>
		)
	}

	handleCreate(e) {
		e.preventDefault()
		const task = this.refs.createInput.value
		this.state.error = this.validateInput(task)
		this.setState({
			error: this.state.error
		})
		if (this.state.error === null) {
			this.props.createTask(task)
			this.refs.createInput.value = ''
		}
	}

	validateInput(task) {
		if (!task) {
			return 'Please enter a task'
		} else if (this.props.todos.filter(todo => todo.task == task).length > 0) {
			return 'Task already exists'
		} else {
			return null
		}
	}
}