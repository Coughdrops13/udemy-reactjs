import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Book 1",
    price: 1,
    description: "The first book",
  },
  {
    id: "p2",
    title: "Book 2",
    price: 2,
    description: "The second book",
  },
  {
    id: "p3",
    title: "Book 3",
    price: 3,
    description: "The third book",
  },
  {
    id: "p4",
    title: "Book 4",
    price: 4,
    description: "The fourth book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />;
        })}
      </ul>
    </section>
  );
};

export default Products;
