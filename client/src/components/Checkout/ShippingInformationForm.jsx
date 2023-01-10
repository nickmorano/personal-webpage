/** @jsxImportSource @emotion/react */
import { Container, FormControl, Typography, TextField, Grid } from '@mui/material';

const ShippingInformationForm = ({ }) => {

  return (
    <Container sx={{ border: 1, padding: "0 8px 8px 8px", mt: "30px" }}>
      <Typography variant="h3" sx={{ borderBottom: 1, fontSize: "22px", fontWeight: "200", py: "20px" }}>Shipping Information</Typography>
      <FormControl>
        <Grid container spacing={3} sx={{mt: 0}}>
          <Grid item xs={6}>
            <TextField label="First Name" variant="outlined" required fullWidth/>
          </Grid>

          <Grid item xs={6}>
            <TextField label="Last Name" variant="outlined" required fullWidth />
          </Grid>

          <Grid item xs={8}>
            <TextField label="Street Address" variant="outlined" required fullWidth />
          </Grid>

          <Grid item xs={4}>
            <TextField label="Apt/Suite" variant="outlined" required fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Company" variant="outlined" required fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="City" variant="outlined" required fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Zipcode" variant="outlined" required fullWidth />
          </Grid>
        </Grid>
      </FormControl>
    </Container>

  );
};

export default ShippingInformationForm;