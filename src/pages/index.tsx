/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Home from './Home';

/* interface ISocketNotification {
  service: string,
  message: string,
  type: string,
} */

const NavigationRoutes: React.FC = () => {
  const teste = 'teste';
  return (
    <>
      <Home />
      <h1>{teste}</h1>
    </>
  );
};
export default NavigationRoutes;
