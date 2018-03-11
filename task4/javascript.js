var myModule = (function () {

    var photoPosts = [
        {
            id: '1',
            description: 'description1',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author1',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag7', 'hashtag5', 'hashtag3', 'hashtag4'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '2',
            description: 'description2',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author2',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag2', 'hashtag3'],
            likes: ['name3', 'name2', 'name5']
        },
        {
            id: '3',
            description: 'description3',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author2',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag6'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '4',
            description: 'description4',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author4',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag9', 'hashtag2'],
            likes: ['name4', 'name5', 'name7']
        },
        {
            id: '5',
            description: 'description5',
            createdAt: new Date('2018-01-23T23:00:00'),
            author: 'Author5',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag2'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '6',
            description: 'description6',
            createdAt: new Date('2018-02-23T23:40:00'),
            author: 'Author6',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag8'],
            likes: ['name7', 'name2', 'name3']
        },
        {
            id: '7',
            description: 'description3',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author7',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag10', 'hashtag2'],
            likes: ['name10', 'name2', 'name3']
        },
        {
            id: '8',
            description: 'description8',
            createdAt: new Date('2018-02-22T23:00:00'),
            author: 'Author8',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag4'],
            likes: ['name1', 'name4', 'name3']
        },
        {
            id: '9',
            description: 'description9',
            createdAt: new Date('2018-01-23T23:00:00'),
            author: 'Author9',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag2'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '10',
            description: 'description10',
            createdAt: new Date('2018-02-23T23:08:00'),
            author: 'Author10',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag2'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '11',
            description: 'description11',
            createdAt: new Date('2018-02-23T23:00:10'),
            author: 'Author11',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag2'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '12',
            description: 'description12',
            createdAt: new Date('2017-02-23T23:00:00'),
            author: 'Author12',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag2'],
            likes: ['name1', 'name12', 'name3']
        },
        {
            id: '13',
            description: 'description13',
            createdAt: new Date('2018-01-23T23:00:00'),
            author: 'Author13',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag2', 'hashtag3', 'hashtag4'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '14',
            description: 'description14',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author14',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag5', 'hashtag2', 'hashtag3', 'hashtag4'],
            likes: ['name1', 'name4', 'name3']
        },
        {
            id: '15',
            description: 'description15',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author15',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag5', 'hashtag3', 'hashtag6'],
            likes: ['name6', 'name2', 'name3']
        },
        {
            id: '16',
            description: 'description16',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author16',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag4', 'hashtag2', 'hashtag7', 'hashtag8'],
            likes: ['name7', 'name2', 'name3']
        },
        {
            id: '17',
            description: 'description17',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author17',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag2', 'hashtag3', 'hashtag4'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '18',
            description: 'description18',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author18',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag1', 'hashtag2', 'hashtag3', 'hashtag4'],
            likes: ['name1', 'name2', 'name3']
        },
        {
            id: '19',
            description: 'description19',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author19',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag5', 'hashtag2', 'hashtag3', 'hashtag4'],
            likes: ['name5', 'name2', 'name3']
        },
        {
            id: '20',
            description: 'description20',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Author20',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashtags: ['hashtag7', 'hashtag5', 'hashtag3', 'hashtag4'],
            likes: ['name10', 'name2', 'name3']
        },
    ];

    function getPhotoPost(temp) {
        for (var item in photoPosts) {
            if (photoPosts[item].id == temp) {
                for (var itemHashtag in photoPosts[item].hashtags) {
                    console.log(photoPosts[item].hashtags[itemHashtag] + ' ')
                }
                console.log(photoPosts[item].id + ' ' + photoPosts[item].author + ' ' + photoPosts[item].createdAt + ' ' + photoPosts[item].description + ' ' + photoPosts[item].photoLink);
                return photoPosts[item];
            }
        }
        return 0;
    }
    function validatePhotoPost(post) {
        for (var item in post.hashtags) {
            if (typeof post.hashtags[item] !== 'string') {
                return false;
            }
        }
        if ((!post.hasOwnProperty('id')) || typeof post.id !== 'string') {
            console.log("error1");
            return false;
        }
        else {
            if (getIndex(post.id) >= 0) {
                return false;
            }
        }
        if ((!post.hasOwnProperty('photoLink')) || typeof post.photoLink !== 'string') {
            console.log("error2");
            return false;
        }
        else {
            if (post.photoLink.lenght == 0) {
                return false;
            }
        }
        if ((!post.hasOwnProperty('author')) || typeof post.author !== 'string') {
            console.log("error3");
            return false;
        }
        else {
            if (post.author.lenght == 0) {
                return false;
            }
        }
        if (!post.hasOwnProperty('createdAt')) {
            console.log("error4");
            return false;
        }
        else {
            if (post.createdAt instanceof Date) {
                return false;
            }
        }
        if ((!post.hasOwnProperty('description')) || typeof post.description !== 'string') {
            console.log("error5");
            return false;
        }
        else {
            if (post.description.lenght == 0 || post.description.lenght >= 200) {
                return false;
            }
        }
        return true;
    }

    function addPhotoPost(post) {
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            return true;
        }
        return false;
    }

    function getIndex(id) {
        for (var item in photoPosts) {
            if (photoPosts[item].id == id) {
                return item;
            }
        }
        return -1;
    }

    function removePhotoPost(id) {
        if (getIndex(id) >= 0) {
            photoPosts.splice(getIndex(id), 1);
            return true;
        }
        return false;
    }


    function editPhotoPost(id, post) {
        if (!post) {
            return false;
        }
        if (id == undefined) {
            return false;
        }
        var temp = 0;
        if (getIndex(id) >= 0) {
            if (post.hasOwnProperty('id')) {
                return false;
            }
            if (post.hasOwnProperty('createdAt')) {
                return false;
            }
            if (post.hasOwnProperty('author')) {
                return false;
            }
            if (post.hasOwnProperty('description')) {
                console.log('description');
                photoPosts[getIndex(id)].description = post.description;
                temp = -1;
            }
            if (post.hasOwnProperty('hashtags')) {
                photoPosts[getIndex(id)].hashtags = post.hashtags;
                temp = -1;
            }
            if (post.hasOwnProperty('photoLink')) {
                console.log('link');
                photoPosts[getIndex(id)].photoLink = post.photoLink;
                temp = -1;
            }
            if (temp == -1) {
                return true;
            }
        }
        console.log('incorrect');
        return false;
    }

    function compareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    function getPhotoPosts(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        photoPosts.sort(compareDates);
        var ArrayObject = photoPosts.slice(0, photoPosts.length);
        if (filterConfig == undefined) {
            photoPosts.sort(compareDates);
            ArrayObject = photoPosts.slice(skip, skip + top);
            return ArrayObject;
        }

        if (filterConfig.hasOwnProperty('author')) {
            for (var i = ArrayObject.length - 1; i >= 0; i--) {
                if (ArrayObject[i].author !== filterConfig.author) {
                    ArrayObject.splice(i, 1);
                }
            }
        }

        if (filterConfig.hasOwnProperty('data')) {
            for (var i = ArrayObject.length - 1; i >= 0; i--) {
                if (ArrayObject[i].createdAt.getTime() !== filterConfig.data.getTime()) {
                    ArrayObject.splice(i, 1);
                }
            }
        }
        if (filterConfig.hasOwnProperty('hashtags')) {
            var temp;
            for (var i = ArrayObject.length - 1; i >= 0; i--) {
                temp = 0;
                for (var j in ArrayObject[i].hashtags) {
                    if (ArrayObject[i].hashtags[j] === filterConfig.hashtags) {
                        temp = 1;
                    }
                }
                if (temp == 1) {
                    ArrayObject.splice(i, 1);
                }
            }

        }
        if (ArrayObject.length <= 10) {
            return ArrayObject;
        }
        return ArrayObject.slice(skip, skip + top);

    }
    return {
        removePhotoPost: removePhotoPost,
        editPhotoPost: editPhotoPost,
        addPhotoPost: addPhotoPost,
        validatePhotoPost: validatePhotoPost,
        getPhotoPost: getPhotoPost,
        getPhotoPosts: getPhotoPosts
    }
})();


console.log(myModule.getPhotoPosts(0, 10, { data: new Date('2018-02-23T23:00:00') }));
console.log(myModule.getPhotoPosts(10, 10, { hashtags: 'hashtag1' }));
console.log(myModule.getPhotoPosts(0, 10, { author: 'author3' }));
myModule.editPhotoPost('6', { photoLink: 'http://edit' });
myModule.getPhotoPost('6');
myModule.editPhotoPost('5', { description: 'edit' });
myModule.getPhotoPost('5');
myModule.editPhotoPost('7', { id: '8' });
myModule.getPhotoPost('7');
myModule.addPhotoPost({
    id: '21',
    description: 'description21',
    createdAt: new Date('2018-02-23T21:00:00'),
    author: 'Author21',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
    hashtags: ['hashtag1', 'hashtag8'],
    likes: ['name21', 'name2', 'name3']
});
myModule.getPhotoPost('21');
myModule.editPhotoPost('4', { description: 'edit' });
myModule.removePhotoPost('4');
myModule.editPhotoPost('1', { hashtags: ['hashtag1', 'hashtag8'] });
myModule.getPhotoPost('1');


