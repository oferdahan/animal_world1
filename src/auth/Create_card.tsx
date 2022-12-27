

// Hide in the main menu
// Will be presented after business registration


import Title from "../components/Title";

function Create_card() {
    return (  
        <>
        <div className="  m-2 ">

        <Title
                 main="Card creation form"
                 sub="business card"
                 />
                 </div>
<div className=" from-control w-50  m-auto px-4 ">
<div className="mb-3">
                   <label htmlFor="biz_Name" className="form-label">biz_Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder=" biz_Name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
            <label htmlFor="Business description" className="form-label">Business description</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder=" Business description"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
            <label htmlFor=" Business adderss" className="form-label"> Business adderss</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder=" Business adderss"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
            <label htmlFor=" Business phone" className="form-label"> Business phone</label>
                <input
                    type="tel"
                    className="form-control"
                    placeholder=" Business phone"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
            <label htmlFor=" Business image" className="form-label"> Business image</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder=" Business image"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
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

export default Create_card;