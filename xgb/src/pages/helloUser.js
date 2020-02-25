import React from 'react';

import data from './services/json.json'

import { BuildField } from './BuildField'
import { ListProductsData } from './ListProducts'

export const HelloUser = (props) => {
    const { title } = props

     return (
      <h1 className="hello-user">Hello, {title}</h1>
    );
}