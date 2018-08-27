import React, { Component } from 'react';

const Film = function (props){
  return(
    <table>

      <tr>
        <img src="./information-icon.png" height="20" width="20"/>
      </tr>

      <tr>
        <h2>{props.Films}</h2>
      </tr>

      <tr>
      <p>{props.children}</p>
      </tr>

      <tr>
      <a href="https://www.odeon.co.uk/cinema-tickets/">Ticket Link</a>
      </tr>

      {/* <tr>
        <button onClick={this.link}>Ticket Office</button>
      </tr> */}


    </table>
  );
}

export default Film;
