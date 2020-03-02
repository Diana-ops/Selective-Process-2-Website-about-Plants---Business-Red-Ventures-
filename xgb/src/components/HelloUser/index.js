import React from 'react';

export const HelloUser = (props) => {
    const { nameUser } = props

     return (
      <h1 className="hello-user">Hello, {nameUser}</h1>
    );
}