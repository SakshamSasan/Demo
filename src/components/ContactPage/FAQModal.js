import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/FAQModal.module.css';
function FAQModal(props){
    return (
        <>
            <Modal show={props.show} onHide={props.onHide} centered>
                <Modal.Header closeButton className='border-0 my-2'>
                <Modal.Title>FAQ - Answer</Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-1 d-flex justify-content-center align-items-center'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Modal.Body>
                <Modal.Footer className='border-0 my-2 d-flex justify-content-center'>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

    </>
    )
}
export default FAQModal;