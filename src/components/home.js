import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { getAllPosts, addaPost } from '../redux/actions';
import PostModal from './addPost';


const Home = () => {
    const dispatch = useDispatch();
    const postsData = useSelector((state) => state.userReducer.posts);
    const [ posts, setPosts ] = useState([]);
    const [ showModal, setShowModal ] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch])

    useEffect(() => {
        setPosts([...postsData]);
    }, [postsData]);

    const AddPostData = (post) => {
        let user = JSON.parse(localStorage.getItem("user"));
        dispatch(addaPost({...post, user: user.id}));
        setShowModal(!showModal)
        // navigate(0);
    }

    return <div>
       <div className='mt-5 p-5 home-page'>
        <Container>
        <div className='d-flex justify-content-end'>
            <Button onClick={() => setShowModal(!showModal)}>Add Post</Button>
        </div>
        {
           posts.length ? posts.map((post, key) => <Card className='my-3' key={key}>
           <Card.Body>
             <Row>
                <Col sm={2}>
                    <div>
                        <img
                            src={post.userDetails && post.userDetails.profileImage}
                            className="rounded-circle"
                            style={{ width: "100px", height: "100px"}}
                            alt="Avatar"
                        />
                        <Card.Subtitle className='text-muted mt-1'>@{post.userDetails && post.userDetails.username}</Card.Subtitle>
                    </div>
                </Col>
                <Col sm={10}>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">by {post.userDetails && `${post.userDetails.firstName} ${post.userDetails.lastName}`}</Card.Subtitle>
                    <Card.Text>
                        {post.description}
                    </Card.Text>
                </Col>
                
             </Row>
           </Card.Body>
         </Card>)
        : ""}
        </Container>
        <PostModal show={showModal} handleClose={setShowModal} submitPost={AddPostData}/>
       </div>
    </div>
}

export default Home;