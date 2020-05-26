'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle for the app',
    options: ['option 1', 'option 2']
};

var title = app.title,
    subtitle = app.subtitle,
    options = app.options;


var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        title
    ),
    subtitle ? React.createElement(
        'p',
        null,
        subtitle
    ) : null,
    options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are the options'
    ) : React.createElement(
        'p',
        null,
        'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// ======================================
var multiplier = {
    numbers: [3, 5, 8],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this = this;

        var result = this.numbers.map(function (item) {
            return item * _this.multiplyBy;
        });
        console.log(result);
    }
};

multiplier.multiply();

ReactDOM.render(template, document.getElementById('app'));
