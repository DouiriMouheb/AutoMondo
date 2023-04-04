import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function DashBoard() {
  const url = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_DEPLOY
  : process.env.REACT_APP_API_URL_LOCAL;
  // State
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const handleSubmitTwo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("model", model);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);

    try {
      const response = await axios.post(
        `${url}upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchCars();
      setName("");
      setDescription("");
      setModel("");
      setPrix("");
      setImage1(null);
      setImage2(null);
      setImage3(null);
      setImage4(null);
      // Do something with the response if needed
    } catch (error) {
      console.log(error);
      // Handle the error if needed
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [cars, setCars] = useState(null);

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
    const res = await axios.get(`${url}cars`);

    // Set to state
    setCars(res.data.cars);
  };

  const deleteCar = async (_id) => {
    // Delete the note
    const res = await axios.delete(`${url}cars/${_id}`);

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
      `${url}cars/${updateForm._id}`,
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
              <form onSubmit={handleSubmitTwo}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <TextField
                        type="text"
                        label="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={8}>
                      <TextField
                        label="model"
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        label="prix"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        type="text"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                        label="description"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Button variant="contained" component="label">
                        Upload image 1
                        <input
                          hidden
                          type="file"
                          onChange={(e) => setImage1(e.target.files[0])}
                        />
                      </Button>
                    </Grid>
                    <Grid item xs={8}>
                      <Button variant="contained" component="label">
                        Upload image 2
                        <input
                          hidden
                          type="file"
                          onChange={(e) => setImage2(e.target.files[0])}
                        />
                      </Button>
                    </Grid>
                    <Grid item xs={8}>
                      <Button variant="contained" component="label">
                        Upload image 3
                        <input
                          hidden
                          type="file"
                          onChange={(e) => setImage3(e.target.files[0])}
                        />
                      </Button>
                    </Grid>
                    <Grid item xs={8}>
                      <Button variant="contained" component="label">
                        Upload image 4
                        <input
                          hidden
                          type="file"
                          onChange={(e) => setImage4(e.target.files[0])}
                        />
                      </Button>
                    </Grid>

                    <Grid item xs={8}>
                      <Button variant="contained" type="submit">
                        Create
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
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
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => deleteCar(car._id)}
                          >
                            Delete Car
                          </Button>

                          <Button
                            variant="contained"
                            onClick={() => toggleUpdate(car)}
                          >
                            Update car
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
