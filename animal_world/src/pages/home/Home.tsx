import Title from "../../components/Title";
import   './home.css'
function Home() {
    return (  
        <>
        <div className="bg-info">

              <Title
                    main="Animall World"
                    sub="Special Livestock Sales"
                   />
                     
                     <div>
                        <input 
                               type ="text"
                               placeholder="Sarch"
                               className="form-control my-4 w-50 m-auto" />
                     </div>

                     <div className=" mx-4 border box_display">
                        {/* <p className=""> Display-Mode</p> */}
                        <i className="bi bi-caret-down  p-2 fs-2"></i>
                        <i className="bi bi-caret-right p-2 fs-2"></i>

                     </div>

          <div className=" d-flex p-3 ">

                <div className="card  p-2 m-2 " >
                 <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" className="card-img-top" alt="..." />
                    <div className="card-body p-2  m-2">
                       <h5 className="card-title">Card title</h5>
                       <p className="card-text">Some quick example text </p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

               <div className="card  p-2 m-2 " >
                     <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" className="card-img-top" alt="..." />
                   <div className="card-body p2 ">
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text </p>
                         <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
               </div>
               
        </div>
     </div>

         
        </>
    );
}

export default Home;