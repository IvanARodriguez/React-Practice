function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

function Introduction(){
    return (
        <div className="container">
            <h1 className="display-2 my-5 p-3 bg-warning rounded border-5 border-dark border-bottom shadow">Hello Dear Developers</h1>
            <h2 className="fw-bolder text-secondary text-uppercase">My name is Ivan</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aut nulla dolorem fugit soluta, sapiente excepturi ea est dolor optio maxime fugiat et repellat reprehenderit culpa laboriosam quos hic vero iure numquam libero sed atque officiis incidunt. Nam modi dignissimos, explicabo, deleniti tenetur nulla, vero perspiciatis sit at officia fugiat.</p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Navbar/>
        <Introduction/>
    </div>
    , document.getElementById("root"));