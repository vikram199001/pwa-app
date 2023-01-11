import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Col, Row, Modal, Spinner, Card} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { authenticate } from '../redux/actions';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.userReducer.userData);
    const schema = yup.object().shape({
            email: yup
            .string()
            .email("Please enter a valid email")
                .required("Email is required"),
            password: yup
                .string()
                .required("Passowrd is required")
    });

    const { register, handleSubmit } = useForm(schema);
    const [loading, setLoadingState] = useState(false);
    const [error, setError] = useState("");


    const onSubmit = async(data) => {

    const { email, password } = data;
      setLoadingState(true);
      try {
        dispatch(authenticate({email, password}))
        } catch (error) {
        console.log(error)
        }
        setLoadingState(false);
  }
  useEffect(() => {
    if(Object.keys(userData).length) {
        if(userData.error) setError(userData.error);
        else navigate('/');
    }
    // eslint-disable-next-line
  }, [userData]);

    return <div>
                <section className="vh-100 gradient-custom">
                    {loading ? <Modal show={true} className="loading-modal text-center">
                                <Spinner animation="border" variant="primary" />
                            </Modal> 
                    : ""}
                    <Container className="py-5 h-100">
                        <Form onSubmit={handleSubmit(onSubmit)}>   
                            <Row className="d-flex justify-content-center align-items-center h-100">
                                <Col md={8} lg={6} xl={5}>
                                    <Card className="bg-dark text-white" style={{ borderRadius: "1rem"}}>
                                        <Card.Body className="p-5 text-center">
                                            <div className="mb-md-5 mt-md-4 pb-5">

                                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                                <p className="text-white-50 mb-5">Please enter your email and password!</p>
                                                <div className="form-outline form-white mb-4">
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        required
                                                        placeholder='Email Address'
                                                        autoComplete="off"
                                                        {...register('email', { required: true })}
                                                    />
                                                </div>

                                                <div className="form-outline form-white mb-4">
                                                    <Form.Control
                                                        required
                                                        name="password"
                                                        type="password"
                                                        placeholder='password'
                                                        {...register('password', { required: true })}
                                                    />
                                                </div>
                                                { error ? <Form.Control.Feedback className='d-block' type="invalid">
                                                             {error}
                                                </Form.Control.Feedback> : ""}

                                                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                                <Button className="px-5" type="submit">Login</Button>

                                            </div>
                                            <div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </section>
    </div>
}


export default Login
