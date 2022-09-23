import './App.css';
import { Stack, Button } from '@mui/material/';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div>
          <h1 className="title">Budget Me</h1>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Add Budget</Button>
            <Button variant="contained">Add Expense</Button>
          </Stack>
        </div>
          <div>
            <span>Total (donut chart)</span>
          </div>
      </div>
      <div>
        <div>
          <h1>title</h1>
          <span>min/max</span>
        </div>
        <div>progress bar</div>
        <div>
          <button>add expense</button>
          <button> view expenses</button>
        </div>
      </div>
    </div>
  );
}

export default App;
