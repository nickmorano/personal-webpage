/** @jsxImportSource @emotion/react */
import ShippingInformationForm from "./ShippingInformationForm";
import ShippingMethod from "./ShippingMethod";
import Billing from "./Billing";
import { Button } from '@mui/material';


const Checkout = ({ }) => {

  return (
      <div>
        <ShippingInformationForm />
        <ShippingMethod />
        <Billing />
        <Button className="checkoutButton" size="large" type="button" variant="contained" color="primary" sx= {{mt: "30px"}} fullWidth>Place Order</Button>
      </div>
  );
};

export default Checkout;