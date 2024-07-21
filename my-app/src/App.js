import logo from './logo.svg';
import './App.css';
import React from 'react';

// Начало Императивного стиля
const currentDate = new Date().getFullYear();
// Конец Императивного стиля

// Начало Императивного стиля
export const App = () => {
    return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(
            'header',
            { className: 'App-header' },
            React.createElement('img', {
                src: logo,
                className: 'App-logo',
                alt: 'logo',
            }),
            React.createElement(
                'p',
                null,
                'This is ',
                React.createElement('b', null, React.createElement('u', null, 'Imperative style.')),
                ' In file ',
                React.createElement('code', null, 'src/App.js'),
                ' component App.',
            ),
            React.createElement(
                'a',
                {
                    className: 'App-link',
                    href: 'https://reactjs.org',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
                'Learn React',
            ),
            React.createElement('p', null, currentDate, ' год'),
        ),
    );
};
// Конец Императивного стиля
