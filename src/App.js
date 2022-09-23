import './App.css';
import { Stack, Button, Card, CardContent, CardActions, Typography } from '@mui/material/';
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";



function App() {

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));




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
      <div className="cards-wrap">
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardContent>
            <div className="card-title">
              <Typography gutterBottom variant="h5" component="div">
                Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Min/Max
              </Typography>
            </div>
            <BorderLinearProgress variant="determinate" value={50} />
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">
              Add Expense
            </Button>
            <Button size="small" variant="outlined">
              View Expenses
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <div className="card-title">
              <Typography gutterBottom variant="h5" component="div">
                Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Min/Max
              </Typography>
            </div>
            <BorderLinearProgress variant="determinate" value={50} />
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">
              Add Expense
            </Button>
            <Button size="small" variant="outlined">
              View Expenses
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <div className="card-title">
              <Typography gutterBottom variant="h5" component="div">
                Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Min/Max
              </Typography>
            </div>
            <BorderLinearProgress variant="determinate" value={50} />
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">
              Add Expense
            </Button>
            <Button size="small" variant="outlined">
              View Expenses
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <div className="card-title">
              <Typography gutterBottom variant="h5" component="div">
                Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Min/Max
              </Typography>
            </div>
            <BorderLinearProgress variant="determinate" value={50} />
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">
              Add Expense
            </Button>
            <Button size="small" variant="outlined">
              View Expenses
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
