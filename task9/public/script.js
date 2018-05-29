var moduleScript = (function () {

    function loadPhotoPosts() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/allPosts');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    JSON.parse(xhr.responseText);
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send();
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function loadUsers() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/getAllUsers');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    JSON.parse(xhr.responseText);
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send();
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function editPhotoPost(photoPost) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', `/editPost?id=${photoPost.id}`);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send(JSON.stringify(photoPost));
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function getPhotoPosts(photoPosts) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', `/getPosts`);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send(JSON.stringify(photoPosts));
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }


    function removePhotoPost(id) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            console.log(id);
            xhr.open('DELETE', `/removePost?id=${id}`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    JSON.parse(xhr.responseText);
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send();
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function addPhotoPost(photoPost) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/addPost');
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    JSON.parse(xhr.responseText);
                    resolve(xhr.responseText);
                } else {
                    reject(new Error(xhr.statusText));
                }
            };

            xhr.send(JSON.stringify(photoPost));
        }).then(data => JSON.parse(data))
            .catch((error) => {
                throw error;
            });
    }

    function searchMaxId(photoPosts) {
        var max = 0;
        var id;
        photoPosts.forEach(function (item, i, photoPosts) {
            id = photoPosts[i].id;
            if (max < parseInt(id)) {
                max = id;
            }
        });
        return max;
    }

   

    function compareDate(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
    }

    function sortPostsByDate(posts) {
        posts.sort(compareDate);
        return posts;
    }

    function getIndex(id, photoPosts) {
        for (var index = 0; index < photoPosts.length; index++) {//Array.findIndex
            if (photoPosts[index].id === id) {
                return index;
            }
        }
    }



    return {
        loadUsers: loadUsers,
        searchMaxId: searchMaxId,
        removePhotoPost: removePhotoPost,
        sortPostsByDate: sortPostsByDate,
        getIndex: getIndex,
        loadPhotoPosts: loadPhotoPosts,
        editPhotoPost: editPhotoPost,
        addPhotoPost: addPhotoPost,
        getPhotoPosts: getPhotoPosts
    }

}());