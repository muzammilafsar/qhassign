import React, {useEffect} from 'react';
import qs from 'qs';
import { CLIENT_ID } from '../..';
const Authorization = () => {
    useEffect(() => {
        let qp = {
            client_id: CLIENT_ID,
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