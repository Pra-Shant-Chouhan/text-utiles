import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
// import TextForm from './component/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar/> */}
      <div className="container">
        {/* <TextForm heading ="Enter The Text to Analyze" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
