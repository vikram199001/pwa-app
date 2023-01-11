import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Profile = () => {
    const userData = useSelector((state) => { 
        return state.userReducer.userData});
        const [ profile, setProfile] = useState(userData)

  useEffect(() => {
    if(!Object.keys(userData).length){
        setProfile(JSON.parse(localStorage.getItem("user")))
    } else setProfile(userData);
  }, [userData])

    return <div>
        <section className="h-100 gradient-custom-2">
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col lg={9} xl={7}>
                        <Card>
                            <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#000", height:"200px"}}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px"}}>
                                    <img src={profile.profileImage}
                                        alt="Generic placeholder" className="img-fluid img-thumbnail mt-4 mb-2"
                                    style={{width: "150px", zIndex: "1",  height: "150px", objectFit: 'fill' }}/>
                                    {/* <Button className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                                    style={{zIndex: "1"}}>
                                        Edit profile
                                    </Button> */}
                                </div>
                                <div className="ms-3" style={{marginTop: "130px"}}>
                                    <h5>{profile.firstName} { profile.lastName}</h5>
                                    <p>@{profile.username}</p>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{backgroundColor: "#f8f9fa"}}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <p className="mb-1 h5">{profile.photos}</p>
                                        <p className="small text-muted mb-0">Photos</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-1 h5">{profile.follower}</p>
                                        <p className="small text-muted mb-0">Followers</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 h5">{profile.following}</p>
                                        <p className="small text-muted mb-0">Following</p>
                                    </div>
                                </div>
                            </div>
                            <Card.Body className="p-4 text-black">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4" style={{backgroundColor: "#f8f9fa"}}>
                                        <p className="font-italic mb-1">{profile.bio}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Recent photos</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                </div>
                                <Row className="g-2">
                                    {profile.images ? profile.images.map((img, i) => <Col sm={6} className="mb-2">
                                        <img src={img}
                                        alt={i} className="w-100 rounded-3" />
                                    </Col>) : ""}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
}

export default Profile;