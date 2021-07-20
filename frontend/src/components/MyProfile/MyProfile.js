import react, { useState } from 'react';
import {useEffect} from 'react';
import './MyProfile.scss';
import MyProfileEditForm from './MyProfileEditForm'

function MyProfile({match}) {
    useEffect(() => {
        fetchProfile(); 
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const [profileDetails, setProfileDetails] = useState({});

    const fetchProfile = async() =>{
        const fetchProfile = await fetch(`http://localhost:9000/app/users/${match.params.userId}`);
        const profileDetails = await fetchProfile.json();
        console.log(profileDetails);
        setProfileDetails(profileDetails);
    }

    return (
        <section className="section-myProfile-container">
            <div className="section-myProfile-box">
                <div className="overlay">
                    <div className="section-myProfile-image">

                    </div>
                    <h1 className="section-myProfile-image-caption">My Profile</h1>
                </div>

                <div className="flex-box">
                    <div className="section-myProfile-editable">
                        <p className="para">{profileDetails.name}</p>
                        <p className="para">{profileDetails.email}</p>
                    </div>

                    <div className="section-myProfile-editableOptions">
                        <button className="btn-text-green" onClick={() => setIsOpen(!isOpen)}>Edit</button>
                    </div>
                </div>
                {isOpen && (
                    <div>
                        <MyProfileEditForm profileDetails={profileDetails} />
                    </div>
                )}


            </div>
        </section>
    )
}


export default MyProfile;