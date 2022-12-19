// import { Link } from "react-router-dom";
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
// import { AddShoppingCart } from '@mui/icons-material'

// const ProductList = ({ products, title }) => {
//   return (
//     <div className="product-list">
//       <h2>{title}</h2>
//       {products.map((product) => (
//         <div className="product-3" key={product.id}>
//           <Link to={`/products/${product.id}`}>
//             <Card className={classes.root}>
//               <CardMedia className="classes.media" image='' title={product.name} />
//               <CardContent>
//                 <div className="classes.cardContent">
//                   <Typography variant ="h5" gutterBottom>
//                     {product.name}
//                   </Typography>
//                   <Typography variant ="h5">
//                     {product.price}
//                   </Typography>
//                 </div>
//                 <Typography variant ="h2"> {product.description} </Typography>
//               </CardContent>
//               <CardActions disableSpacing className={classes.cardActions}>
//                 <IconButton aria-label="Add to Cart">
//                   <AddShoppingCart />
//                 </IconButton>
//               </CardActions>
//             </Card>
//           </Link>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ProductList;