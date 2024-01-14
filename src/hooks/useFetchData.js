import React, { useEffect } from 'react'
import axios from 'axios';

const backendURL = 'https://instock-0dd5e310830f.herokuapp.com/';

const useFetchData = (table) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    try{
      const fetchData = async () => {
        try {
          const result = await axios.get(`${backendURL}/api/${table}`);
          setData(result.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      fetchData();
    }}catch(err){
      console.log(err);
    }
  }, []);

  return { data, loading, error };
}

export default useFetchData