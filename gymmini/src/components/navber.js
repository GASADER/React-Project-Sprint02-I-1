export default function Navber(){
    return(
        <nav className="flex justify-between p-4">
        <div className="logo-container">
            <a href="/">
                <img src="/" alt="logo" />
            </a>
        </div>
        <div className="nav-account-container flex flex-row">
        <p className="pr-2">Have an account?</p>
            <ul className="flex flex-row gap-1">
                <li className="text-red-500">
                    <a href="/">Login</a>
                </li>
                <p>or</p>
                <li className="text-red-500">
                    <a href="/">Register</a>
                </li>
            </ul>
        </div>
        </nav>
    )
}