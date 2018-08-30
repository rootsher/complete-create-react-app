import React from 'react';
import { connect } from 'react-redux';
import './home.css';
import {
  Breadcrumb,
  Button,
  ButtonToolbar,
  Pagination,
  Panel,
  ProgressBar,
  Table
} from 'react-bootstrap';
import addBucks from '../../../core/actions/addBucks.action';
import addUserBucks from '../../../core/actions/addUserBucks.action';

const Home = ({ bucks, userBucks, dispatch }) => (
  <section className="route__home">
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    <h1>home</h1>
    <ProgressBar now={60} label={'60%'} />
    <ButtonToolbar>
      {/* Standard button */}
      <Button>Default</Button>

      {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
      <Button bsStyle="primary" onClick={() => dispatch(addBucks())}>
        Primary
        {bucks}
      </Button>

      {/* Indicates a successful or positive action */}
      <Button bsStyle="success" onClick={() => dispatch(addUserBucks())}>
        Success
        {userBucks}
      </Button>

      {/* Contextual button for informational alert messages */}
      <Button bsStyle="info">Info</Button>

      {/* Indicates caution should be taken with this action */}
      <Button bsStyle="warning">Warning</Button>

      {/* Indicates a dangerous or potentially negative action */}
      <Button bsStyle="danger">Danger</Button>

      {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
      <Button bsStyle="link">Link</Button>
    </ButtonToolbar>

    <Panel bsStyle="success">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <p>sdfsdfsdfsdf</p>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Panel.Body>
    </Panel>
  </section>
);

export default connect(state => ({
  bucks: state.user.wallet.bucks,
  userBucks: state.app.user.wallet.bucks
}))(Home);
