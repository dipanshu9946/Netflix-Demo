import NetflixSeries from './components/NetflixSeries';
// import './components/Netflix.css';
import './components/Netflix.module.css'


export const App = () => {
  return(
  <section className="container">
    <h1 className='card-heading'>Best Show in 2024</h1>
  <NetflixSeries />;
  </section> 
  );
};

