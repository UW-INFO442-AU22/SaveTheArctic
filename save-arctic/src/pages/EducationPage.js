import '../css/EducationPage.css';
import BootstrapButton from "../components/layout/BootstrapButton";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from "../img/quizCover.jpg";
import Graph from "../img/green.png";

import AnimalInfo from '../components/AnimalInfo';

function EducationPage() {
    return <div className="eduPage">
        <Stack gap={3}>
            <div className="info">
               <h3>Arctic Animal of the Day</h3> 
               <br></br>
               <section>
                <AnimalInfo /> 
               </section>
            </div>
            <div className="action">
                <Container>
                    <Row>
                    <Col><img src={ Graph } width="400" height="400"></img></Col>
                    <Col> <h4>Actions - What can we do as individuals?</h4>
                    <br></br>
                        <p>
                        There are many ways in our daily life that we can take practical actions on cutting our carbon footprint. 
                        Put on an extra layer and turn down the heating a degree or two. Turn off lights and appliances when you 
                        don't need them to save power. Replace light bulbs with LEDs or other low-energy lights. 
                        Make simple changes to how you use hot water, like buying a water-efficient shower head. 
                        Take public transportation or car pooling with others to recude the frequency of using private vehicles. 
                        </p></Col>
                    </Row>
                </Container>
            </div>
            <div className="impact">
                <h4>Impacts</h4>
                <p>To keep the temperature increase somewhat close to 2°C above pre-industrial times, the average footprint of everyone 
                    in the world needs to be approaching to 0 to 2 tonnes by 2050. Your contribution may be a small piece of the pie overall, 
                    but you alone can prevent many tonnes of GHGs from entering the atmosphere just by changing a few habits. 
                    By eliminating a quarter or half of your emissions, you could prevent 100’s of tonnes of GHGs from entering the atmosphere 
                    over the course of your life. Our impact over a lifetime really adds up. If people start to make gradual changes on 
                    reducing individual carbon emission, we can make a  huge difference on cutting the total amount of emission each year. 
                    This profound impact can effectively improve the global warming issue and protect the habitat of Arctic wildlife. </p>
                </div>
        </Stack>
        <br></br>
        <div className='quizSection' style={{ 
                width: '100vw',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                backgroundImage: `url(${Background})`}}>
            <h1 className="intro">Ready to save more Arctic wildlifes Forever?</h1>
            <br></br>
            <BootstrapButton className="btn"></BootstrapButton>
        </div>
    </div>;
}

export default EducationPage;