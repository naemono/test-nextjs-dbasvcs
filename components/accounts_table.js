import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table';

function AccountsTable({ accountsData }) {
	const divStyle = {
		paddingTop: '8rem',
	};
	return (
		<Container fluid style={divStyle}>
			<Row className="align-items-center">
				<Col>
					<Table striped bordered hover variant="dark">
						<thead>
						<tr>
							<th>Account ID</th>
							<th>Account Name</th>
							<th>Account Number</th>
							<th>Account Type</th>
						</tr>
						</thead>
						<tbody>
						{accountsData && accountsData.map(( account, index ) => {
							return (
								<tr key={index}>
								<td>{account.id}</td>
								<td>{account.name}</td>
								<td>{account.number}</td>
								<td>{account.type}</td>
								</tr>
							);
						})}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
}

export default AccountsTable;