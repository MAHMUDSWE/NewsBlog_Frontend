
import React, { useState } from 'react'
import axios from "axios"

const EditProfile = (props) => {
    const { userid, name, email } = props;
    const [inputs, setInputs] = useState({ userid: userid, name: name, email: email });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios.put("/updateProfile", inputs)
            .then(res => res.data)
            .then(data => {
                alert(data.success);
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert(error.response.data.message);
                }
            });
    }

    return (
        <div style={{border:"1px solid gray", borderRadius:"5px", padding:"5px"}}>
            <form onSubmit={handleSubmit}>
                {/* <div className='createPost'>
                    <h3 className='createPostElement'>Edit Profile</h3>
                </div> */}
                <textarea className='editProfileName' name='name'
                    value={inputs.name || ""}
                    onChange={handleChange}
                    placeholder="Set Title" />

                <textarea className='editProfileEmail' name='email'
                    value={inputs.email || ""}
                    onChange={handleChange}
                    placeholder="What's on your mind?" /> <br />

                <button className='postButton'>Update Profile</button>
            </form>
        </div>
    )
}
export default EditProfile;
