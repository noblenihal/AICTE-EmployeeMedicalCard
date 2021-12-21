import {Link} from "react-router-dom"

function App() {
  return (
    <div className="home">

        
        <button id="enter" type="button">
          <Link to='/employees' className="enter-link"> Go to form</Link>
        </button>
      
    </div>
  );
}

export default App;
