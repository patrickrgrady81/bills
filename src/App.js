import { useState, useRef, useReducer } from 'react'; 
import { Button, Modal, Form, Row, Col, Card, Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import billReducer, { ACTIONS } from './reducers/billReducer';

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
      <Container className="d-flex justify-content-center gap-2">
        {bills.map((bill)=>{
          return (
            <Card className="d-flex w-25 justify-content-center align-items-center" key={uuidv4()}>
              <Card.Title className="border-bottom pt-1 text-primary">{bill.name}</Card.Title>
              <Card.Subtitle className="mt-2 text-muted pb-3">{bill.amount}</Card.Subtitle>
            </Card>
          )})}
        </Container>

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
