import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DashBoard() {
 
  // State
  const [open, setOpen] = useState(false);

 

  const handleClose = () => {
    setOpen(false);
  };

  const [cars, setCars] = useState(null);
  const [createForm, setCreateForm] = useState({
    name: "",
    model: "",
    description: "",
    prix: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    name: "",
    model: "",
    description: "",
    prix: "",
  });

  // Use effect
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:8080/cars");
   
    // Set to state
    setCars(res.data.cars);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createCar = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/car", createForm);

    setCars([...cars, res.data.car]);

    setCreateForm({
      name: "",
      model: "",
      description: "",
      prix: "",
    });
  };

  const deleteCar = async (_id) => {
    // Delete the note
    const res = await axios.delete(`http://localhost:8080/cars/${_id}`);

    // Update state
    const newCars = [...cars].filter((car) => {
      return car._id !== _id;
    });

    setCars(newCars);
  };

  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = (car) => {
    // Set state on update form
    setUpdateForm({
      name: car.name,
      model: car.model,
      _id: car._id,
      prix: car.prix,
      description: car.description,
    });
    setOpen(true);
    
  };

  const updateCar = async (e) => {
    e.preventDefault();

    const { name, model, prix, description } = updateForm;

    // Send the update request
    const res = await axios.put(
      `http://localhost:8080/cars/${updateForm._id}`,
      { name, model, prix, description }
    );

    // Update state
    const newCars = [...cars];
    const carIndex = cars.findIndex((car) => {
      return car._id === updateForm._id;
    });
    newCars[carIndex] = res.data.car;

    setCars(newCars);

    // Clear update form state
    setUpdateForm({
      _id: null,
      title: "",
      body: "",
    });
  };

  return (
    <>
    <div className="App">
    <Grid container spacing={2}>
  
  <Grid item xs={6}>
  
    {updateForm._id && (
        <div>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         Update Car Info
        </DialogTitle>
        <DialogContent>
        <form onSubmit={updateCar}>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    id="name"
                    onChange={handleUpdateFieldChange}
                    value={updateForm.name}
                    name="name"
                    label="name"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={8}>
                  <TextField
                    id="model"
                    onChange={handleUpdateFieldChange}
                    value={updateForm.model}
                    name="model"
                    label="model"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="prix"
                    onChange={handleUpdateFieldChange}
                    value={updateForm.prix}
                    name="prix"
                    label="prix"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="description"
                    onChange={handleUpdateFieldChange}
                    value={updateForm.description}
                    name="description"
                    label="description"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
            <Button variant="contained" type="submit" autoFocus>
              Update
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </form>
        </DialogContent>
    
      </Dialog>
        
        </div>
      )}

<div>
          <h2>Create Car</h2>
          <form onSubmit={createCar}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    id="name"
                    onChange={updateCreateFormField}
                    value={createForm.name}
                    name="name"
                    label="name"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={8}>
                  <TextField
                    id="model"
                    onChange={updateCreateFormField}
                    value={createForm.model}
                    name="model"
                    label="model"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="prix"
                    onChange={updateCreateFormField}
                    value={createForm.prix}
                    name="prix"
                    label="prix"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="description"
                    onChange={updateCreateFormField}
                    value={createForm.description}
                    name="description"
                    label="description"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>

            <Button variant="contained" type="submit">
              Create
            </Button>
          </form>
        </div>
  </Grid>
  <Grid item xs>
  <table>
  <thead>
    <tr>
      <th>Car Name</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {cars &&
      cars.map((car) => {
        return (
          <tr key={car._id}>
            <td>{car.name}</td>
            <td>
              <button onClick={() => deleteCar(car._id)}>Delete note</button>
              <Button variant="outlined" onClick={() => toggleUpdate(car)}>
                Update note
              </Button>
            </td>
          </tr>
        );
      })}
  </tbody>
    </table>
  </Grid>
</Grid>
   


     
    </div>
   </>
    
  );
}

export default DashBoard;
