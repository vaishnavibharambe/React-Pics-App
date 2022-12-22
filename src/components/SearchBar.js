import React from 'react';

class SearchBar extends React.Component{
    //uncontrolled way
    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    //controlled way
    state={term:''};

    onFormSubmit=(event)=>{
        event.preventDefault();
        //console.log(this.state.term);

        this.props.onSubmit(this.state.term);
    }
    
    // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }
    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                {/* <form onSubmit={(event)=>this.onFormSubmit(event)} className="ui form"> */}
                    <div className="field">
                    <label>Image Search</label>
                    <input type="text"
                    value={this.state.term}
                    onChange={(e)=>this.setState({term:e.target.value})}/>
                    {/* <input type="text" onChange={this.onInputChange}/> */}
                    {/* another way to handle the event without creating function above.. just use arrow function.
                    <input type="text" onChange={(event)=>console.log(event.target.value)}/> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;





/*flow
-user types in input
-callback gets invoked
-we call setState with the new value
-Component rerenders
-input is told what its value is(coming from state)(value prop)
*/