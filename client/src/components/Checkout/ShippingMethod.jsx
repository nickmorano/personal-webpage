/** @jsxImportSource @emotion/react */
import { Container, FormControl, Typography, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const ShippingMethod = () => {

  return (
    <Container sx={{ border: 1, padding: "0 8px 8px 8px", mt: "30px" }}>
      <Typography variant="h3" sx={{ borderBottom: 1, fontSize: "22px", fontWeight: "200", py: "20px" }}>Select Shipping Method</Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Standard"
        >
          <FormControlLabel value="standard" control={<Radio />} label="Standard" />
          <FormControlLabel value="express" control={<Radio />} label="Home Shipping" />
        </RadioGroup>
      </FormControl>
    </Container>

  );
};

export default ShippingMethod;