var user = 0;


var photoPosts = [
    {
        id: '1',
        description: 'description1',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author1',
        photoLink: 'http://www.bugaga.ru/uploads/posts/2011-02/1296652853_wt.jpg',
        hashtags: ['#hashtag7', '#hashtag5', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '2',
        description: 'description2',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author2',
        photoLink: 'http://www.wikimetal.com.br/wp-content/uploads/2016/07/Within-Temptation.jpg',
        hashtags: ['#hashtag2', '#hashtag3'],
        likes: ['name3', 'name2', 'name5']
    },
    {
        id: '3',
        description: 'description3',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author3',
        photoLink: 'http://metalkings.org/content/concerts/2619/within_temptaition_014.jpg',
        hashtags: ['#hashtag1', '#hashtag6'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '4',
        description: 'description4',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author4',
        photoLink: 'http://rock-ua.com/uploads/posts/2014-01/1389859979_b121a9a9-78cd-4b14-9bb4-5271114cf0c2_m.jpg',
        hashtags: ['#hashtag9', '#hashtag2'],
        likes: ['name4', 'name5', 'name7']
    },
    {
        id: '5',
        description: 'description5',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Author5',
        photoLink: 'http://www.hitkiller.com/666/wp-content/uploads/2014/03/within-temptation-twitter.jpg',
        hashtags: ['#hashtag1', '#hashtag2'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '6',
        description: 'description6',
        createdAt: new Date('2018-02-23T23:40:00'),
        author: 'Author6',
        photoLink: 'https://pp.userapi.com/c631618/v631618470/5cb8/Yeimzk45RJE.jpg',
        hashtags: ['#hashtag1', '#hashtag8'],
        likes: ['name7', 'name2', 'name3']
    },
    {
        id: '7',
        description: 'description3',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author7',
        photoLink: 'https://img-fotki.yandex.ru/get/5641/19830795.e6/0_c0193_2e4cb1ce_orig.jpg',
        hashtags: ['#hashtag10', '#hashtag2'],
        likes: ['name10', 'name2', 'name3']
    },
    {
        id: '8',
        description: 'description8',
        createdAt: new Date('2018-02-22T23:00:00'),
        author: 'Author8',
        photoLink: 'https://starity.hu/images/articles/800x600/sharon-den-adel-kate-bush-a-hosom-10210335.jpg',
        hashtags: ['#hashtag1', '#hashtag4'],
        likes: ['name1', 'name4', 'name3']
    },
    {
        id: '9',
        description: 'description9',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Author9',
        photoLink: 'https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/68/d0/33/68d03359-aaaa-4c63-eda6-bd3dfbfa91a9/888003948044.jpg/1200x630bb.jpg',
        hashtags: ['#hashtag1', '#hashtag2'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '10',
        description: 'description10',
        createdAt: new Date('2018-02-23T23:08:00'),
        author: 'Author10',
        photoLink: 'https://media.gettyimages.com/photos/musician-sharon-den-adel-of-the-group-within-temptation-performs-at-picture-id456171920',
        hashtags: ['#hashtag1', '#hashtag2'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '11',
        description: 'description11',
        createdAt: new Date('2018-02-23T23:00:10'),
        author: 'Author11',
        photoLink: 'http://1.bp.blogspot.com/-WZrsZ1OX9lo/TZCsWiA0HdI/AAAAAAAAAIs/fcTkKsvCeTU/s1600/WITHIN+TEMPTATION+-+TAPA.jpg',
        hashtags: ['#hashtag1', '#hashtag2'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '12',
        description: 'description12',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Author12',
        photoLink: 'https://pp.userapi.com/c627831/v627831470/ac66/9uSGTVZ9sBI.jpg',
        hashtags: ['#hashtag2'],
        likes: ['name1', 'name12', 'name3']
    },
    {
        id: '13',
        description: 'description13',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Author13',
        photoLink: 'https://pp.userapi.com/c631117/v631117366/40357/i7IJPJj8MJ0.jpg',
        hashtags: ['#hashtag1', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '14',
        description: 'description14',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author14',
        photoLink: 'https://pp.userapi.com/c631618/v631618470/5d10/IMvgrKq6Yho.jpg',
        hashtags: ['#hashtag5', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name4', 'name3']
    },
    {
        id: '15',
        description: 'description15',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author15',
        photoLink: 'https://pp.userapi.com/c627524/v627524366/2fc43/QJvNJPc1PEo.jpg',
        hashtags: ['#hashtag1', '#hashtag5', '#hashtag3', '#hashtag6'],
        likes: ['name6', 'name2', 'name3']
    },
    {
        id: '16',
        description: 'description16',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author16',
        photoLink: 'https://orig00.deviantart.net/df24/f/2013/354/a/2/sharon_den_adel03_by_funkycop999-d6ymww1.jpg',
        hashtags: ['#hashtag4', '#hashtag2', '#hashtag7', '#hashtag8'],
        likes: ['name7', 'name2', 'name3']
    },
    {
        id: '17',
        description: 'description17',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author17',
        photoLink: 'http://images5.fanpop.com/image/photos/28900000/Sharon-Den-Adel-sharon-den-adel-28972536-500-375.jpg',
        hashtags: ['#hashtag1', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '18',
        description: 'description18',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author18',
        photoLink: 'https://lh3.googleusercontent.com/-hBMgfls9Qeg/VxAUBFIlCFI/AAAAAAAAFcU/p9PSLDHVQxsP6BSYee8zuyueMgEme_xMACCo/s620-Ic42/Sharon%2Bden%2BAdel%2B%2528Within%2BTemptation%2529.jpg',
        hashtags: ['#hashtag1', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '19',
        description: 'description19',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author19',
        photoLink: 'http://www.bestrockpics.com/data/media/152/Within%20Temptation%20wallpaper%20(5).jpg',
        hashtags: ['#hashtag5', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name5', 'name2', 'name3']
    },
    {
        id: '20',
        description: 'description20',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'http://www.atproductions.com/wp-content/uploads/2012/07/Within_Temptation_Photo_by_Lars_Griemelijkhuijsen.jpg',
        hashtags: ['#hashtag7', '#hashtag5', '#hashtag3', '#hashtag4'],
        likes: ['name10', 'name2', 'name3']
    },
];



var myModule = (function () {

    function getPhotoPost(temp) {
        return photoPosts.find(function (element) {
            return element.id == temp;
        });
    }

    function display_user() {

        if (user == 0) {
            debugger;
            var list = document.getElementById('MyPage');
            var newPost = document.createElement("div");
            newPost.id = "MyPageTitle";
            newPost.innerHTML = 'Лента';
            list.appendChild(newPost);
        }
        else {
            debugger;
            var reg = document.getElementById('reg_auth');
            reg.innerHTML = '<a href="" title="Выйти" class="btn">Вoйти</a>';
            var user = document.getElementById('TopUser').className = "hide";
            var about = document.getElementById('about').className = "hide";
            var list = document.getElementById('MyPage');
            var newPost = document.createElement("div");
            newPost.id = "MyPageTitle";
            newPost.innerHTML = 'Лента';
            list.appendChild(newPost);
            var item = document.getElementById('Add').className = "hide";
        }

    }

    function display() {
        for (var item in photoPosts) {
            if (user == 0) {
                displayPhotoPost_user(photoPosts[item]);
            }
            else {
                displayPhotoPost(photoPosts[item]);
            }
        }
    }

    function validatePhotoPost(post) {
        for (var i in post.hashtags) {
            if (typeof post.hashtags[i] !== 'string') {
                return false;
            }
        }
        if ((!post.hasOwnProperty('id')) || typeof post.id !== 'string') {
            console.log("error1");
            return false;
        }
        else {
            if (photoPosts.findIndex(function (element) {
                return element.id == post.id;
            }) >= 0) {
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
            if (!post.createdAt instanceof Date) {
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
        if ((validatePhotoPost(post) == true) && (user !== 0)) {
            photoPosts.push(post);
            displayPhotoPost_user(post);
            return true;
        }
        return false;
    }

    function displayPhotoPost_user(post) {
        console.log(post);
        var list = document.querySelector('.photoPosts');
        var newPost = document.createElement("article");
        newPost.className = "post";
        newPost.innerHTML = '\<img src="if_Account_2190989.ico" class="ava"/>' +
            '<a href="" title="user_name">' +
            '<span class="user_name1">' + post.author + '</span>' +
            '</a>' + '<span class = "Data_and_time">' + post.createdAt.toLocaleString() + '</span>' +
            '<div class="link_photo">' + '<div class="paste"/>' +
            '<a href="" title="delete">' +
            '<img src="if_delete_16_22536.ico" class="delete"/></a>' +
            '<a href="" title="red">' +
            '<img src="if_90_171449.ico" class="red"/></a>' +
            '<a href="" title="like">' +
            '<img src="if_80_171439.ico" class="like"/></a>' +
            '<a href="" title="hashteg">' +
            '<p>' + '<span class="HashTeg">' + post.hashtags + '</span></a>' + '</p>'
            + '<p class="Description">' + post.description + '</p>' + '</div>';
        var firstElem = document.getElementsByClassName("post")[0];
        list.insertBefore(newPost, firstElem);
        var photo = document.createElement("img");
        photo.className = "pic";
        photo.src = post.photoLink;
        var Data = document.querySelector(".paste");
        var userPhotopost = document.querySelector(".link_photo");
        userPhotopost.insertBefore(photo, Data);
    }

    function displayPhotoPost(post) {
        console.log(post);
        var list = document.querySelector('.photoPosts');
        var newPost = document.createElement("article");
        newPost.className = "post";
        newPost.innerHTML = '\<img src="if_Account_2190989.ico" class="ava"/>' +
            '<a href="" title="user_name">' +
            '<span class="user_name1">' + post.author + '</span>' +
            '</a>' + '<span class = "Data_and_time">' + post.createdAt.toLocaleString() + '</span>' +
            '<div class="link_photo">' + '<div class="paste"/>' +
            '<a href="" title="hashteg"><span class="HashTeg">' + post.hashtags +
            '</span></a><p class="Description">' + post.description + '</p>' + '</div>';
        var firstElem = document.getElementsByClassName("post")[0];
        list.insertBefore(newPost, firstElem);
        var photo = document.createElement("img");
        photo.className = "pic_for_guest";
        photo.src = post.photoLink;
        var Data = document.querySelector(".paste");
        var userPhotopost = document.querySelector(".link_photo");
        userPhotopost.insertBefore(photo, Data);
    }

    function removePhotoPost(id) {
        var index = photoPosts.findIndex(function (element) {
            return element.id == id;
        });
        if (index >= 0) {
            var posts = document.querySelector(".photoPosts");
            var deleteElem = document.getElementsByClassName("post")[photoPosts.length - index - 1];
            posts.removeChild(deleteElem);
            photoPosts.splice(index, 1);
            return true;
        }
        return false;
    }


    function editPhotoPost(id, post) {
        if (user === 0) {
            return false;
        }
        if (!post) {
            return false;
        }
        if (typeof id !== 'string' || id.length == 0) {
            return false;
        }
        var temp = 0;
        var index = photoPosts.findIndex(function (element) {
            return element.id == id;
        });
        if (index >= 0) {
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
                var Description = document.getElementsByClassName("Description")[photoPosts.length - index - 1];
                Description.innerHTML = post.description;
                photoPosts[index].description = post.description;
                temp = -1;
            }
            if (post.hasOwnProperty('hashtags')) {
                var hashTags = document.getElementsByClassName("HashTeg")[photoPosts.length - index - 1];
                hashTags.innerHTML = post.hashTags;
                photoPosts[index].hashtags = post.hashtags;
                temp = -1;
            }
            if (post.hasOwnProperty('photoLink')) {
                console.log('link');
                var photo = document.getElementsByClassName("pic")[photoPosts.length - index - 1];
                photo.src = post.photoLink;
                photoPosts[index].photoLink = post.photoLink;
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
        return new Date(a.createdAt) - new Date(b.createdAt);
    }

    function getPhotoPosts(skip, top, filterConfig) {
        var index = document.getElementsByClassName("post").length;
        for (var i = index - 1; i >= 0; i--) {
            var posts = document.querySelector(".photoPosts");
            var deleteElem = document.getElementsByClassName("post")[i];
            posts.removeChild(deleteElem);
        }
        skip = skip || 0;
        top = top || 10;
        photoPosts.sort(compareDates);
        var ArrayObject = photoPosts.slice(0, photoPosts.length);
        if (filterConfig == undefined) {
            ArrayObject = photoPosts.slice(skip, skip + top);
            for (var i in ArrayObject) {
                if (user === null) {
                    displayPhotoPost_user(ArrayObject[i]);
                }
                else {
                    displayPhotoPost(ArrayObject[i]);
                }
            }
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
                if (temp != 1) {
                    ArrayObject.splice(i, 1);
                }
            }
        }
        if (ArrayObject.length <= 10) {
            for (var i in ArrayObject) {
                if (user !== 0) {
                    displayPhotoPost_user(ArrayObject[i]);
                }
                else {
                    displayPhotoPost(ArrayObject[i]);
                }
            }
            return ArrayObject;
        }
        var ArrayObject_final = ArrayObject.slice(skip, skip + top);
        for (var i in ArrayObject_final) {
            if (user !== 0) {
                displayPhotoPost_user(ArrayObject_final[i]);
            }
            else {
                displayPhotoPost(ArrayObject_final[i]);
            }
        }
        return ArrayObject_final;
    }
    return {
        removePhotoPost: removePhotoPost,
        editPhotoPost: editPhotoPost,
        addPhotoPost: addPhotoPost,
        validatePhotoPost: validatePhotoPost,
        getPhotoPost: getPhotoPost,
        getPhotoPosts: getPhotoPosts,
        display: display,
        display_user: display_user
    }
})();

console.log(user);
console.log(myModule.display_user());
console.log(myModule.display());
myModule.editPhotoPost('20', { photoLink: 'http://laoblogger.com/images/clipart-edit-photo-9.jpg' });
myModule.removePhotoPost('4');
myModule.editPhotoPost('19', { description: 'editPhotoPost' });
console.log(myModule.getPhotoPosts(0, 10, { data: new Date('2018-02-23T23:00:00') }));
console.log(myModule.getPhotoPosts(0, 10, { hashtags: '#hashtag1' }));
myModule.addPhotoPost({
    id: '21',
    description: 'description21',
    createdAt: new Date('2018-02-23T21:00:00'),
    author: 'Author21',
    photoLink: 'https://media.giphy.com/media/KsXNe2npdByBW/source.gif',
    hashtags: ['hashtag1', 'hashtag8'],
    likes: ['name21', 'name2', 'name3']
});
