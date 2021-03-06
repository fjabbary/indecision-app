
class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)

        this.state = {
            count: props.count
        }
    }

    componentDidMount() {
        const count = parseFloat(localStorage.getItem('count'))
        this.setState(() => ({ count }))
    }

    componentDidUpdate() {
        console.log('Updated!')
        localStorage.setItem('count', JSON.stringify(this.state.count))
    }

    addOne() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    minusOne() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    reset() {
        this.setState(prevState => {
            return {
                count: 0
            }
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 1000
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

