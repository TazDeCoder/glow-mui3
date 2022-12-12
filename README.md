# Glow Mui3

A collection of React UI and utility components adapted from Google's Material Design 3

## Background

The aim of this project is to adapt (not adopt) upon the design principles of Material Design 3 using React. Therefore, we would want to add versatility to our implementation of this design system to allow for a unique, holistic approach to building for the web.

## Features

- **Glow.** Adoptation of the **"glow effect"** for our components as a design style choice, hence the name of this package :¬)
- **Themeable.** Embrace the nature of [Theme UI](https://github.com/system-ui/theme-ui) which supports theme-aware driven styles so you can build custom themes on the fly
- **Lightweight.** Package size is only 18 kB (minified and gzipped). We use [Size Limit](https://github.com/ai/size-limit) to control the size

## Install

### Prerequisites

Make sure your project meets the following requirements in order for the package to work:

- node >=18.12.1
- react >=17
- react-dom >=17

### Run

```sh
$ npm install glow-mui3 @theme-ui/core @emotion/react
```

```sh
$ yarn add glow-mui3 @theme-ui/core @emotion/react
```

### Usage

To use our package you need to wrap your app with a `ThemeProvider` provided by **theme-ui** and pass our **defaultTheme** as a theme for the provider.

Here is an example in the index.js file of an app created with Create React App:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from '@theme-ui/core';
import { defaultTheme } from 'glow-mui3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

Import components and use them like so:

```javascript
import { Button } from 'glow-mui3';

const App = () => (
  <Button onClick={() => console.log('Glow Mui3 is awesome!')}>
    Click Me!
  </Button>
);
```

## Development

For a brief guide on how to contribute to this project can be found [here](https://github.com/TazDeCoder/glow-mui3/blob/main/CONTRIBUTING).

## Maintainers

- [@TazDeCoder](https://github.com/TazDeCoder)

## License

Copyright © 2022 [Tarwat Uddin](https://github.com/TazDeCoder)

This project is [MIT](https://github.com/TazDeCoder/glow-mui3/blob/main/LICENSE) licensed.
