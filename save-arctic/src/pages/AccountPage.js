import Bar from '../components/progressbar';
import '../css/AccountPage.css';

function AccountPage() {
    return(
        <div>
            <h2 className="center">Points</h2>
            <div className='barContainer'>
                <Bar />
            </div>
        </div>
    ); 
}

export default AccountPage;