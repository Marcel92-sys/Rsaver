import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div>
                <h2>Welcome to RichSaver</h2>

                <div>
                    <button>
                        <Link to='/profile'>
                        
                            Profile
                        </Link>
                    </button>
                    
                    <button>
                        
                    <Link to='/details'>
                        Account Details
                    </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
