import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/dashboard';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-305621958-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Dashboard/>
  );
}

export default App;
