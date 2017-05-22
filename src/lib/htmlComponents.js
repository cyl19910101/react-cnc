import React from 'react';

export const DIV = ( { refHandler, children, ...rest } ) => (
  <div ref={refHandler} {...rest}>{children}</div>
);

export const SPAN = ( { refHandler, children, ...rest } ) => (
  <span ref={refHandler} {...rest}>{children}</span>
);

export const A = ( { refHandler, children, ...rest } ) => (
  <a ref={refHandler} {...rest}>{children}</a>
);

export const IMG = ( { refHandler, children, ...rest } ) => (
  <img ref={refHandler} {...rest}>{children}</img>
);

export const LABEL = ( { refHandler, children, ...rest } ) => (
  <label ref={refHandler} {...rest}>{children}</label>
);

export const NAV = ( { refHandler, children, ...rest } ) => (
  <nav ref={refHandler} {...rest}>{children}</nav>
);

export const UL = ( { refHandler, children, ...rest } ) => (
  <ul ref={refHandler} {...rest}>{children}</ul>
);

export const SECTION = ( { refHandler, children, ...rest } ) => (
  <section ref={refHandler} {...rest}>{children}</section>
);

export const ARTICLE = ( { refHandler, children, ...rest } ) => (
  <article ref={refHandler} {...rest}>{children}</article>
);

export const ASIDE = ( { refHandler, children, ...rest } ) => (
  <aside ref={refHandler} {...rest}>{children}</aside>
);

export const FIGCAPTION = ( { refHandler, children, ...rest } ) => (
  <figcaption ref={refHandler} {...rest}>{children}</figcaption>
);

export const FIGURE = ( { refHandler, children, ...rest } ) => (
  <figure ref={refHandler} {...rest}>{children}</figure>
);

export const FOOTER = ( { refHandler, children, ...rest } ) => (
  <footer ref={refHandler} {...rest}>{children}</footer>
);

export const OL = ( { refHandler, children, ...rest } ) => (
  <ol ref={refHandler} {...rest}>{children}</ol>
);

export const LI = ( { refHandler, children, ...rest } ) => (
  <li ref={refHandler} {...rest}>{children}</li>
);

export const INPUT = ( { refHandler, ...rest } ) => (
  <input ref={refHandler} {...rest}/>
);

export const P = ( { refHandler, children, ...rest } ) => (
  <p ref={refHandler} {...rest}>{children}</p>
);

export const H1 = ( { refHandler, children, ...rest } ) => (
  <h1 ref={refHandler} {...rest}>{children}</h1>
);

export const H2 = ( { refHandler, children, ...rest } ) => (
  <h2 ref={refHandler} {...rest}>{children}</h2>
);

export const H3 = ( { refHandler, children, ...rest } ) => (
  <h3 ref={refHandler} {...rest}>{children}</h3>
);

export const H4 = ( { refHandler, children, ...rest } ) => (
  <h4 ref={refHandler} {...rest}>{children}</h4>
);

export const H5 = ( { refHandler, children, ...rest } ) => (
  <h5 ref={refHandler} {...rest}>{children}</h5>
);

export const H6 = ( { refHandler, children, ...rest } ) => (
  <h6 ref={refHandler} {...rest}>{children}</h6>
);

export const TABLE = ( { refHandler, children, ...rest } ) => (
  <table ref={refHandler} {...rest}>{children}</table>
);

export const THEAD = ( { refHandler, children, ...rest } ) => (
  <thead ref={refHandler} {...rest}>{children}</thead>
);

export const TR = ( { refHandler, children, ...rest } ) => (
  <tr ref={refHandler} {...rest}>{children}</tr>
);

export const TH = ( { refHandler, children, ...rest } ) => (
  <th ref={refHandler} {...rest}>{children}</th>
);

export const TBODY = ( { refHandler, children, ...rest } ) => (
  <tbody ref={refHandler} {...rest}>{children}</tbody>
);


export const TD = ( { refHandler, children, ...rest } ) => (
  <td ref={refHandler} {...rest}>{children}</td>
);