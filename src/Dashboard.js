import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Dashboard.css';
import Fade from 'react-reveal/Fade';

function Dashboard() {
  return (
      <div className="dashboardbg">
        <Fade top>
          <div className="center-div transparent p-5 rounded shadow">
                <h1>Dashboard</h1>
                <Form>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="secondary" type="submit">
                    Login
                  </Button>
                </Form>
          </div>
        </Fade>
      </div>
  );
}

export default Dashboard;
