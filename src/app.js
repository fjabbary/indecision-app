
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
            this.setState(() => {
                return {
                    error: 'Item already exists'
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    options: [...prevState.options, option],
                    error: ''
                }
            })
        }
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

const Header = () => {
    return (
        <div>
            <h1>Indecision</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

const Action = (props) => {
    return (
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {props.options.map((item, index) => <Option key={index} option={item} />)}
        </div>
    )
}

const Option = (props) => {
    return (
        <p>{props.option}</p>
    )
}


class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.onAddOption = this.onAddOption.bind(this);

        console.log(this.props)
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