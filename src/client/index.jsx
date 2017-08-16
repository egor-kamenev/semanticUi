// Styles
import 'semantic-ui-css/semantic.css'
import 'styles/global'
// Fetch and promise polyfill
import 'promise-polyfill'
import 'whatwg-fetch'
// Application
import {render} from 'react-dom'
import {configureStore, configureRootComponent} from 'common/index.jsx'

import React from 'react'
import {Icon, Label, Menu, Table} from 'semantic-ui-react'

const TableExamplePagination = () => (
	<Table celled>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>Header</Table.HeaderCell>
				<Table.HeaderCell>Header</Table.HeaderCell>
				<Table.HeaderCell>Header</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			<Table.Row>
				<Table.Cell>
					<Label ribbon>First</Label>
				</Table.Cell>
				<Table.Cell>Cell</Table.Cell>
				<Table.Cell>Cell</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Cell</Table.Cell>
				<Table.Cell>Cell</Table.Cell>
				<Table.Cell>Cell</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>Cell</Table.Cell>
				<Table.Cell>Cell</Table.Cell>
				<Table.Cell>Cell</Table.Cell>
			</Table.Row>
		</Table.Body>

		<Table.Footer>
			<Table.Row>
				<Table.HeaderCell colSpan='3'>
					<Menu floated='right' pagination>
						<Menu.Item as='a' icon>
							<Icon name='left chevron'/>
						</Menu.Item>
						<Menu.Item as='a'>1</Menu.Item>
						<Menu.Item as='a'>2</Menu.Item>
						<Menu.Item as='a'>3</Menu.Item>
						<Menu.Item as='a'>4</Menu.Item>
						<Menu.Item as='a' icon>
							<Icon name='right chevron'/>
						</Menu.Item>
					</Menu>
				</Table.HeaderCell>
			</Table.Row>
		</Table.Footer>
	</Table>
)

render(
	<TableExamplePagination/>,
	document.getElementsByTagName('body')[0]
)
