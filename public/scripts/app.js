'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: [],
            error: ''
        };

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var options = this.state.options;

            var randNum = Math.floor(Math.random() * options.length);
            var selectedOption = options[randNum];
            alert(selectedOption);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (this.state.options.indexOf(option) > -1) {
                this.setState(function () {
                    return {
                        error: 'Item already exists'
                    };
                });
            } else {
                this.setState(function (prevState) {
                    return {
                        options: [].concat(_toConsumableArray(prevState.options), [option]),
                        error: ''
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll }),
                React.createElement(AddOption, { addOption: this.handleAddOption, error: this.state.error })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Indecision'
        ),
        React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet.'
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'button',
        { onClick: props.handlePick, disabled: !props.hasOptions },
        'What should I do?'
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemoveAll },
            'Remove All'
        ),
        props.options.map(function (item, index) {
            return React.createElement(Option, { key: index, option: item });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'p',
        null,
        props.option
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onAddOption = _this2.onAddOption.bind(_this2);

        console.log(_this2.props);
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'onAddOption',
        value: function onAddOption(e) {
            e.preventDefault();
            var newOption = e.target.option.value;

            if (newOption) {
                this.props.addOption(newOption);
                e.target.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.onAddOption },
                React.createElement('input', { type: 'text', placeholder: 'Enter new option', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    'Add Option'
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.error
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
