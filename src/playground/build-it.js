
class Visibility extends React.Component{
    constructor(props){
        super(props);

        this.handleVisibilty = this.handleVisibilty.bind(this);

        this.state = {
            visibilty: false
        };
    }

    handleVisibilty(){
    
        this.setState((prevState) => {
            return{
                visibilty: !prevState.visibilty
            }
        })
    }

    render(){
        
        return(
            <div className="Visibility">
                <h1>Visibiltity toggle</h1>
                <button className="button" onClick={this.handleVisibilty}>{this.state.visibilty ? 'Hide' : 'Show'}</button>
                {this.state.visibilty === true ? <p>Loremasdasd</p> : ''}
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'))