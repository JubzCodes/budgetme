import React, { useState } from 'react'
import { Modal, TextField, Button } from '@mui/material'
import { useBudgets } from '../BudgetContext';


const AddBudgetModal = ({ open, handleClose}) => {

//STATES FOR TEXT AREAS
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("");

//GETS ADDBUGET FROM CONTEXT
   const { addBudget } = useBudgets();


//HANDLES ADD BUTTON
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(document.getElementsByName("name"));
      console.log(name)
      addBudget({
        title: name,
        max: parseFloat(amount),
      });
      handleClose();
    }

  return (
    <Modal open={open}>
      <div className="budget">
        <h1 className="modal-title">
          New Budget <button onClick={handleClose}>X</button>
        </h1>
        <form className="budget-modal" onSubmit={handleSubmit}>
          <div>
          <TextField id="outlined-basic" label="Name" name='name' variant="outlined"
          type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div>
          <TextField id="outlined-basic" label="Amount" variant="outlined"
          type="number" value={amount} onChange={(e)=> {setAmount(e.target.value)}}/>
          </div>
          <div>
          <Button variant="contained" type='submit' >Add</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddBudgetModal