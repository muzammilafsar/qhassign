import React, {useState} from 'react';
// import "./ImageListing.scss";
import { getImageList, addToFav, removeFav } from '../../services';
import ImageCard from '../ImageListing/ImageCard';
import { withRouter } from 'react-router-dom';

class SavedImages extends React.PureComponent {
    state = {
        list: []
    }
    componentDidMount() {
        let favs = localStorage.getItem("favs");
        let user = JSON.parse(localStorage.getItem("authStatus")).user;
        if(favs ) {
            favs = JSON.parse(favs);
            let arr = favs.filter(val=> val.user === user);
            this.setState({list: arr});
        }
    }
    remove = (i) => {
        let list = JSON.parse(JSON.stringify(this.state.list));
        list.splice(i, 1);
        this.setState({list});
    }
    render() {
        return (
          <div className="image-listing-container row">
              {
                  this.state.list.map((val, i) => {
                    return <ImageCard checked={true} add={(a,b) => addToFav(a,b)} remove={(a,b) => {removeFav(a,b); this.remove(i)} } src={val.src} user={this.props.user}/>}
                    )
              }
          </div>
        );
      }
}

export default withRouter(SavedImages);
