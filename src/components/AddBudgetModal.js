import React from 'react'
import { Modal, TextField, Button } from '@mui/material'


const AddBudgetModal = () => {
  return (
    <Modal open="true">
      <div className="budget">
        <h1 className="modal-title">
          New Budget <button>X</button>
        </h1>
        <form className="budget-modal">
          <div>
          <TextField id="outlined-basic" label="Name" variant="outlined"
          type="text" />
          </div>
          <div>
          <TextField id="outlined-basic" label="Amount" variant="outlined"
          type="number"/>
          </div>
          <div>
          <Button variant="contained">Add</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddBudgetModal