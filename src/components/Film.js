import React, { Component } from 'react';

const Film = function (props){
  return(


    <tr>
      <td>
        <img src="./information-icon.png" height="20" width="20"/>
      </td>

      <td>
        <h1>{props.Films}</h1>
      </td>

      <td>
        <p>{props.children}</p>
      </td>

      <td>
        <a href="https://www.odeon.co.uk/cinema-tickets/">Ticket Link</a>
      </td>
    </tr>

  );
}

export default Film;
