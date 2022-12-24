import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
      

        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
          <div className=" navbar-collapse" id="navbarNav">
    

       <ul className="navbar-nav">  
        <li className="nav-item">
          <NavLink 
             className="nav-link active navbar-brand" 
              aria-current="page"
              to="/">
                 Animal <i className='fas fa-dragon ' ></i> World
                
            </ NavLink>

        </li>
        </ul>

          <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
             className="nav-link active navbar-brand" 
             aria-current="page"
             to="Home">
             
                 Home
                 
            </ NavLink>

        </li>
        </ul>
        
          <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
             className="nav-link active navbar-brand" 
             aria-current="page"
             to="About">
                 About
            </ NavLink>

        </li>
        </ul>
               </div>

        <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
             className="nav-link active navbar-brand" 
             aria-current="page"
             to="Signup">
              <i className="bi bi-card-text p-1"></i>
                 Signup
            </ NavLink>

        </li>
        </ul>

        <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
             className="nav-link active navbar-brand" 
             aria-current="page"
             to="Login">
               <i className="bi bi-box-arrow-in-right p-1 "></i>
               Login
            </ NavLink>

        </li>
        </ul>
        
        
        <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
             className="nav-link active navbar-brand" 
             aria-current="page"
             to="Logout">
              <i className="bi bi-box-arrow-left p-1"></i>
                Logout
            </ NavLink>

        </li>
        </ul>
        
  </div>
</nav>
       </header> 
</>
    );
}
      


export default Header;