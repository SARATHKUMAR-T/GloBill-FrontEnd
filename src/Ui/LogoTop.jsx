import { Link } from "react-router-dom"

function LogoTop() {
    return (
        <div className="py-8 px-6 text-slate-300">
          <div>
            <Link to='/'>
            <p className="text-xl font-semibold pl-4 mt-1">Globill</p>
            </Link>
          </div>
        </div>
    )
}

export default LogoTop
