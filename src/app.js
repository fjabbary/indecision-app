// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle for the app',
    options: ['option 1', 'option 2']
}

const { title, subtitle, options } = app;

var template = (
    <div>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
        {options.length > 0 ? <p>Here are the options</p> : <p>No options</p>}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

// ======================================
const multiplier = {
    numbers: [3, 5, 8],
    multiplyBy: 5,
    multiply: function () {
        const result = this.numbers.map(item => item * this.multiplyBy)
        console.log(result)
    }
}

multiplier.multiply();

ReactDOM.render(template, document.getElementById('app'))