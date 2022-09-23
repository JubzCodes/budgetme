import './App.css';
import { Stack, Button } from '@mui/material/';
import BudgetCards from './components/BudgetCards'


function App() {


  return (
    <div className="App">
      <div className="hero">
        <div className='header'>
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
        <BudgetCards  />
    </div>
  );
}

export default App;
