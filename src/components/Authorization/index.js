import React, {useEffect} from 'react';
import qs from 'qs';
const Authorization = () => {
    useEffect(() => {
        let qp = {
            client_id: "8f67b0516f7ac3b324337fcec94dfaacef7584530abe1753e632a6a7828a3a65",
            redirect_uri: "http://localhost:3000",
            response_type: "code",
            scope: "public"
          }
          let url = "https://unsplash.com/oauth/authorize?"+ qs.stringify(qp);
          window.location = url;
    })
    return <React.Fragment></React.Fragment>
}
export default Authorization;