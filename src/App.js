import { useState } from 'react'; 
import { Button, Modal, Form } from 'react-bootstrap';

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function handleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleNewBill(e) {
    e.preventDefault();
    alert("Create New Bill");
    setIsModalOpen(false);
  }

  return (
    <>
      <Button onClick={() => handleModal()}>New Bill</Button>

      { isModalOpen &&
      (<Modal.Dialog>
        <Modal.Header closeButton onHide={() => handleModal()}>
          <Modal.Title>Add Bill</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModal()}>Close</Button>
          <Button variant="primary" type="submit" onClick={(e) => handleNewBill(e)}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>  )}
    </>
  );
}

export default App;
