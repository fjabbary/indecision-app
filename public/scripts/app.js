'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle for the app',
    options: []
};

var title = app.title,
    subtitle = app.subtitle;


var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();
    var newOption = e.target.option.value;

    if (newOption) {
        app.options.push(newOption);
        e.target.option.value = '';
    }

    renderOptions();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderOptions();
};

var onMakeDecision = function onMakeDecision() {
    var random = Math.floor(Math.random() * app.options.length);
    var pickedOption = app.options[random];
    alert(pickedOption);
};

var showText = false;
var toggleText = function toggleText() {
    showText = !showText;
    renderOptions();
};

var renderOptions = function renderOptions() {
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
        app.options.length > 0 ? React.createElement(
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
            app.options.map(function (item, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitForm },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'button',
            { onClick: onMakeDecision, disabled: app.options.length == 0 },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: toggleText },
            showText ? 'Hide details' : 'Show details'
        ),
        showText && React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia sint dolorem rerum eos qui error minima, non itaque perferendis quia nulla nihil exercitationem explicabo blanditiis? Distinctio eveniet corporis inventore?'
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderOptions();
