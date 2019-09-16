import React, {useState} from 'react';
import "./ImageListing.scss";
import { getImageList, addToFav, removeFav } from '../../services';
import ImageCard from './ImageCard';
import { withRouter } from 'react-router-dom';

class ImageListing extends React.PureComponent {
    state = {
        list: []
    }
    componentDidMount() {
        getImageList().then(val => {
            console.log(val);
            this.setState({list: val});
        });
    }
    render() {
        return (    
          <div className="image-listing-container row">
              {
                  this.state.list.map(val => {
                    return <ImageCard add={addToFav} remove={removeFav} src={val.urls.small} user={this.props.user}/>}
                    )
              }
          </div>
        );
      }
}

export default withRouter(ImageListing);
