import React from 'react';

export const DIV = ( { children, ...rest } ) => (
  <div {...rest}>{children}</div>
);

export const SPAN = ( { children, ...rest } ) => (
  <span {...rest}>{children}</span>
);

export const A = ( { children, ...rest } ) => (
  <a {...rest}>{children}</a>
);

export const IMG = ( { children, ...rest } ) => (
  <img {...rest}>{children}</img>
);

export const LABEL = ( { children, ...rest } ) => (
  <label {...rest}>{children}</label>
);

export const NAV = ( { children, ...rest } ) => (
  <nav {...rest}>{children}</nav>
);

export const UL = ( { children, ...rest } ) => (
  <ul {...rest}>{children}</ul>
);

export const SECTION = ( { children, ...rest } ) => (
  <section {...rest}>{children}</section>
);

export const ARTICLE = ( { children, ...rest } ) => (
  <article {...rest}>{children}</article>
);

export const ASIDE = ( { children, ...rest } ) => (
  <aside {...rest}>{children}</aside>
);

export const FIGCAPTION = ( { children, ...rest } ) => (
  <figcaption {...rest}>{children}</figcaption>
);

export const FIGURE = ( { children, ...rest } ) => (
  <figure {...rest}>{children}</figure>
);

export const FOOTER = ( { children, ...rest } ) => (
  <footer {...rest}>{children}</footer>
);

export const OL = ( { children, ...rest } ) => (
  <ol {...rest}>{children}</ol>
);

export const LI = ( { children, ...rest } ) => (
  <li {...rest}>{children}</li>
);

export const INPUT = props => (
  <input {...props}/>
);

export const P = ( { children, ...rest } ) => (
  <p {...rest}>{children}</p>
);

export const H1 = ( { children, ...rest } ) => (
  <h1 {...rest}>{children}</h1>
);

export const H2 = ( { children, ...rest } ) => (
  <h2 {...rest}>{children}</h2>
);

export const H3 = ( { children, ...rest } ) => (
  <h3 {...rest}>{children}</h3>
);

export const H4 = ( { children, ...rest } ) => (
  <h4 {...rest}>{children}</h4>
);

export const H5 = ( { children, ...rest } ) => (
  <h5 {...rest}>{children}</h5>
);

export const H6 = ( { children, ...rest } ) => (
  <h6 {...rest}>{children}</h6>
);