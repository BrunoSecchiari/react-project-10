import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to='products'>the list of products</Link>
      </p>
      <button
        onClick={navigateHandler}
        style={{
          backgroundColor: 'darkcyan',
          color: 'white',
          fontFamily: 'Trebuchet MS',
          fontSize: '1rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '.3rem',
          padding: '.5rem 2rem',
        }}
      >
        Navigate Programmatically
      </button>
    </>
  );
};

export default HomePage;
