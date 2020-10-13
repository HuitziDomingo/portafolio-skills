import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import { Parallax, HeaderForm, ContentServices, Footer } from './components'

export default () => {
  return (
    <>
      <Parallax
        foo={<HeaderForm />}
      />
      <ContentServices />
      <Footer />
    </>
  )
}




