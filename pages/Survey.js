import { useState } from "react"
import { Dashboard } from "react"

export default function Survey() {
    const[name, setName] = useState('');
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);
    
    const passName = (event) => {
        if(event.key === "Enter"){
            console.log('enter')
            setIsActiveOne(false);
            setIsactiveATwo(true);
        }
    }
    return(
        <div>
            <div>
                <h1> Name</h1>
                <input 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder='Enter name'
                    onKeyDown={passName}
                    type="text"
                />
                <div style={{display: isActiveTwo ? 'block' : 'none'}}>
                    <Dashboard passName={name}/>
                </div>
            </div>
        </div>
    )
    
}