import React from 'react';

export const HelloUser = (props) => {
    const { title } = props

     return (
      <h1 className="hello-user">Hello, {title}</h1>
    );
}