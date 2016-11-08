import React from 'react'
import TodosListHeader from './todos-list-header'
import TodosListItems from './todos-list-items'

export default class TodosList extends React.Component {
	renderItems() {
		return this.props.todos.map((todo, index) => (
			<TodosListItems toggleTask={this.props.toggleTask.bind(this)} 
											saveTask={this.props.saveTask.bind(this)} 
											deleteTask={this.props.deleteTask.bind(this)} 
											key={index} {...todo} />)
		)
	}

	render() {
		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		)
	}
}