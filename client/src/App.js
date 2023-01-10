/** @jsxImportSource @emotion/react */
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Products, Navbar, Cart, Checkout } from './components';
import { css } from '@emotion/react';
import { Calculate } from '@mui/icons-material';

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
  const [cartQuantity, setCartQuantity] = useState(null)
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
    updateCartQuantity(newCart);
  };

  const updateCartQuantity = (newCart) => {
    let newQuantity = calculateCartQuantity(newCart);
    setCartQuantity(newQuantity);
  }

  const calculateCartQuantity = (p) => {
    return p.reduce(
      (acc, x) => acc + x.quantity,
      0);
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    let newCart = cart;
    const index = newCart.findIndex((item => item.id === lineItemId));

    newCart[index].quantity = quantity;

    setCart(newCart);
    updateCartQuantity(newCart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    let newCart = cart.filter(x => x.id !== lineItemId)

    setCart(newCart);
    updateCartQuantity(newCart);
  };

  const handleEmptyCart = async () => {
    setCart([]);
    setCartQuantity(null);
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

    const localStorage = window.localStorage.getItem('CART');
    const storedCart = JSON.parse(localStorage).carty

    if(storedCart.length > 0) {
      setCart(storedCart)
      updateCartQuantity(storedCart);
    }
  }, []);

  useEffect(() => {
    let cartObj = {carty: cart}
    window.localStorage.setItem('CART', JSON.stringify(cartObj))
  }, [cartQuantity]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const mainCss = css({
    padding: "0px 8px",
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar totalItems={cartQuantity} handleDrawerToggle={handleDrawerToggle} />
        <main css={mainCss}>
          <Routes>
            <Route path="/"  element={<Products cart={cart} products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />} />
            <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;