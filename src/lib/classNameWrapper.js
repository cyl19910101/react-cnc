import React from 'react';
import combineClassName from 'classnames';

export default ( Component, ...classNames ) => ( { className, ...rest } ) => (
  <Component className={combineClassName ( className, ...classNames )} {...rest}/>
);