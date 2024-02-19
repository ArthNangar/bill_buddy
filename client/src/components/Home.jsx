import Header from "./Header";
import './button.css';
import AddInvoice from "./AddInvoice";


const Home = () =>{
    return(
       <>
       <Header />
       <div>
       <h1 style={{color:"black"}}> Pending Invoice</h1>
       {/* <button style={{ background: 'blue', color: 'white', padding: '10px' }}>Add Invoice </button> */}
       <button className="gradient-button">Add Invoice</button>
       <AddInvoice />


       </div>
       </>
    )
}

export default Home;
