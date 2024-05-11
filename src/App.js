import './App.css';
import Button from './template_components/Button';

function App() {
  return (
    <div className="App">
      <Button text="Experience" type="special"/>
      <Button text="Submit" type="primary"/>
      <Button text="More" type="secondary"/>
    </div>
  );
}

export default App;
