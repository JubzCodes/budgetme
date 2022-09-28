import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useBudgets } from '../BudgetContext';

const BudgetCards = () => {

  const { budgets } = useBudgets(); 

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
    <div className="cards-wrap">
      {budgets.map((budget) => {
        return (
        <Card className="card" sx={{ maxWidth: 345 }} key={budget.id}>
          <CardContent>
            <div className="card-title">
              <Typography gutterBottom variant="h5" component="div">
                {budget.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $50/${budget.max}
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
        )
      })}
    </div>
  );
}

export default BudgetCards