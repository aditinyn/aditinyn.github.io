import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Aditi Narayan'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || "Hiya! My name is Aditi, I'm an 18 year old from India and I'm an incoming freshman at NYU."} />
      </Helmet>
      <App />
    </>
  );
};
