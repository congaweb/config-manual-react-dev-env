import { createElement as h } from 'react';
import { render } from 'react-dom';
import { App } from './components';

// ReactDOM render
render(h(App, { greetingMessage: '안녕! React' }), document.getElementById('root'));
