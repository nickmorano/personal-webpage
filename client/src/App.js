/** @jsxImportSource @emotion/react */
import { createTheme, ThemeProvider } from '@mui/material';
import { black } from '@mui/material/colors'

import { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Products, Navbar, Cart } from './components';

const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
        // info: '#000000',
        // error: '#000000',
        // warning: '#000000',
      },
      secondary: {
        main: '#000000',
        // info: '#000000',
        // error: '#000000',
        // warning: '#000000',
      },
    },
    typography: {
      h4: {
        fontWeight: 600,
        fontSize: "16px"
      },
      h5: {
        fontWeight: 200,
        fontSize: "14px"
      },
      h6: {
        fontWeight: 200,
        fontSize: "14px"
      }
    }
  })

  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    fetch('http://localhost:5002/api/products')
      .then(res => {
        if(!res.ok) {
          throw Error('could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {
        setProducts(data)
      })
  };

  const handleAddToCart = async (productId, quantity) => {
    let product = cart.find(x => x.id === productId)
    let newCart = []

    if (product) {
      newCart = cart.filter(x => x.id !== productId)
      product.quantity++
    } else {
      newCart = cart
      product = products.find(x => x.id === productId)
      product.quantity = 1
    }

    newCart.push(product)

    setCart(newCart);
    console.log(cart)
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    // const response = await commerce.cart.update(lineItemId, { quantity });
    console.log("Update Quantity")
    // setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    // const response = await commerce.cart.remove(lineItemId);
    console.log("remove from cart")
    // setCart([]);
  };

  const handleEmptyCart = async () => {
    // const response = await commerce.cart.empty();
    console.log("cart empty")
    // setCart([]);
  };

  // const refreshCart = async () => {
  //   const newCart = await commerce.cart.refresh();

  //   setCart(newCart);
  // };

  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

  //     setOrder(incomingOrder);

  //     refreshCart();
  //   } catch (error) {
  //     setErrorMessage(error.data.error.message);
  //   }
  // };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {/* <Navbar totalItems={cart.length} handleDrawerToggle={handleDrawerToggle}  /> */}
          <Routes>
            <Route path="/"  element={<Products cart={cart} products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />} />
            <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
            {/* <Route path="/checkout" exact>
              <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
            </Route> */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;