
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

export const getImageList = () => {
    return fetch("https://picsum.photos/v2/list?page=2&limit=100").then(val => val.json());
}
export const addToFav = (image) =>  {
    let images = JSON.parse(localStorage.getItem("favs"));
    if(!images) {
        let newImages = [image];
        localStorage.setItem("favs", JSON.stringify(newImages));
    } else {
        images.push(image);
        localStorage.setItem("favs", JSON.stringify(images));
    }
}
export const removeFav = (image) =>  {
    let images = JSON.parse(localStorage.getItem("favs"));
    if(images) {
        let found= images.findIndex(val => val ===image);
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