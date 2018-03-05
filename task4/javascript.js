(function () {

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
        for (var i in photoPosts) {
            if (photoPosts[i].id == temp) {
                for (var j in photoPosts[i].hashtags) {
                    console.log(photoPosts[i].hashtags[j] + ' ')
                }
                console.log(photoPosts[i].id + ' ' + photoPosts[i].author + ' ' + photoPosts[i].createdAt + ' ' + photoPosts[i].description + ' ' + photoPosts[i].photoLink);
                return photoPosts[i];
            }
        }
        return 0;
    }
    function validatePhotoPost(object) {
        if (object.hasOwnProperty('id') == false) {
            console.log("error1");
            return false;
        }
        else {
            if (getIndex(object.id) >= 0) {
                return false;
            }
        }
        if (object.hasOwnProperty('photoLink') == false) {
            console.log("error2");
            return false;
        }
        else {
            if (object.photoLink.lenght == 0) {
                return false;
            }
        }
        if (object.hasOwnProperty('author') == false) {
            console.log("error3");
            return false;
        }
        else {
            if (object.author.lenght == 0) {
                return false;
            }
        }
        if (object.hasOwnProperty('createdAt') == false) {
            console.log("error4");
            return false;
        }
        if (object.hasOwnProperty('description') == false) {
            console.log("error5");
            return false;
        }
        else {
            if (object.description.lenght == 0 || object.description.lenght >= 0) {
                return false;
            }
        }
        return true;
    }

    function addPhotoPost(object) {
        var temp = validatePhotoPost(object);
        if (temp == true) {
            photoPosts.push(object);
            return true;
        }
        else return false;
    }

    function getIndex(id) {
        for (var i in photoPosts) {
            if (photoPosts[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    function removePhotoPost(id) {
        var temp = getIndex(id);
        if (temp >= 0) {
            photoPosts.splice(temp, 1);
            return true;
        }
        return false;
    }


    function editPhotoPost(id, object) {
        if (object == undefined) {
            return false;
        }
        if (id == undefined) {
            return false;
        }
        var tempIndex = getIndex(id);
        var temp = 0;
        if (tempIndex >= 0) {
            if (object.hasOwnProperty('id')) {
                return false;
            }
            if (object.hasOwnProperty('createdAt')) {
                return false;
            }
            if (object.hasOwnProperty('author')) {
                return false;
            }
            if (object.hasOwnProperty('description')) {
                console.log('description');
                photoPosts[tempIndex].description = object.description;
                temp = -1;
            }
            if (object.hasOwnProperty('hashtags')) {
                photoPosts[tempIndex].hashtags = object.hashtags;
                temp = -1;
            }
            if (object.hasOwnProperty('photoLink')) {
                console.log('link');
                photoPosts[tempIndex].photoLink = object.photoLink;
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

    function getPOstsArray(Array) {
        for (var i in Array) {
            console.log(Array[i].id + ' ' + Array[i].author + ' ' + photoPosts[i].createdAt);
        }
        return Array;
    }

    function getPhotoPosts(skip, top, filterConfig) {
        photoPosts.sort(compareDates);
        var ArrayObject = [];
        if (filterConfig == undefined) {
            photoPosts.sort(compareDates);
            ArrayObject = photoPosts.slice(skip, skip + top);
            return ArrayObject;
        }
        if (filterConfig.hasOwnProperty('author') == false) {
            if (filterConfig.hasOwnProperty('hashtags') == false) {
                if (filterConfig.hasOwnProperty('data') == false) {
                    ArrayObject = photoPosts.slice(skip, skip + top);
                    return ArrayObject;
                }
                else {

                    for (var i in photoPosts) {
                        if (photoPosts[i].createdAt.getTime() === filterConfig.data.getTime()) {
                            ArrayObject.push(photoPosts[i]);
                        }
                    }
                }
            }
            else {
                if (filterConfig.hasOwnProperty('data') == false) {
                    for (var i in photoPosts) {
                        for (var j in photoPosts[i].hashtags) {
                            if (photoPosts[i].hashtags[j] == filterConfig.hashtags) {
                                console.log('1234');
                                ArrayObject.push(photoPosts[i]);
                            }
                        }
                    }
                }
                else {
                    for (var i in photoPosts) {
                        for (var j in photoPosts[i].hashtags) {
                            if (photoPosts[i].hashtags[j] == filterConfig.hashtags && photoPosts[i].createdAt.getTime() === filterConfig.data.getTime()) {
                                ArrayObject.push(photoPosts[i]);
                            }
                        }
                    }
                }
            }
        }
        else {
            if (filterConfig.hasOwnProperty('data') == false) {
                if (filterConfig.hasOwnProperty('hashtags') == false) {
                    for (var i in photoPosts) {
                        if (photoPosts[i].author === filterConfig.author) {
                            ArrayObject.push(photoPosts[i]);
                        }
                    }
                }
                else {
                    for (var i in photoPosts) {
                        if (photoPosts[i].author === filterConfig.author) {
                            for (var j in photoPosts[i].hashtags) {
                                if (photoPosts[i].hashtags[j] == filterConfig.hashtags)
                                    ArrayObject.push(photoPosts[i]);
                            }
                        }
                    }

                }
            }
            else {
                if (filterConfig.hasOwnProperty('hashtags') == false) {
                    for (var i in photoPosts) {
                        if (photoPosts[i].author === filterConfig.author && photoPosts[i].createdAt.getTime() === filterConfig.data.getTime()) {
                            ArrayObject.push(photoPosts[i]);
                        }
                    }
                }
                else {
                    for (var i in photoPosts) {
                        if (photoPosts[i].createdAt.getTime() === filterConfig.data.getTime()) {

                            if (photoPosts[i].author === filterConfig.author) {
                                for (var j in photoPosts[i].hashtags) {
                                    if (photoPosts[i].hashtags[j] == filterConfig.hashtags)
                                        ArrayObject.push(photoPosts[i]);
                                }
                            }
                        }
                    }
                }

            }

        }

        if (ArrayObject.lenght <= 10 || (skip + top) > ArrayObject.lenght) {
            return ArrayObject;
        }
        else {
            return ArrayObject.slice(skip, skip + top);
        }
        return ArrayObject;
    }

    console.log(getPhotoPosts(0, 10, { data: new Date('2018-02-23T23:00:00') }));
    console.log(getPhotoPosts(10, 10, { hashtags: 'hashtag1' }));
    console.log(getPhotoPosts(0, 10, { author: 'author3' }));
    editPhotoPost('6', { photoLink: 'http://edit' });
    getPhotoPost('6');
    editPhotoPost('5', { description: 'edit' });
    getPhotoPost('5');
    editPhotoPost('7', { id: '8' });
    getPhotoPost('7');
    addPhotoPost({
        id: '21',
        description: 'description21',
        createdAt: new Date('2018-02-23T21:00:00'),
        author: 'Author21',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags:['hashtag1', 'hashtag8'],
        likes: ['name21', 'name2', 'name3']
    });
    getPhotoPost('21');
    editPhotoPost('4', { description: 'edit' });
    removePhotoPost('4');
    editPhotoPost('1', {hashtags:['hashtag1', 'hashtag8']});
    getPhotoPost('1');

})();
