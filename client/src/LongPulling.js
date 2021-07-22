import React, {useState} from 'react'
import axios from 'axios'

const LongPulling = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')

    const sendMessage = async () => {
        await axios.post('http://localhost:5000/new-messages', {
            message: value,
            id: Date.now()
        })
    }
    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Отправить</button>
                </div>
                <div className="messages">
                    {messages.map(mess => 
                        <div className="message" key={mess.id}>
                            {mess.messages}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default LongPulling
