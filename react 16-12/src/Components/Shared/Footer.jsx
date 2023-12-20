import { NavLink } from "react-router-dom";

export const Footer=()=>{
    return <footer>
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-5">
                        <h2><NavLink className="navbar-brand" href="Easy_Cash.html">
                            <i className="fa-solid fa-building-columns"></i>Easy Cash</NavLink></h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui repellat nam vero
                            consectetur
                            dicta eos suscipit. Numquam at minus architecto asperiores cupiditate. At molestias
                            laborum
                            voluptatibus numquam aperiam in.</p>
                    </div>
                    <div className="col-md-3 py-5">
                        <h2>About</h2>
                        <p>How it works</p>
                        <p>Guarantee</p>
                        <p>Security</p>
                        <p>Our Story</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="col-md-3 py-5">
                        <h2>Solution</h2>
                        <p>Car Loan</p>
                        <p>Personal Loan</p>
                        <p>Business Loan</p>
                        <p>Home Loan</p>
                    </div>
                    <div className="col-md-3 py-5">
                        <h2>Need Help?</h2>
                        <p>Find a branch</p>
                        <p>FAQs</p>
                        <p>APR</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="text-center">© 2020 Easy cash. All rights reserved | Designed by <NavLink
                        to="https://w3layouts.com/">w3layouts</NavLink></div>
                </div>
            </div>
        </div>
    </footer>
}