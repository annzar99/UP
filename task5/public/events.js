/*var photoPosts = [
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
        author: 'Author3',
        photoLink: 'http://www.wikimetal.com.br/wp-content/uploads/2016/07/Within-Temptation.jpg',
        hashtags: ['#hashtag2', '#hashtag3'],
        likes: ['name3', 'name2', 'name5']
    },
    {
        id: '3',
        description: 'description3',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'http://metalkings.org/content/concerts/2619/within_temptaition_014.jpg',
        hashtags: ['#hashtag1', '#hashtag6'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '4',
        description: 'description4',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author3',
        photoLink: 'http://rock-ua.com/uploads/posts/2014-01/1389859979_b121a9a9-78cd-4b14-9bb4-5271114cf0c2_m.jpg',
        hashtags: ['#hashtag9', '#hashtag2'],
        likes: ['name4', 'name5', 'name7']
    },
    {
        id: '5',
        description: 'description5',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Author3',
        photoLink: 'http://www.hitkiller.com/666/wp-content/uploads/2014/03/within-temptation-twitter.jpg',
        hashtags: ['#hashtag1', '#hashtag2'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '6',
        description: 'description6',
        createdAt: new Date('2018-02-23T23:40:00'),
        author: 'Author3',
        photoLink: 'https://pp.userapi.com/c631618/v631618470/5cb8/Yeimzk45RJE.jpg',
        hashtags: ['#hashtag1', '#hashtag8'],
        likes: ['name7', 'name2', 'name3']
    },
    {
        id: '7',
        description: 'description3',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'https://img-fotki.yandex.ru/get/5641/19830795.e6/0_c0193_2e4cb1ce_orig.jpg',
        hashtags: ['#hashtag10', '#hashtag2'],
        likes: ['name10', 'name2', 'name3']
    },
    {
        id: '8',
        description: 'description8',
        createdAt: new Date('2018-02-22T23:00:00'),
        author: 'Author20',
        photoLink: 'https://starity.hu/images/articles/800x600/sharon-den-adel-kate-bush-a-hosom-10210335.jpg',
        hashtags: ['#hashtag1', '#hashtag4'],
        likes: ['name1', 'name4', 'name3', 'Author20']
    },
    {
        id: '9',
        description: 'description9',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Author20',
        photoLink: 'https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/68/d0/33/68d03359-aaaa-4c63-eda6-bd3dfbfa91a9/888003948044.jpg/1200x630bb.jpg',
        hashtags: ['#hashtag1', '#hashtag2'],
        likes: ['name1', 'name2', 'name3', 'Author20']
    },
    {
        id: '10',
        description: 'description10',
        createdAt: new Date('2018-02-23T23:08:00'),
        author: 'Author1',
        photoLink: 'https://media.gettyimages.com/photos/musician-sharon-den-adel-of-the-group-within-temptation-performs-at-picture-id456171920',
        hashtags: ['#hashtag1', '#hashtag2'],
        likes: ['name1', 'name2', 'name3', 'Author20']
    },
    {
        id: '11',
        description: 'description11',
        createdAt: new Date('2018-02-23T23:00:10'),
        author: 'Author1',
        photoLink: 'http://1.bp.blogspot.com/-WZrsZ1OX9lo/TZCsWiA0HdI/AAAAAAAAAIs/fcTkKsvCeTU/s1600/WITHIN+TEMPTATION+-+TAPA.jpg',
        hashtags: ['#hashtag1', '#hashtag2'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '12',
        description: 'description12',
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Author1',
        photoLink: 'https://pp.userapi.com/c627831/v627831470/ac66/9uSGTVZ9sBI.jpg',
        hashtags: ['#hashtag2'],
        likes: ['name1', 'name12', 'name3', 'Author20']
    },
    {
        id: '13',
        description: 'description13',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Author3',
        photoLink: 'https://pp.userapi.com/c631117/v631117366/40357/i7IJPJj8MJ0.jpg',
        hashtags: ['#hashtag1', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name2', 'name3']
    },
    {
        id: '14',
        description: 'description14',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'https://pp.userapi.com/c631618/v631618470/5d10/IMvgrKq6Yho.jpg',
        hashtags: ['#hashtag5', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name4', 'name3']
    },
    {
        id: '15',
        description: 'description15',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'https://pp.userapi.com/c627524/v627524366/2fc43/QJvNJPc1PEo.jpg',
        hashtags: ['#hashtag1', '#hashtag5', '#hashtag3', '#hashtag6'],
        likes: ['name6', 'name2', 'name3', 'Author20']
    },
    {
        id: '16',
        description: 'description16',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'https://orig00.deviantart.net/df24/f/2013/354/a/2/sharon_den_adel03_by_funkycop999-d6ymww1.jpg',
        hashtags: ['#hashtag4', '#hashtag2', '#hashtag7', '#hashtag8'],
        likes: ['name7', 'name2', 'name3']
    },
    {
        id: '17',
        description: 'description17',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'http://images5.fanpop.com/image/photos/28900000/Sharon-Den-Adel-sharon-den-adel-28972536-500-375.jpg',
        hashtags: ['#hashtag1', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name2', 'name3', 'Author20']
    },
    {
        id: '18',
        description: 'description18',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'https://lh3.googleusercontent.com/-hBMgfls9Qeg/VxAUBFIlCFI/AAAAAAAAFcU/p9PSLDHVQxsP6BSYee8zuyueMgEme_xMACCo/s620-Ic42/Sharon%2Bden%2BAdel%2B%2528Within%2BTemptation%2529.jpg',
        hashtags: ['#hashtag1', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name1', 'name2', 'name3', 'Author20']
    },
    {
        id: '19',
        description: 'description19',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author1',
        photoLink: 'http://www.bestrockpics.com/data/media/152/Within%20Temptation%20wallpaper%20(5).jpg',
        hashtags: ['#hashtag5', '#hashtag2', '#hashtag3', '#hashtag4'],
        likes: ['name5', 'name2', 'name3' , 'Author20']
    },
    {
        id: '20',
        description: 'description20',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Author20',
        photoLink: 'http://www.atproductions.com/wp-content/uploads/2012/07/Within_Temptation_Photo_by_Lars_Griemelijkhuijsen.jpg',
        hashtags: ['#hashtag7', '#hashtag5', '#hashtag3', '#hashtag4'],
        likes: ['name10', 'name2', 'name3', 'Author20']
    },
];*/

