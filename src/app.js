// stateless functional component Header, Action, Option, Options

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            options: ['Thing one', 'Thing two', 'Thing three', 'Thing four']
        };

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }

    handlePick(){
        let randomNumber = Math.floor(Math.random() * this.state.options.length);

        alert(this.state.options[randomNumber])
    }

    handleAddOption(option){
        this.setState((prevState) => {
            return{
                options: prevState.options.concat([option])
            }
        })
    }

    render(){

        return (
            <div>
                <Header />
                <Action hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick} />
                <Options data={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption = {this.handleAddOption} />
            </div>
        )
    }

}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of computer'
}

const Action = (props) => {
    return (
        <div>
            <button className='button' 
                onClick={props.handlePick} 
                disabled={!props.hasOptions} 
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button className="button" onClick={props.handleDeleteOptions}>Remove all</button>
            {props.data.map((option) => {return <Option key = {option} optionText={option} />})}
        </div>
    )
}

const Option = (props) => {
    return (
        <div className="option">
            <textarea name="option" id="" cols="30" rows="2">{props.optionText}</textarea>
        </div> 
    )
}


class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(event){
        event.preventDefault()

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return{
                error
            }
        })
                
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option'/>
                    <button className="button">Add new option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));