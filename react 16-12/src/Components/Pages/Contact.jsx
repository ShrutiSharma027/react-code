import { NavLink } from "react-router-dom"
export const Contact=()=>{
    return <> 
   
    {/* <!-- Begin First Section  --> */}
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="visa">
                    <div className="container d-flex justify-content-center align-items-center h-100">
                        <nav  aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- End First Section --> */}



    {/* <!-- Begin Second Section  --> */}
    <div className="container py-5">
        <div className="row">
            <div className=" col-lg-6 text-left px-4 border-left">
                <h2>Get In Touch</h2>
                <p className="color">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga sit illo modi aut
                    aspernatur tempore laboriosam saepe dolores eveniet.</p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row ">
            <div className="col-md-4">
                <h4><i className="fa-solid fa-phone sec-col"></i> Call Us </h4>
                <h6> +123 456 789 </h6>

            </div>
            <div className="col-md-4">
                <h4><i className="fa-regular fa-envelope sec-col"></i> Email Us</h4>
                <h6>example@gmail.com</h6>

            </div>
            <div className="col-md-4">
                <h4><i className="fa-solid fa-location-dot sec-col"></i> Address</h4>
                <h6>California, #32841 block, #221DRS 75 West Rock, Maple Building, UK.</h6>

            </div>
        </div>
    </div>


    {/* <!-- End Second Section  --> */}



    {/* <!-- Begin Third Section --> */}
    <div className="container py-5">
        <div className="row">

            <div className="col-md-6">
                <form>
                    <div className="row d-flex">
                        <div className="twice_two">
                            <input type="text" className="form-control" id="w31name" placeholder="Name" required/>
                            <input type="email" className="form-control" id="w31name" placeholder="E-mail" required/>
                        </div>
                        <div className="twice">
                            <input type="text" className="form-control" id="w31name" placeholder="Subject"/>
                        </div>
                        <div className="twice">
                        <textarea rows="10" name="w31name" className="form-control" id="w31name" placeholder="Message"
                            required></textarea>
                        </div>
                    </div>
                    <div className="me-0">
                    <button type="submit" className="btn btn-contact" >Send Message</button></div>
                </form>
            </div>
            <div className="col-md-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.6354568730294!2d75.46948137514815!3d22.215956045947635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39626f9b36ee72ef%3A0x2df88134109501b3!2sMaya&#39;s%20TechnoZone%20Computer%20Center!5e0!3m2!1sen!2sin!4v1700575110641!5m2!1sen!2sin"
                    width="600" height="450"  loading="lazy"></iframe>
            </div>
        </div>
    </div>
    {/* <!-- End Third Section  --> */}

    </>
}