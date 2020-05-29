
class Toggle extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showText: false
        }

        this.toggleText = this.toggleText.bind(this)
    }

    toggleText() {
        this.setState(prevState => {
            return {
                showText: !prevState.showText
            }
        })
    }

    render() {

        const { showText } = this.state
        return (
            <div>
                <button onClick={this.toggleText}>{showText ? 'Hide' : 'Show'}</button>
                {showText ? <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, magni. Ab nostrum at laudantium deserunt dolorum suscipit, natus alias ipsam in aperiam eveniet aliquam vel placeat soluta excepturi reiciendis optio?</p> : null}
            </div>
        )
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'))