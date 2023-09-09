import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.scss'
function Register() {
    const[id,setid] = useState('');
    const[name,setname] = useState('');
    const[password,setpassword] = useState('');
    const[email,setemail] = useState('');
    const[phone,setphone] = useState('');

    const navigate = useNavigate();
    const IsValidate = () => {
        let isproceed = true;
        let errmessage = 'Please enter the value in ';
        if(id === null || id === ''){
            isproceed = false;
            errmessage +=  'Username';
        }
        if(name === null || name === ''){
            isproceed = false;
            errmessage +=  'Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errmessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errmessage += ' Email';
        }

        if(!isproceed){
            alert(errmessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                alert('Please enter the valid email')
            }
        }
        return isproceed;
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, phone };
        if (IsValidate()) {
        //console.log(regobj);
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            alert('Registered successfully.')
            navigate('/login');
        }).catch((err) => {
            alert('Failed :' + err.message)
        });
        localStorage.setItem('reg',regobj)
    }
}

  return (
    <div className='form-reg'>
        <form className='login-form-reg ' onSubmit={handlesubmit}>
            <h1>User Register</h1>

                <div className="border-reg">
                    <div className="form-group">
                    <label>User Name  :</label>
                    <input className="form-control" placeholder='Input UserName....' value={id} onChange={e => setid(e.target.value)}></input>
                    </div>
            </div>
                <div className="border-reg">
                    <div className="form-group">
                    <label>Password  :</label>
                    <input className="form-control" placeholder='Input UserName.... ' value={password} onChange={e => setpassword(e.target.value)}></input>
                    </div>
            </div>
                <div className="border-reg">
                    <div className="form-group">
                    <label>Full Name  :</label>
                    <input className="form-control" placeholder='Input UserName....' value={name} onChange={e => setname(e.target.value)}></input>
                    </div>
            </div>
                <div className="border-reg">
                    <div className="form-group">
                    <label>Email :</label>
                    <input className="form-control" placeholder='Input UserName....' value={email} onChange={e => setemail(e.target.value)} ></input>
                    </div>
            </div>
                <div className="border-reg">
                    <div className="form-group">
                    <label>Phone  :</label>
                    <input className="form-control" placeholder='Input UserName....' value={phone} onChange={e => setphone(e.target.value)}></input>
                    </div>
            </div>
            <div className="card-footer">
                    <button type="submit" className="text-blue">Register</button> |
                    <Link to={'/login'} className="btn btn-danger">Close</Link>
                </div>
        </form>
    </div>
  )
}

export default Register