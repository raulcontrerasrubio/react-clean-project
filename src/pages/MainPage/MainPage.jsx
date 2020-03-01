import React from 'react';
import PageLoad from '../../components/Animations/PageLoad/PageLoad';

const MainPage = () => {
  const loadedComponent = (
    <div>
      <p>Main Page</p>
    </div>
  );

  return <PageLoad onSuccessComponent={loadedComponent} />;
};

export default MainPage;
