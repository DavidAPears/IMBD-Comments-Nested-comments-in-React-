import React, { Component } from 'react';

const Film = function (props){
  return(
    <p>
      <h2>{props.Director}</h2>
      <p>{props.children}</p>
    </p>
  );
}

export default Film;
