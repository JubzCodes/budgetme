import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Budgets</h1>
        <button>add budget</button>
        <button>add expense</button>
        <div>
          <span>Total</span>
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
