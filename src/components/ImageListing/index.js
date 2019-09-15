import React, {useState} from 'react';
import "./ImageListing.scss";
import { getImageList, addToFav, removeFav } from '../../services';
import ImageCard from './ImageCard';

class ImageListing extends React.PureComponent {
    state = {
        list: []
    }
    componentDidMount() {
        getImageList().then(val => {
            console.log(val);
            this.setState({list: val});
        })
    }
    render() {
        return (
          <div className="image-listing-container row">
              {
                  this.state.list.map(val => {
                    return <ImageCard add={addToFav} remove={removeFav} src={"https://cdn.jumeirah.com/-/media/DH/Hospitality/Jumeirah/Article/Stories/Romance/How-to-plan-the-perfect-wedding-in-the-Maldives/Jumeirah-Vittaveli---Wedding-Ceremony_6-4.jpg?h=1080&w=1620&hash=E49BF717204EFB2F337849CE86B11BA1"}/>}
                    )
              }
          </div>
        );
      }
}

export default ImageListing;
