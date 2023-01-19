import Title from "../components/Title";

function Signup() {
    return ( 
        <>
        
        <div className="  m-2 ">

        <Title
                 main="Welcome to the store"
                 sub="Registration page"
                 />
                 </div>
<div className=" from-control w-50  m-auto px-4 ">
<div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                // onClick={submit}
                className="btn btn-primary btn-lg"
            >
                Sign Up
            </button>
        </div>
        </>
     );
}

export default Signup;