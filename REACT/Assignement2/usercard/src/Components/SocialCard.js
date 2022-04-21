import './css/SocialCard.css';
import Location from './Location';
import Phone from './Phone';
import Email from './Email';
import Uname from './Uname';
import Age from './Age';
import Nationality from './Nationality';
import Registered from './Registered';

const SocialCard = ({ userData }) => {
    // console.log(userData);
    return (
        <div className="card">
            <Uname uname={userData.login.username} type="User"/>
            <hr/>
            <div className="card__title">Name- {userData.name.first} {userData.name.last}</div>
            <Email email={userData.email} type="Email"/>
            <Registered registered={userData.registered.age} type="User"/>
            <Age age={userData.dob.age} type="Age"/>
            <div className="card__body">
                <Location location={userData.location}/>
                <Nationality nationality={userData.nat} type="Nationality"/>
                <Phone number={userData.phone} type="Home"/>
                <Phone number={userData.cell} type="Cell"/>
                <div className="card__image"><img src={userData.picture.medium}/></div>
            </div>

        </div>
    )
};

export default SocialCard;