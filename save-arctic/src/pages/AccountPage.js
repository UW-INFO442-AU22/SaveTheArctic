import Bar from '../components/progressbar';
import '../css/AccountPage.css';
import {
    Card,
    Container,
} from 'react-bootstrap';
import Graph from "../images/bear.png";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue} from "firebase/database";


function AccountPage() {
    let point = 0;
    const db = getDatabase();
    let userId = getAuth().currentUser.uid;
    const userInfo = ref(db, "users/" + userId);
    onValue(userInfo, (snapshot) => {
        point = snapshot.val().points;
    })
    let donation = 0;
    if (point >= 100) {
        donation = point / 10;
        donation = Math.floor(donation);
        donation = donation - donation % 10;
    }
    return (
        <div className='accountPage'>
            <h2 className="center">Points</h2>
            <div className='barContainer'>
                <Bar />
            </div>

            <div className="totalDonation">
                <span className='bear'><img src={ Graph } width="300" height="300" alt="Cartoon of a polar bear"/>Total Donation: ${donation}</span>
            </div>

            <div className="donationOrg">
                <div className="pt-5">
                    <h2>Environmental Organizations</h2>
                    <p>click on the pictures to donate</p>
                </div>
                <div className="pb-5">
                    <div className="d-grid gap-3">
                        <div className='d-flex justify-content-evenly p-5'>
                            <Card style={{ width: '20rem' }}>
                                <a className='p-5' href='https://www.nature.org/en-us/'><Card.Img variant="top" src='https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/2246/logo-tnc.svg?v=1612203209000' />
                                </a>
                                <Container>
                                    <h5>The Nature Conservancy</h5>
                                    <p>
                                        Join as a Conservation Champion today to help save endangered lands, waters and wild species and receive our picnic blanket thank-you gift seen on TV.
                                    </p>
                                </Container>
                            </Card>
                            <Card style={{ width: '20rem' }}>
                                <a className='p-5' href='https://www.nycwatershed.org'><Card.Img variant="top" src='https://www.nycwatershed.org/wp-content/uploads/2015/06/waclogowebsite2.jpg' />
                                </a>
                                <Card.Body>
                                    <Card.Title>Watershed Agricultural Concil</Card.Title>
                                    <Card.Text>
                                        To promote the economic viability of agriculture and forestry, the protection of water quality, and the conservation of working landscapes through strong local leadership and sustainable public-private partnerships.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }}>
                                <a className='p-5' href='https://www.catf.us'><Card.Img variant="top" src='https://cdn.catf.us/wp-content/uploads/2021/09/21091839/catf-logo%402x.png' />
                                </a>
                                <Container>
                                    <h5>CLEAN AIR TASK FORCE</h5>
                                    <p>
                                        We push the change in technologies and policies needed to get to a zero-emissions, high-energy planet at an affordable cost.</p>
                                </Container>
                            </Card>
                        </div>
                    </div>
                    <div className='d-flex justify-content-evenly p-5'>
                        <Card style={{ width: '20rem' }}>
                            <a className='p-5' href='https://rainforestfoundation.org'><Card.Img variant="top" src='https://rainforestfoundation.org/wp-content/uploads/RFUS-logo.png' />
                            </a>
                            <Container>
                                <h5>Rainforest Foundation US</h5>
                                <p>
                                    Rainforest Foundation US is dedicated to protecting nature and human rights. We recognize the urgency of climate change and the need for equitable, sustainable development.
                                </p>
                            </Container>
                        </Card>
                        <Card style={{ width: '20rem' }}>
                            <a className='p-5' href='https://www.climateemergencyfund.org'><Card.Img variant="top" src='https://images.squarespace-cdn.com/content/v1/60930b2084ef393517963bbe/1623167942413-WFF37KW0HO9H1DI85K12/CEF_logo_BlueTransparent+%283%29.png?format=1500w' />
                            </a>
                            <Container>
                                <h5>Climate Emergency Fund</h5>
                                <p>
                                    Climate Emergency Fund named BAG MIR SA one of the most high impact & cost effective organizations you can donate to.
                                </p>
                            </Container>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AccountPage;