//var username = "Author20";
var username = null;
var id = 21;
var pagination = 10;

var moduleEventsHome = (function () {

    function addPhotoPostsToLocalStorage() {

 /* var users =[
                {
                    username: 'Author20',
                    password: '20',
                    avatar: 'http://rock4all.ru/images/news/2957.png'
                },
                {
                    username: 'Author1',
                    password: '1',
                    avatar: 'https://metalitalia.com/wp-content/uploads/2017/11/sharon-den-adel-my-indigo-2018.jpg?x69595'
                },
                {
                    username: 'Author3',
                    password: '3',
                    avatar: 'http://thesilentforce.ru/sites/default/files/cover.jpg'
                }];
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('posts', JSON.stringify(photoPosts));*/
        var photo = JSON.parse(localStorage.getItem('posts'));
        myModule.displayUser(username);
        myModule.getPhotoPosts(photo, username, 0, 10);
    }

    function getUser(name) {
        var users = JSON.parse(localStorage.getItem('users'));
        return (users.find((user) => {
            return user.username === name;
        }));
    }

    function getPassword(name) {
        var users = JSON.parse(localStorage.getItem('users'));
        var index = users.findIndex((element) => element.username === name);
        if (index >= 0) {
            return users[index].password;
        }
    }

    function getAvatar(name){
        var users = JSON.parse(localStorage.getItem('users'));
        var index = users.findIndex((element) => element.username === name);
        if (index >= 0) {
            return users[index].avatar;
        }
    }

    function setPagination(){
        pagination = 10;
    }


    function getLike(post, user) {
        if(post.likes.length == 0){
            return false;
        }
        if (post.likes.findIndex((element) => element === user) >= 0) {
            return true;
        }
        return false;
    }

    function like(id, photoPosts) {
        var index = photoPosts.findIndex((element) => element.id === `${id}`);
        if (!getLike(photoPosts[index], username)) {
            if(photoPosts[index].likes.length == 0){
                debugger;
                photoPosts[index].likes[0] = username;
            }else{
            photoPosts[index].likes.push(username);
        }
            myModule.getLikes(id, photoPosts[index], username);
            return photoPosts;
        }
        else {
            photoPosts[index].likes.splice(photoPosts[index].likes.findIndex((element) => element === username), 1);
            myModule.getLikes(id, photoPosts[index], username);
            return photoPosts;
        }
    }


    function events() {

        document.getElementById('download').addEventListener('click',(event)=>{
            if(document.getElementById('MyPageTitle').textContent === 'Лента')
            {
            myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, pagination, 10);
            }else{
                myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, pagination, 10,{author: username});
            }
            pagination = pagination + 10;
            event.preventDefault();
        });

        document.getElementById('lenta').addEventListener('click', (event) =>{
            myModule.changeTitle();
            myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, 0, 10);
           
            setPagination();
            event.preventDefault();
        });

        document.getElementById('my_page').addEventListener('click', (event) =>{
            myModule.changeTitletoMyPage();
            // debugger;
            myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, 0, 10, {author: username});
            setPagination();
            event.preventDefault();
        });

        document.getElementById('user_name').addEventListener('click', (event) =>{
            if(username !== null){
            myModule.changeTitletoMyPage();
            myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, 0, 10, {author: username});
            setPagination();
            event.preventDefault();
        }
            else
            {
                alert("Ошибка!Нужна авторизация");
            }
        });

        document.getElementById('TopUser').addEventListener('click', (event) =>{
            myModule.changeTitletoMyPage();
            myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, 0, 10, {author: username});
            setPagination();
            event.preventDefault();
        });

        document.getElementById('reg_auth').addEventListener('click', (event) => {
             if (document.getElementById('sign').textContent === 'Войти') {
                
                myModule.registrationHtml();
                event.preventDefault();
                document.getElementById('button_registration').addEventListener('click', (event) => {
                    
                    username = document.registrationForm.username.value;
                    console.log(username);
                    if (getUser(username) === undefined) {
                        alert("Incorrect username!");
                        username = null;
                        event.preventDefault();
                    } else {
                        var password = document.registrationForm.password.value;
                        console.log(password);
                        if (password === getPassword(username)) {
                            
                            myModule.displayUser(username);
                            myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, 0, 10);
                            setPagination();
                            myModule.deleteRegistration();
                            myModule.setAvatar(getAvatar(username));
                            event.preventDefault();
                        } else {

                            alert("Incorrect password!");
                            event.preventDefault();
                        }
                    }
                });
             }
            if (document.getElementById('reg_auth').textContent === 'Выйти') {
                username = null;
                myModule.displayUser(username);
                myModule.getPhotoPosts( JSON.parse(localStorage.getItem('posts')), username, 0, 10);
                setPagination();
                event.preventDefault();
            }
        });
        

        document.getElementById('button_search').addEventListener('click', (event) => {

            if(username !== null){
            var user = document.search_form.user.value;
            var date = document.search_form.date.value;
            var hashTag = document.search_form.hashtag.value;
            myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')),username, 0, JSON.parse(localStorage.getItem('posts')).length, {
                author: user,
                createdAt: date,
                hashtags: hashTag
            });
            setPagination();
            event.preventDefault();
        }
        else{
            alert("Ошибка!Нужна авторизация");
            event.preventDefault();
        }
        });

        document.getElementById('Add').addEventListener('click', (event) => { 
            
            myModule.addPhotoPostHtml();
            event.preventDefault();
            document.getElementById('save').addEventListener('click', (event) => {
            var addPicture = document.editForm.newSrc.value;
            var addDescription = document.editForm.newDescription.value;
            var addHashtag = document.editForm.newHashtag.value;
            myModule.deleteEditForm();
            var min = new Date();

          /*  fetch('addPost', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: 'description19',
                    author: 'Author1',
                    photoLink: 'http://www.bestrockpics.com/data/media/152/Within%20Temptation%20wallpaper%20(5).jpg',
                    hashtags: ['#hashtag5', '#hashtag2', '#hashtag3', '#hashtag4'],
                    likes: ['name5', 'name2', 'name3' , 'Author20']
                })
            }).then((res) => {
                console.log('Success', res.body);
            })*/

            var editPosts = myModule.addPhotoPost(JSON.parse(localStorage.getItem('posts')),username, {
                        author: username,
                        createdAt: `${min.toISOString()}`,
                        hashtags: addHashtag,
                        photoLink: addPicture,
                        description: addDescription,
                        id: `${id}`,
                        likes: []
                    }); 
                    if(editPosts.length == id) {
                        id = id + 1;
                    }
                    localStorage.setItem('posts', JSON.stringify(editPosts));
                    event.preventDefault();
            });
            
        });

        document.querySelector('.site_content').addEventListener('click', (event) => {
            if (event.target.className === 'like') {
                    var post = event.target.parentNode.parentNode.parentNode;
                    photoPosts = like(Number(post.getAttribute('data-id')), JSON.parse(localStorage.getItem('posts')));
                    localStorage.setItem('posts', JSON.stringify(photoPosts));
                     event.preventDefault();
            }
            if (event.target.className === 'user_name1') {
                var name = event.target.textContent;
                if(name === username){
                myModule.changeTitletoMyPage();
                 myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, 0, 10, {author: username});
                 setPagination();
                }else{
                    myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, 0, 10, {author: name});
                    setPagination();
                }
                 event.preventDefault();
            }
            
            if (event.target.className === 'red') {
                debugger;
                var postHtml = event.target.parentNode.parentNode.parentNode;
                myModule.addPhotoPostHtml();
                event.preventDefault();
                var post = myModule.getPhotoPost(Number(postHtml.getAttribute('data-id')),JSON.parse(localStorage.getItem('posts')),username);
                 document.getElementById('save').addEventListener('click', (event) => {
                     var addPicture = document.editForm.newSrc.value;
                      var addDescription = document.editForm.newDescription.value;
                      var addHashtag = document.editForm.newHashtag.value;
                      myModule.deleteEditForm();
                      var editPosts = myModule.editPhotoPost(postHtml.getAttribute('data-id'),JSON.parse(localStorage.getItem('posts')),username, {
                        photoLink: addPicture || post.photoLink,
                        description: addDescription || post.description,
                        hashtags: addHashtag|| post.hashtags,
                    }); 
                    localStorage.setItem('posts', JSON.stringify(editPosts));
                    event.preventDefault();
            });
                 event.preventDefault();
            }
            if (event.target.className === 'delete') {

                var post = event.target.parentNode.parentNode.parentNode;
                myModule.MessageNotFound();
                event.preventDefault();
                document.getElementById('yes').addEventListener('click', (event) => {
                myModule.returnAfterMessage();
                debugger;
                var photo = myModule.removePhotoPost( Number(post.getAttribute('data-id')),JSON.parse(localStorage.getItem('posts')), username);
                localStorage.setItem('posts', JSON.stringify(photo));
                myModule.changeTitletoMyPage();
                myModule.getPhotoPosts(JSON.parse(localStorage.getItem('posts')), username, 0, 10, {author: username});
                setPagination();
                event.preventDefault();
             });
             document.getElementById('no').addEventListener('click', (event) => {
                myModule.returnAfterMessage();
                event.preventDefault();
             });
            }
        });

    }

    return {
        events: events,
        addPhotoPostsToLocalStorage: addPhotoPostsToLocalStorage,
    }
}
)();
console.log(moduleEventsHome.addPhotoPostsToLocalStorage());
moduleEventsHome.events();