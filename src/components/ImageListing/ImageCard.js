import React, {useState} from 'react';
import "./ImageListing.scss";
import { getImageList } from '../../services';

function ImageCard({src, add, remove, user, checked}) {
  console.log(user)
    const [fav, setFav] = useState(checked);
        return (
          <div className="image-card">
              <img src={src} className="image"/>
              <span class={`fa fa-star ${fav ? 'checked' : ''} fav`} onClick={() => {
                  fav? remove(src,user): add(src, user);
                  setFav(!fav, user);}}></span>
          </div>
        );
      }

export default ImageCard;
