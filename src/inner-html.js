import React from 'react';
import dompurify from 'dompurify'

const formattedMessage = `
   <div>
      <h2>Welcome to our farm land!</h2>
      <img src= ??? onError=alert('hi') />
   </div>
`;
const InnerHtml = () => {

     return  <div dangerouslySetInnerHTML={{__html: dompurify.sanitize(formattedMessage)}}  />

};

export default InnerHtml;
