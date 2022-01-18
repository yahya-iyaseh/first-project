import './App.css';
import './page.css';
function App() {
  return (
    <main>
      <div className="container">
        <h1 className="title text-light font-weight-bolder m-5">Fun Facts about React</h1>
        <ul className="text-light m-5 h2">
          <li className="mt-3">Was first released in 2013</li>
          <li className="mt-3">Was originally created by Jordan Walke</li>
          <li className="mt-3">Has well over 100k stars on GitHub</li>
          <img src="./logo33.png" id="back" alt="logo" />
            <li className="mt-3">Is maintained by Facebook</li>
            <li className="mt-3">Powers thousands of enterprise apps, includin mobile apps</li>
        </ul>
      </div>
    </main>
  )
}

export default App
