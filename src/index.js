import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import React from 'react';

import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import Root from './page/Root';

bridge.send('VKWebAppInit');

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
