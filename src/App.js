import logo from './logo.svg';
import './App.css';
import { Divider, TextField } from '@mui/material';
// import Typography from '@mui/joy/Typography';

function App() {
  return (
    <div className="App">
      <div className='Input'>
        <div>
          <h4>Text</h4>
          <TextField
            id="-text"
            fullWidth
            label="Input Text"
            multiline
            rows={4}
            defaultValue=""
          />
        </div>

        <Divider variant="middle" id="divider" />

        <div>
          <h4>Factors</h4>
          <TextField
            id="factors"
            fullWidth
            label="Factors"
            multiline
            rows={2}
            defaultValue=""
          />
        </div>

        <Divider variant="middle" id="divider" />

        <div>
          <h4>Aspect</h4>
          <TextField
            id="aspect"
            fullWidth
            label="Aspect"
            multiline
            rows={2}
            defaultValue=""
          />
        </div>

        <Divider variant="middle" id="divider" />

        <div>
          <p>Submit</p>
        </div>
      </div>

      <div className='Output'>
        <p>Output</p>
      </div>
    </div>
  );
}

export default App;
