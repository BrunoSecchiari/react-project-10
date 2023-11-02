import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product {params.id.substring(1)}</h1>
      <p>
        Go back to{' '}
        <Link to='..' relative='path'>
          the list of products
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
