import './page.css';
function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        <div className="left d-flex align-items-center">
          <img src="./logo192.png" alt="Logo" className="d-inline" width="48" />
            <h1 className="text-info d-inline mx-2">ReactFacts</h1>
        </div>
        <h3 className="text-light">React Course - Project</h3>
      </div>
    </nav>
  )
}


export default Header