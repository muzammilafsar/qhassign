import React, {useState} from 'react';
import "./ImageListing.scss";
import { getImageList } from '../../services';

function ImageCard({src, add, remove}) {
    const [fav, setFav] = useState(false);
        return (
          <div className="image-card col-md-4">
              <img src={src} />
              <span class={`fa fa-star ${fav ? 'checked' : ''} fav`} onClick={() => {
                  fav? remove(src): add(src);
                  setFav(!fav);}}></span>
          </div>
        );
      }

export default ImageCard;
