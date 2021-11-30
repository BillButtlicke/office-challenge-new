import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastMessage } from "react-toastr";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Body() {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const api = axios.create({
    baseURL: "https://crudcrud.com/api/155abc05f1554f0eaf167fb67442096c",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  const getRecord = async () => {
    api
      .get("/")
      .then(({ data }) => {
        console.log("Greetings from :::: ", data);
        return JSON.stringify(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createRecord = async () => {
    let value = await api
      .post("/", { title: "Test", id: 4, author: "Test" })
      .then(() => {
        handleClose();
      })
      .catch(function (error) {
        console.log("Oops!");
      });
    console.log(value);
  };

  useEffect(() => {
    getRecord().then((randomData) => {
      setRandomUserDataJSON(randomData);
    });
  });
  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Click Here to add!</Button>
      <Table striped size="lg">
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
            <td>David</td>
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
      <Modal isOpen={openModal} onHide={() => setOpenModal(false)}>
        <ModalHeader>Add New Record</ModalHeader>
        <ModalBody>
          <Form onSubmit={createRecord}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                name="fName"
                placeholder="Enter your first name!"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lName"
                placeholder="Enter your last name!"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter your username!"
                type="text"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={createRecord}>
            Submit
          </Button>{" "}
          <Button onClick={onLoginFormSubmit}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Body;
