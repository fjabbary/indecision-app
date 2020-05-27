// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle for the app',
    options: []
}

const { title, subtitle } = app;

const onSubmitForm = (e) => {
    e.preventDefault();
    const newOption = e.target.option.value

    if (newOption) {
        app.options.push(newOption)
        e.target.option.value = '';
    }

    renderOptions();
}

const onRemoveAll = () => {
    app.options = [];
    renderOptions();
}

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length)
    const pickedOption = app.options[random]
    alert(pickedOption)
}


let showText = false;
const toggleText = () => {
    showText = !showText
    renderOptions()
}

const renderOptions = () => {
    var template = (
        <div>
            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
            {app.options.length > 0 ? <p>Here are the options</p> : <p>No options</p>}
            <ol>
                {app.options.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ol>

            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form><br />
            <button onClick={onRemoveAll}>Remove All</button>
            <button onClick={onMakeDecision} disabled={app.options.length == 0}>What should I do?</button>

            <button onClick={toggleText}>{showText ? 'Hide details' : 'Show details'}</button>

            {showText && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia sint dolorem rerum eos qui error minima, non itaque perferendis quia nulla nihil exercitationem explicabo blanditiis? Distinctio eveniet corporis inventore?</p>}
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'))

}

renderOptions();





