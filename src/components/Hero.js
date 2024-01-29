// import React, { useState } from 'react';
// import './Hero.css';
// import Home from './Home';
// import {useNavigate} from 'react-router-dom'


// export default function Hero() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate=useNavigate();

//     async function handleSubmit(e) {
//         e.preventDefault(); // Prevents the default form submission behavior

//         try {
//             const body = { email, password };
//             const response = await fetch("http://localhost:5000/signup", { // Added 'http://' to the URL
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" }, // Fixed the header name
//                 body: JSON.stringify(body)
//             });
//             console.log(response);
//             alert("Account Created Sucessfully")
            
//             // navigate('/main')
//             //navigate('/main');
            
            
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     return (
//         <div className='signup'>
//             <div className='text'>
//                 <h1>Records At Your</h1>
//                 <h1>FingerTip</h1>
//             </div>
//             <form onSubmit={handleSubmit}> {/* Moved onSubmit to the form */}
//                 <h1>SignUp</h1>
//                 <div>
//                     <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
//                     <label>Username:</label>
//                 </div>
//                 <div>
//                     <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /> {/* Changed input type to 'password' */}
//                     <label>Password</label>
//                 </div>
//                 <p className='pass'>Forget Password?</p>
//                 <button type="submit">Submit</button> {/* Changed 'onSubmit' to 'type="submit"' */}
//             </form>
//         </div>
        

//     );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css'; // Import the external CSS file

export default function Hero() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const body = { email, password };
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                console.log(response);
                alert("Account Created Successfully");
                setEmail('')
                setPassword('')
                
                navigate('/');
            } else {
                console.log("Error creating account");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="signup">
            <div className="text">
                <h1>Records At Your</h1>
                <h1>FingerTip</h1>
                <br /><br />
                <p>Empowering Shopkeepers with Technology: Your Store's Potential at Your Fingertips</p>
                <img src="https://img.favpng.com/1/24/7/index-finger-portable-network-graphics-vector-graphics-gesture-png-favpng-LY5x3zx6VqhrykCZBawTE9Jvr.jpg" alt="" />
            </div>
            <div className="signup-form">
            <form onSubmit={handleSubmit} >
                <h1>Sign Up</h1>
                <div className="form-group">
                <label>Email</label>
                    
                    <input type="text" placeholder='Enter Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                </div>
                <div className="form-group">
                <label>Password</label>
                    
                    <input type="password" placeholder='Enter Your Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                </div>
                <p className="forgot-password">Forgot Password?</p>
                <button type="submit">Sign Up</button>
            </form>
            </div>
        </div>
    );
}
