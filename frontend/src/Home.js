import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './Style.css';


function Home() {
    const [Name, setName] = useState('')
    const [Department, setDepartment] = useState('')
    const [DOB, setDOB] = useState('')
    const [Age, setAge] = useState('')
    const [Salary, setSalary] = useState('')
    const [Address, setAddress] = useState('')
    const [Designation, setDesignation] = useState('')
    const [phone_no, setphone_no] = useState('') 
    const navigate=useNavigate();
    const handleSubmit = (event) =>{
        console.log(Name,Department,DOB,Age,Salary,Address,Designation,phone_no);
        event.preventDefault();
        axios.post('http://localhost:3002/',{Name,Department,DOB,Age,Salary,Address,Designation,phone_no})
        .then(res =>{
            navigate('/');
        }).catch(err => console.log(err));
    }
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3002/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));   
    })
    const handleDelete=(Name)=>{
        axios.delete('http://localhost:3002/'+Name)
        .then(res => navigate('/'))
        .catch(err => console.log(err));
    }
  return (
    <div>
        <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <h1>Student Details</h1>
                        <div className='inputs'>
                            <div className='name'>Name</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Name:' onChange={e => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Department</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Department:' onChange={e => setDepartment(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>DOB</div>
                            <div classname='inputs'>
                                <input type='Date' placeholder='Enter DOB:' onChange={e => setDOB(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Age</div>
                            <div classname='inputs'>
                                <input type='Number' placeholder='Enter Age:' onChange={e => setAge(e.target.value)} />
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>salary</div>
                            <div classname='inputs'>
                                <input type='Number' placeholder='Enter Salary :' onChange={e => setSalary(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Address</div>
                            <div classname='inputs'>
                                <input type='text' placeholder=' Enter Address :' onChange={e => setAddress(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Designation</div>
                            <div classname='inputs'>
                                <input type='text' placeholder=' Enter Designation :' onChange={e => setDesignation(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>phone_no</div>
                            <div classname='inputs'>
                                <input type='Number' placeholder='Enter Phone No :' onChange={e => setphone_no(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
        <div className='container'>
            <div className='main'>
                <h1> Employee Details</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <div></div>
                            <th>Department</th>
                            <div></div>
                            <th>DOB</th>
                            <div></div>
                            <th>Age</th>
                            <div></div>
                            <th>Salary</th>
                            <div></div>
                            <th>Address</th>
                            <div></div>
                            <th>Designation</th>
                            <div></div>
                            <th>phone_no</th>
                        </tr>
                    </thead>
                <tbody>
                        {data.map( (d,i) => (
                            <tr>
                                <td>{d.Name}</td>
                                <div></div>
                                <td>{d.Department}</td>
                                <div></div>
                                <td>{d.DOB}</td>
                                <div></div>
                                <td>{d.Age}</td>
                                <div></div>
                                <td>{d.Salary}</td>
                                <div></div>
                                <td>{d.Address}</td>
                                <div></div>
                                <td>{d.Designation}</td>
                                <div></div>
                                <td>{d.phone_no}</td>
                                <td>
                                    <button onClick={e=>handleDelete(d.Name)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}
export default Home