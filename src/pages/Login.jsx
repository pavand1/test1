import React from "react";

const Login = () => {
    return (
        <section className="mid-section login-sec">
            <div className="login-content">
                <div className="sign-in-tip text-center">
                    <h4>
                        ---- Sign in with your registered email and password
                        ----
                    </h4>
                </div>
                {/*sign-in-tip*/}
                <form>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            name="pswd"
                        />
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                            />{" "}
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" className="btn">
                        Login
                    </button>
                    <h6 className="forget-passord text-end">
                        {" "}
                        <a href="#"> Forget Password</a>
                    </h6>
                </form>
                <div className="new-sign-in text-center">
                    <h6>
                        Are you a Newbie? <a href="#"> Get Started </a>{" "}
                    </h6>
                </div>
                {/*new-sign-in*/}
            </div>
            {/*login-content*/}
        </section>
    );
};

export default Login;
