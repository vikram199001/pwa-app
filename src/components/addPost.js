import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const PostModal = ({ show, handleClose, submitPost }) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        submitPost(data);
        reset();
    }

    return <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add Post</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name a post"
            autoFocus
            {...register('title', { required: true })}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
        >
           <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Add a description to your post."
            {...register('description', { required: true })}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleSubmit(onSubmit)}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
}


export default PostModal;