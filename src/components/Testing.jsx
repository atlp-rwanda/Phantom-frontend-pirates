import React from 'react'

import { useGetPhantomQuery } from '../services/phantomApi';

/* It will work with premium plan */
const Testing = () => {
  const { data, error, isLoading } = useGetPhantomQuery;
  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops, an error occured</div>;
  }

  return (
    <h1>Testing</h1>
  )
}

export default Testing;