import ReactDOM from 'react-dom';
import { DogImagesContainer } from './DogImagesContainer';

const App = () => {
  return (
    <div className="App">
      <h1>Browse Dog Images</h1>
      <DogImagesContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
