import useFetch from './useFetch';

const Home = () => {
  const { data: products, isPending, error } = useFetch('http://localhost:5002/api/')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products && <ProductList products={products} title="All Products" />}
    </div>
  );
}

export default Home;