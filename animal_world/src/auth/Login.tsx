import Title from "../components/Title";

function Login() {
    return ( 
        <>
        Login work11

        <div className="  m-2 ">

        <Title
                 main="Login registered customers"
                 sub="You can log in as a registered user"
                 />
                 </div>
<div className=" from-control w-50  m-auto px-4 ">

            <div className="mb-3">
            <label htmlFor="email" className="form-label">email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">password</label>
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

export default Login;