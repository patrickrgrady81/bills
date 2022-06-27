import { useState, useRef, useReducer } from 'react'; 
import { Button, Modal, Form, Row, Col, ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ACTIONS = {
  ADD_BILL: "addBill"
}

function billReducer(state, action) {
  switch (action.type) {
    case "addBill":
      return [...state, {name: action.payload.name, amount: action.payload.amount}];
    default:
      return state;
  }
}

function App() {
  const name = useRef("")
  const amount = useRef(0)
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bills, dispatch] = useReducer(billReducer, []);
  
  function handleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleNewBill(e) {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_BILL, payload: {name: name.current.value, amount: amount.current.value}});
    setIsModalOpen(false);
  }

  return (
    <>
      <Button onClick={() => handleModal()}>New Bill</Button>
      <ListGroup>
      {bills.map((bill)=>{
        return <ListGroup.Item key={uuidv4()}>{bill.name} - {bill.amount}</ListGroup.Item>
      })}</ListGroup>

      { isModalOpen &&
      <Modal.Dialog>
        <Modal.Header closeButton onHide={() => handleModal()}>
          <Modal.Title>Add Bill</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Control required placeholder="Bill Name" ref={name} />
              </Col>
              <Col>
                <Form.Control placeholder="Amount" ref={amount}/>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModal()}>Close</Button>
          <Button variant="primary" type="submit" onClick={handleNewBill}>Add Bill</Button>
        </Modal.Footer>
      </Modal.Dialog>}
    </>
  );
}

export default App;
