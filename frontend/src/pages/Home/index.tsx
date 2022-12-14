import './home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='details-container'>
        <div className='home-slogan'>Unlock nearshore resources & insurtech capabilities</div>
        <div className='home-description'>We deliver transformation</div>
        <div className='discover-button'>Discover How →</div>
      </div>
      <div
        style={{
          flex: 1,
        }}
      >
        <img src='/assets/image_top.png' alt='Logo' />
      </div>
    </div>
  );
};

export default Home;
