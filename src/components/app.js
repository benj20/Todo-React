import React from 'react'
import CreateTodo from './create-todo'
import TodosList from './todos-list'

const todos = [
	{
		task: 'make React tutorial',
		isCompleted: false
	},
	{
		task: 'eat dinner',
		isCompleted: true
	}
]

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: todos
		}
	}

	render() {
		return (
			<div>
				<h1>React Todos App</h1>
				<CreateTodo todos={this.state.todos}
										createTask={this.createTask.bind(this)} />
				<TodosList todos={this.state.todos}
									 toggleTask={this.toggleTask.bind(this)}
									 saveTask={this.saveTask.bind(this)}
									 deleteTask={this.deleteTask.bind(this)} />
			</div>
		)
	}

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		})
		this.setState({
			todos: this.state.todos
		})
	}

	toggleTask(task) {
		var foundTodo = this.state.todos.filter(todo => todo.task == task)
		foundTodo[0].isCompleted = !foundTodo[0].isCompleted
		this.setState({
			todos: this.state.todos
		})
	}

	saveTask(oldTask, newTask) {
		var foundTodo = this.state.todos.filter(todo => todo.task == oldTask)
		foundTodo[0].task = newTask
		this.setState({
			todos: this.state.todos
		})
	}

	deleteTask(task) {
		const foundTodo = this.state.todos.filter(todo => todo.task == task)
		this.state.todos.splice(this.state.todos.indexOf(foundTodo[0]), 1)
		this.setState({
			todos: this.state.todos
		})
	}
}




