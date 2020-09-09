import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { trackPromise } from 'react-promise-tracker';

class App extends React.Component {
  state = { images: []

  };

  onSearchSubmit = async term =>{
    if(term!==""){
    
    const response = await trackPromise( unsplash.get('/search/photos', {
      params: { query: term }
    }).then(response =>{
      this.setState({ images: response.data.results })
    }) 
    )
    
  }else{
    alert("must include text");
  }
};

 

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
