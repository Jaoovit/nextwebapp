import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function home() {
    return(
        <div>
            <h1>HomePage</h1>
            <Navigation text= "Costumers" fate="/costumers"/>
            <br></br>
            <Navigation text= "Products" fate="/products"/>
            <br></br>
            <Navigation text= "Clients" fate="/clients/123"/>
            <Footer />
        </div>
    )
}