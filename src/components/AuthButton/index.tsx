function AuthButton() {
    return (
        <div className=" flex md:justify-end justify-center">
            <button className="btn">
                Register
            </button>

            <button className="btn ml-2">
                Login
            </button>
        </div>
    );
}

export default AuthButton;