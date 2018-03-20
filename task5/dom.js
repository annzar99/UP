'use strict';
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

    //var user = false;
    var user = true;

    function getPhotoPost(temp) {
        return photoPosts.find(function (element) {
            return element.id == temp;
        });
    }

    function _displayUser() {
        if (user) {
            var list = document.getElementById('MyPage');
            var newPost = document.createElement('div');
            newPost.id = 'MyPageTitle';
            newPost.innerHTML = 'Лента';
            list.appendChild(newPost);
        }
        else {
            var reg = document.getElementById('reg_auth');
            reg.innerHTML = '<a href="" title="Выйти" class="btn">Вoйти</a>';/*меняет Выйти на Войти*/
            var user_ = document.getElementById('TopUser').className = 'hide';/*Скрываем информацию о пользователе*/
            var about = document.getElementById('about').className = 'hide';/*Скрываем информацию о пользователе*/
            var changePhoto = document.getElementsByClassName('avatar')[0].src = "if_Account_2190989.ico";
            var list = document.getElementById('MyPage');
            var newPost = document.createElement('div');
            newPost.id = 'MyPageTitle';
            newPost.innerHTML = 'Лента';
            list.appendChild(newPost);
            var item = document.getElementById('Add').className = 'hide';/*Скрываем кнопку добавления*/
        }

    }

    function display() {
        for (var item in photoPosts) {
            if (user) {
                displayPhotoPostUser(photoPosts[item]);
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
                return element.id === post.id;
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
        if ((validatePhotoPost(post)) && (user)) {
            photoPosts.push(post);
            displayPhotoPostUser(post);
            return true;
        }
        return false;
    }

    function displayPhotoPostUser(post) {
        console.log(post);
        var list = document.querySelector('.photoPosts');
        var newPost = document.createElement('article');
        newPost.className = 'post';
        newPost.setAttribute('data-id', post.id);
        newPost.innerHTML =`<img src="if_Account_2190989.ico" class="ava"/>
        <a href="" title="user_name"> 
        <span class="user_name1">${post.author}</span></a>
        <span class = "Data_and_time">${post.createdAt.toLocaleString()}</span>
        <img src = ${post.photoLink} class = "pic"/>
        <a href="" title="delete">
        <img src="if_delete_16_22536.ico" class="delete"/></a>
        <a href="" title="red">
        <img src="if_90_171449.ico" class="red"/></a>
        <a href="" title="like"><img src="if_80_171439.ico" class="like"/></a>
        <a href="" title="hashteg"><span class="HashTeg">${post.hashtags}</span></a>
        <p class="Description">${post.description}</p></div> `;
        var firstElem = document.getElementsByClassName('post')[0];
        list.insertBefore(newPost, firstElem);
    }

    function displayPhotoPost(post) {
        console.log(post);
        var list = document.querySelector('.photoPosts');
        var newPost = document.createElement('article');
        newPost.className = 'post';
        newPost.setAttribute('data-id', post.id);
        newPost.innerHTML = `<img src="if_Account_2190989.ico" class="ava"/>
        <a href="" title="user_name"> 
        <span class="user_name1">${post.author}</span></a>
        <span class = "Data_and_time">${post.createdAt.toLocaleString()}</span>
        <img src = ${post.photoLink} class = "pic_for_guest"/>
        <a href="" title="hashteg"><span class="HashTeg">${post.hashtags}</span></a>
        <p class="Description">${post.description}</p></div> `;
        var firstElem = document.getElementsByClassName('post')[0];
        list.insertBefore(newPost, firstElem);
    }

    function removePhotoPost(id) {
        var index = photoPosts.findIndex(function (element) {
            return element.id === id;
        });
        if (index >= 0) {
            var posts = document.querySelector('.photoPosts');
            var deleteElem = document.getElementsByClassName('post')[photoPosts.length - index - 1];
            posts.removeChild(deleteElem);
            photoPosts.splice(index, 1);
            return true;
        }
        return false;
    }


    function editPhotoPost(id, post) {
        if (!user) {
            return false;
        }
        if (!post) {
            return false;
        }
        if (typeof id !== 'string' || id.length == 0) {
            return false;
        }
        var temp = 0;/*если temp изменяется, то редактирование прошло успешно*/
        var index = photoPosts.findIndex(function (element) {
            return element.id === id;
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
                var Description = document.getElementsByClassName('Description')[photoPosts.length - index - 1];
                Description.innerHTML = post.description;
                photoPosts[index].description = post.description;
                temp = -1;
            }
            if (post.hasOwnProperty('hashtags')) {
                var hashTags = document.getElementsByClassName('HashTeg')[photoPosts.length - index - 1];
                hashTags.innerHTML = post.hashTags;
                photoPosts[index].hashtags = post.hashtags;
                temp = -1;
            }
            if (post.hasOwnProperty('photoLink')) {
                console.log('link');
                var photo = document.getElementsByClassName('pic')[photoPosts.length - index - 1];
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

        var index = document.getElementsByClassName('post').length;
        for (var i = index - 1; i >= 0; i--) {
            var posts = document.querySelector('.photoPosts');
            var deleteElem = document.getElementsByClassName('post')[i];
            posts.removeChild(deleteElem);
        }
        skip = skip || 0;
        top = top || 10;
        photoPosts.sort(compareDates);
        var postsToDisplay = photoPosts.slice(0, photoPosts.length);
        if (filterConfig == undefined) {
            postsToDisplay = photoPosts.slice(skip, skip + top);
            for (var i in postsToDisplay) {
                if (user) {
                    displayPhotoPostUser(postsToDisplay[i]);
                }
                else {
                    displayPhotoPost(postsToDisplay[i]);
                }
            }
            return postsToDisplay;
        }

        if (filterConfig.hasOwnProperty('author')) {
            for (var i = postsToDisplay.length - 1; i >= 0; i--) {
                if (postsToDisplay[i].author !== filterConfig.author) {
                    postsToDisplay.splice(i, 1);
                }
            }
        }

        if (filterConfig.hasOwnProperty('data')) {
            for (var i = postsToDisplay.length - 1; i >= 0; i--) {
                if (postsToDisplay[i].createdAt.getTime() !== filterConfig.data.getTime()) {
                    postsToDisplay.splice(i, 1);
                }
            }
        }
        if (filterConfig.hasOwnProperty('hashtags')) {
            var temp;
            for (var i = postsToDisplay.length - 1; i >= 0; i--) {
                temp = 0;
                for (var j in postsToDisplay[i].hashtags) {
                    if (postsToDisplay[i].hashtags[j] === filterConfig.hashtags) {
                        temp = 1;
                    }
                }
                if (temp != 1) {
                    postsToDisplay.splice(i, 1);
                }
            }
        }
        if (postsToDisplay.length <= 10) {
            for (var i in postsToDisplay) {
                if (user === true) {
                    displayPhotoPostUser(postsToDisplay[i]);
                }
                else {
                    displayPhotoPost(postsToDisplay[i]);
                }
            }
            return postsToDisplay;
        }
        var display = postsToDisplay.slice(skip, skip + top);
        for (var i in display) {
            if (user) {
                displayPhotoPostUser(display[i]);
            }
            else {
                displayPhotoPost(display[i]);
            }
        }
        return display;
    }
    return {
        removePhotoPost: removePhotoPost,
        editPhotoPost: editPhotoPost,
        addPhotoPost: addPhotoPost,
        validatePhotoPost: validatePhotoPost,
        getPhotoPost: getPhotoPost,
        getPhotoPosts: getPhotoPosts,
        display: display,
        _displayUser: _displayUser,

    }
})();

console.log(myModule._displayUser());
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
    photoLink: 'data:image/png;base64,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',
    hashtags: ['#hashtag1', '#hashtag8'],
    likes: ['name21', 'name2', 'name3']
});
