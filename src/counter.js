
class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)

        this.state = {
            count: 0
        }
    }

    addOne() {
        this.state.count++
        console.log(this.state.count)
    }

    minusOne() {
        console.log('Minus one')
    }

    reset() {
        console.log('reset')
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



ReactDOM.render(<Counter />, document.getElementById('app'))

