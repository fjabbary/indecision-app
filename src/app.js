
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            options: [],
            error: ''
        }

        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const { options } = this.state;
        const randNum = Math.floor(Math.random() * options.length)
        const selectedOption = options[randNum]
        alert(selectedOption)
    }


    handleAddOption(option) {

        if (this.state.options.indexOf(option) > -1) {
            this.state(() => {
                return {
                    error: 'Item already exists'
                }
            })
        }


        this.setState(prevState => {
            return {
                options: [...prevState.options, option]
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} />
                <AddOption addOption={this.handleAddOption} error={this.state.error} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                {this.props.options.map((item, index) => <Option key={index} option={item} />)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        const { option } = this.props;
        return (
            <p>{option}</p>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.onAddOption = this.onAddOption.bind(this);
    }

    onAddOption(e) {
        e.preventDefault();
        const newOption = e.target.option.value;

        if (newOption) {
            this.props.addOption(newOption)
            e.target.option.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.onAddOption}>
                <input type="text" placeholder="Enter new option" name="option" />
                <button>Add Option</button>
                <p>{this.props.error}</p>
            </form>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch