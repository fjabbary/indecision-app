function addOne() {
    count++
    renderCounterApp();
}

function minusOne() {
    count--;
    renderCounterApp();
}

function reset() {
    count = 0;
    renderCounterApp();
}


let count = 0;

const renderCounterApp = () => {
    var template2 = (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

    ReactDOM.render(template2, document.getElementById('app'))
}

renderCounterApp();