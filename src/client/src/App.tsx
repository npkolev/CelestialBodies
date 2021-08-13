import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import ResultsList from './components/ResultsList';
import { Bodies } from './interfaces/types';

const App: React.FC = () => {
  const [data, setBodies] = React.useState<Bodies>({bodies: [], count: 0, loading: false})

  const getCelestialBodies = async () => {
    try {
      setBodies({bodies: [], count: 0, loading: true});
      const { data } = await axios.get('http://localhost:1337/bodies/get');
      setBodies({bodies: data.bodies, count: data.count, loading: false});
    } catch (error) {
      console.log(error);
    }
  }
 
React.useEffect(()=>{
  getCelestialBodies()
}, [])

  return (
    <div className="App">
      <Header/>
      <ResultsList data={data} />
    </div>
  );
}

export default App;
