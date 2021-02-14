//jshint esversion:6
import React, { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

function Dashboard() {
    const [error, setError] = useState("");
    const {currentUser,logout} = useAuth();
    const history = useHistory();


  async  function handleLogOut() {
        setError("");
        try {
            await logout();
            history.push('/login');
        } catch {
            setError("failed to log out");
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <strong>Email : </strong> {currentUser.email}
                    <br/>
                    <Link to ='/update-profile' className="btn btn-primary w-100 mt-3"> update</Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogOut}  >Log Out</Button>
            </div>
        </div>
    )
}

export default Dashboard
