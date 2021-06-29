import React, {useState} from 'react'

import { Link } from 'react-router-dom';

export default function Profile() {
        const [name, setName] = useState('');
        const [accountNumber, setAccountNumber] = useState('');
        const [amount, setAmount] = useState('');

    return (
        <div>

                    <button>
                        <Link to='/'>
                        
                            Back to Home
                        </Link>
                    </button>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' value={name} onChange={(e) => {setName(e.target.value)}} />
                </div>
                
                <div>
                    <label>Account Number</label>
                    <input type='number' value={accountNumber} onChange= { (e) => {setAccountNumber(e.target.value)}}/>
                </div>
                
                <div>
                    <label>Amount</label>
                    <input type='number' value={amount} onChange= { (e) => {setAmount(e.target.value)}}/>
                </div>
                
               
            </form>
        </div>
    )
}
