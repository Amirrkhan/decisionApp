const appRoot = document.getElementById('app');

const app = {
    name: 'Indecision app',
    subtitle: 'Put your life in the hands of computer',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if(option){
        app.options.push(option)
        event.target.elements.option.value = '';
    }

    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    if(option){
        alert(option)
    }
    else
        alert('Nothing to show')
};

const purgeArray = () => {
    app.options = []
    renderIndecisionApp()
}

const dataRender = (array) => {
    return array.map((element, index) => {
        return (<li key={index}>{element}</li>)
    })
}


const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.name}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'no options' }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={purgeArray}>Remove All</button>
            <ol>
                {dataRender(app.options)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button className="button">Add option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)    
} 

renderIndecisionApp();








// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
