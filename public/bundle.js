/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


// class IndecisionApp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             options: [],
//             error: ''
//         }

//         this.handleRemoveAll = this.handleRemoveAll.bind(this)
//         this.handlePick = this.handlePick.bind(this)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.handleRemove = this.handleRemove.bind(this)
//     }

//     componentDidMount() {
//         console.log('component did mount')
//         const options = JSON.parse(localStorage.getItem('options'))

//         if (options) {
//             this.setState(() => ({ options }))
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.options.length !== this.state.options.length) {
//             const json = JSON.stringify(this.state.options)
//             localStorage.setItem('options', json)
//         }
//     }

//     componentWillUnmount() {
//         console.log('component Will Unmount')
//     }

//     handleRemoveAll() {
//         this.setState(() => ({ options: [] }))
//     }

//     handleRemove(option) {
//         this.setState((prevState) => ({
//             options: prevState.options.filter(item => item !== option)
//         }))
//     }

//     handlePick() {
//         const { options } = this.state;
//         const randNum = Math.floor(Math.random() * options.length)
//         const selectedOption = options[randNum]
//         alert(selectedOption)
//     }


//     handleAddOption(option) {

//         if (this.state.options.indexOf(option) > -1) {
//             this.setState(() => ({ error: 'Item already exists' }))

//         } else {
//             this.setState((prevState) => ({
//                 options: [...prevState.options, option],
//                 error: ''
//             }))
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
//                 <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemove={this.handleRemove} />
//                 <AddOption addOption={this.handleAddOption} error={this.state.error} />
//             </div>
//         )
//     }
// }

// const Header = () => {
//     return (
//         <div>
//             <h1>Indecision</h1>
//             <p>Lorem ipsum dolor sit amet.</p>
//         </div>
//     )
// }

// const Action = (props) => {
//     return (
//         <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
//     )
// }

// const Options = (props) => {
//     return (
//         <div>
//             <button onClick={props.handleRemoveAll}>Remove All</button>
//             {props.options.map((item, index) => <Option key={index} option={item} handleRemove={props.handleRemove} />)}
//         </div>
//     )
// }

// const Option = (props) => {
//     return (
//         <div>
//             <span>{props.option}</span>
//             <button onClick={() => { props.handleRemove(props.option) }}>Remove</button>
//         </div>
//     )
// }


// class AddOption extends React.Component {
//     constructor(props) {
//         super(props)
//         this.onAddOption = this.onAddOption.bind(this);
//     }

//     onAddOption(e) {
//         e.preventDefault();
//         const newOption = e.target.option.value;

//         if (newOption) {
//             this.props.addOption(newOption)
//             e.target.option.value = '';
//         }
//     }

//     render() {
//         return (
//             <form onSubmit={this.onAddOption}>
//                 <input type="text" placeholder="Enter new option" name="option" />
//                 <button>Add Option</button>
//                 <p>{this.props.error}</p>
//             </form>
//         )
//     }
// }


// ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


console.log('app is runnings')

/***/ })
/******/ ]);