
class IndecisionApp extends React.Component {
    render() {

        const options = ['Thing One', 'Thing Two', 'Thing Three']

        return (
            <div>
                <Header />
                <Action />
                <Options options={options} />
                <AddOption />
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

    onHandlePick() {
        console.log('Handle pick')
    }

    render() {
        return (
            <button onClick={this.onHandlePick}>What should I do?</button>
        )
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props)

        this.onRemoveAll = this.onRemoveAll.bind(this)
    }


    onRemoveAll() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <button onClick={this.onRemoveAll}>Remove All</button>
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

    onAddOption(e) {
        e.preventDefault();
        const newOption = e.target.option.value
        if (newOption) {
            alert(newOption)
            e.target.option.value = '';
        }

    }

    render() {
        return (
            <form onSubmit={this.onAddOption}>
                <input type="text" placeholder="Enter new option" name="option" />
                <button>Add Option</button>
            </form>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))