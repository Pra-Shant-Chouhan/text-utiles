import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils"/>
      {/* <Navbar/> */}
      <TextForm heading ="Enter The Text to Analyze" />
    </>
  );
}

export default App;
