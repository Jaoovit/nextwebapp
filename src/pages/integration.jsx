import Header from "../components/header"
import Footer from "../components/footer"
import { useState } from "react"

export default function integration () {

    const [code, setCode] = useState(1)
    const [client, setClient] = useState({})

function getClient() {
    fetch(`http://localhost:3000/api/clients/${code}`)
    .then(resp => resp.json())
    .then(data => setClient(data))
}


    return (
        <div>
            <Header title= "API">
            <input type="number" value={code}
                onChange={e => setCode (e.target.value)} />
            <button onClick={getClient}>Get Client</button>
            <ul>
                <li>Id: {client.id}</li>
                <li>Name: {client.name}</li>
                <li>Email: {client.email}</li>
            </ul>
            </Header>
            <Footer />
        </div>
    )
}