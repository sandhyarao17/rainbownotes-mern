import { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = ({ history }) => {

useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    
    if(userInfo) {

        history.push("/mynotes");

    }
},[history]);





return <div className='main'>
            <Container> 
                <Row>
                    <div classname='intro-text'>
                        <div>
                            <h1 className='title'>Welcome to Rainbow Notes</h1>
                            
                            <p className='subtitle'>
                          One Safe Place for all your Notes.
                            </p>
                            <div className='buttonContainer'>
                            <Link to='/login'>
                                <Button size='lg' className="landingbutton">
                                    Login
                                </Button>
                            </Link>                       
                               <Link to='/register'>
                                <Button size='lg' className="landingbutton" variant="outline-primary">
                                    Signup
                                </Button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>;
    
};

export default LandingPage;
