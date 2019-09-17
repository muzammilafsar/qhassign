import qs from 'qs';
export const InitiateLogin = ({username, password}) => {
    let users = JSON.parse(localStorage.getItem("users"));
    console.log(username,password, users);
    return new Promise((res, rej) => {
        let found = users.find(val => val.username === username && val.password === password);
        if(!username || !password) {
            rej({
                message: "All fields are mandatory"
            });
        }
        setTimeout(() => {
            if(found) {
                res(found);
            } else {
                rej({
                    message: "You username/password is incorrect"
                });
            }
        }, 2000);
    });
}

export const getImageList = (page) => {
    let auth = JSON.parse(localStorage.getItem("auth"));
    let token = "";
    if(auth && auth.access_token)
    {
        token = auth.access_token;
    }
    return fetch('https://api.unsplash.com/photos?per_page=20', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization': 'Bearer ' + token ,
        },
    }).then(val => val.json());
}
export const addToFav = (image, user) =>  {
    console.log(user)
    let images = JSON.parse(localStorage.getItem("favs"));
    if(!images) {
        let newImages = [{src: image, user}];
        localStorage.setItem("favs", JSON.stringify(newImages));
    } else {
        images.push({src: image, user});
        localStorage.setItem("favs", JSON.stringify(images));
    }
}
export const removeFav = (image, user) =>  {
    let images = JSON.parse(localStorage.getItem("favs"));
    if(images) {
        console.log(user);
        let found= images.findIndex(val => val.src === image && val.user === user);
        console.log(found, images, );
        if(found >= 0) {
            images.splice(found, 1 );
            localStorage.setItem("favs", JSON.stringify(images));
        }
    }
}
export const users = [
    {
        username: "admin1",
        password: "mypass"
    },
    {
        username: "admin2",
        password: "mypass"
    },
    {
        username: "admin3",
        password: "mypass"
    }
];

export const getToken = (code) => {
    let qp = {
        client_id: "8f67b0516f7ac3b324337fcec94dfaacef7584530abe1753e632a6a7828a3a65",
        client_secret: "0d0a143e160f782649112d5d033348826b0bf760f1df6d98306f8e52324046e4",
        redirect_uri: "http://localhost:3000",
        code,
        grant_type: "authorization_code"
      }
        return fetch('https://unsplash.com/oauth/token?'+ qs.stringify(qp),{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                body: JSON.stringify(qp), // body data type must match "Content-Type" header
            })
            .then(response => response.json());
    }