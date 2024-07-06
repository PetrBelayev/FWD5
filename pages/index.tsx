import React from 'react';
import Layout from '../components/Layout';
import Comic from '../components/Comic';
import { format } from 'date-fns';

const Home: React.FC = () => {
  const currentDate = format(new Date(), 'MMMM dd, yyyy');

  return (
    <Layout>
      <Comic 
        title="Title" 
        imageUrl="https://cdn-icons-png.flaticon.com/512/1178/1178479.png" 
        date={currentDate} 
      />
    </Layout>
  );
};

export default Home;
