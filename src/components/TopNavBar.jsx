/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Navbar, Nav, Form, FormControl,
} from 'react-bootstrap';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { disconnect } from '../userSlice.js';

function TopNavBar() {
  const userType = useSelector((state) => state.user.type);
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect className="my-navbar" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand type="button" className="logo" onClick={() => navigate('/')}>mento.</Navbar.Brand>
      {userType === null ? (
        <Nav.Link className="navbar-item" onClick={() => navigate('/login')}>
          Login
        </Nav.Link>
      ) : (
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="navbar-item" disabled>
            {`Signed in as: ${userName}`}
          </Nav.Link>
          <Nav.Link
            className="navbar-item"
            onClick={() => {
              dispatch(disconnect());
              navigate('/login');
            }}
          >
            Logout
          </Nav.Link>
        </Navbar.Collapse>
      )}
      {userType === 'barber' && (
        <Nav.Link className="navbar-item" onClick={() => navigate('/personal_page')}>
          My Page
        </Nav.Link>
      )}

      {/* <Navbar.Collapse className="justify-content-end">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button>Search</Button>
        </Form>
      </Navbar.Collapse> */}
    </Navbar>
  );
}

export default TopNavBar;
