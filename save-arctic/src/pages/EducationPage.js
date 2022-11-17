import '../css/EducationPage.css';
import BootstrapButton from "../components/layout/BootstrapButton";
import Stack from 'react-bootstrap/Stack';
import Background from "../img/quizCover.jpg";


function EducationPage() {
    return <div className="eduPage">
        <Stack gap={3}>
            <div className="bg-light border">Arctic Animal of the Day</div>
            <div className="bg-light border">Actions - What can we do as individuals?
                    <p>
                    There are many ways in our daily life that we can take practical actions on cutting our carbon footprint. 
                    Put on an extra layer and turn down the heating a degree or two. Turn off lights and appliances when you 
                    don't need them to save power. Replace light bulbs with LEDs or other low-energy lights. 
                    Make simple changes to how you use hot water, like buying a water-efficient shower head. 
                    Take public transportation or car pooling with others to recude the frequency of using private vehicles. 
                    </p>
                </div>
            <div className="bg-light border">Impacts
                <p>To keep the temperature increase somewhat close to 2°C above pre-industrial times, the average footprint of everyone 
                    in the world needs to be approaching to 0 to 2 tonnes by 2050. Your contribution may be a small piece of the pie overall, 
                    but you alone can prevent many tonnes of GHGs from entering the atmosphere just by changing a few habits. 
                    By eliminating a quarter or half of your emissions, you could prevent 100’s of tonnes of GHGs from entering the atmosphere 
                    over the course of your life. Our impact over a lifetime really adds up. If people start to make gradual changes on 
                    reducing individual carbon emission, we can make a  huge difference on cutting the total amount of emission each year. 
                    This profound impact can effectively improve the global warming issue and protect the habitat of Arctic wildlife. </p>
                </div>
        </Stack>
        <div className='quizSection' style={{ 
                width: '100vw',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                backgroundImage: `url(${Background})`}}>
            <h1 className="intro">Ready to save more Arctic wildlifes Forever?</h1>
            <br></br>
            <BootstrapButton></BootstrapButton>
        </div>
       
       
    </div>;
}

export default EducationPage;