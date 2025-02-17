import { Link } from "react-router-dom";

const Missing = () =>{
    return (
        <main className="Missing">
            <h1>Page Is Missing!...</h1>
            <p>Oops! That is disappointing.</p>
            <p>Click below and go back to Home page.</p>
            <Link to={'/'} >Home</Link>
        </main>
    )
};

export default Missing;