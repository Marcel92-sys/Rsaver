import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Details() {
    const [name, setName] = useState('Rich-oak');
    const [accountNumber, setAccountNumber] = useState('1234');
    const [amount, setAmount] = useState('4321');


    return (
        <div>
            
            <button>
                        <Link to='/'>
                        
                            Back to Home
                        </Link>
                    </button>
            <div>
                <h5>Account Details</h5>
                <div>
                    <p>{name}</p>
                    
                    <p>{accountNumber}</p>
                    
                    <p>{amount}</p>

                </div>
            </div>
        </div>
    )
}
