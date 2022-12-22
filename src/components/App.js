import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{

    state={images:[]};

    //another way to get response using async and wait statement(async await syntax)
    onSearchSubmit=async (term)=>{
       const response=await unsplash.get('/search/photos',{
            params:{query:term}    
        });
       
        this.setState({images:response.data.results});


        //this is one way to get response from api request(promise base syntax)
        // .then((response)=>{
        //     console.log(response.data.results);
        // }
        // ); 
    }

    render(){
        return(
            <div className=" ui container" style={{marginTop:'10px'}}>
                 <SearchBar onSubmit={this.onSearchSubmit}/>
                 {/* Found:{this.state.images.length} Images */}
                 <ImageList images={this.state.images}/>
            </div>
         );
    }
}

export default App;




/*
-component renders itself one time with no list of images
-onSearchSubmit method called
-request made to unsplash
wait
-request complete
-set image data on state of app component
-app component rerenders and shows images
*/