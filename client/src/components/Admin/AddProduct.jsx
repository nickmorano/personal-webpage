/** @jsxImportSource @emotion/react */
import { Container, FormControl, Typography, TextField, Grid } from '@mui/material';

const AddProduct = () => {
  return (
    <Container sx={{ border: 1, padding: "0 8px 8px 8px", mt: "30px" }}>
      <Typography variant="h3" sx={{ borderBottom: 1, fontSize: "22px", fontWeight: "200", py: "20px" }}>Add Product</Typography>
      <FormControl>
        <Grid container spacing={3} sx={{mt: 0}}>
          <Grid item xs={6}>
            <TextField label="Product Name" variant="outlined" required fullWidth/>
          </Grid>

          <Grid item xs={6}>
            <TextField label="Brand Name" variant="outlined" required fullWidth />
          </Grid>

          <Grid item xs={8}>
            <TextField label="Price" variant="outlined" required fullWidth />
          </Grid>

          <Grid item xs={4}>
            <TextField label="Image" variant="outlined" required fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Description" variant="outlined" required fullWidth />
          </Grid>
        </Grid>
      </FormControl>
    </Container>
  );
};

export default AddProduct;