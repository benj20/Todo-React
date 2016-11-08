import React from 'react'

export default class TodosListItems extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isEditing: false
		}
	}

	renderTaskSection() {
		const { task, isCompleted } = this.props
		const taskStyle = {
			color: isCompleted ? 'green' : 'red',
			cursor: 'pointer'
		}

		if (this.state.isEditing) {
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" defaultValue={task} ref="editInput" />
					</form>
				</td>
			)
		} else {
			return (
				<td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
					{task}
				</td>
			)
		}
	}

	renderActionsSection() {
		const { task, isCompleted } = this.props
		if (this.state.isEditing) {
			return (
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			)
		} else {
			return (
				<td>
					<button onClick={this.onEditClick.bind(this)}>Edit</button>
					<button onClick={this.props.deleteTask.bind(this, task)}>Delete</button>
				</td>
			)
		}
	}

	render() {
		return (
			<tr>
				{this.renderTaskSection()}
				{this.renderActionsSection()}
			</tr>
		)
	}

	onEditClick() {
		this.setState({
			isEditing: true
		})
	}

	onCancelClick() {
		this.setState({
			isEditing: false
		})
	}

	onSaveClick(e) {
		e.preventDefault()
		this.props.saveTask(this.props.task, this.refs.editInput.value)
		this.setState({
			isEditing: false
		})
	}
}




