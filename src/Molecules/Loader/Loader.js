import React from 'react';
import "./Loader.scss";

function Loader({ loading }) {

    return (
        <React.Fragment>
            {
                loading ?
                <div className="loader-container">
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>    
                </div>
                    : ""
            }

        </React.Fragment>
    );
}
Loader.defaultProps = {
    loading: false
}

export default Loader;
