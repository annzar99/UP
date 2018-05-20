'use strict';

var myModule = (function () {


    function getPhotoPost(id, photoPosts, user) {
        return photoPosts.find(function (element) {
            return element.id == id;
        });
    }


    function getLikes(id, post, user) {
        var postHtml = document.querySelector(`.post[data-id="${id}"]`);
        var edit = postHtml.getElementsByClassName('like')[0];
        edit.src = userLike(post.likes, user);
    }

    function userLike(likes, user) {
        if (likes.length == 0) {
            return 'if_80_171439.ico';
        }
        if (likes.findIndex((element) => element === user) >= 0) {
            return 'orange-heart.gif';
        }
        return 'if_80_171439.ico';
    }


    function setAvatar(avatar) {
        var pictureForAvatar = document.getElementsByClassName('avatar')[0];
        pictureForAvatar.src = avatar;
    }

    function changeTitletoMyPage() {
        var change = document.getElementById('MyPageTitle');
        change.innerHTML = "Моя страница";
    }

    function changeTitle() {
        var change = document.getElementById('MyPageTitle');
        change.innerHTML = "Лента";
    }

    function displayUser(user) {
        var index = document.getElementsByClassName('post').length;
        for (var i = index - 1; i >= 0; i--) {
            var posts = document.querySelector('.photoPosts');
            var deleteElem = document.getElementsByClassName('post')[i];
            posts.removeChild(deleteElem);
        }

        if (user !== null) {

            var registrationUser = document.getElementById('reg_auth');
            registrationUser.innerHTML = '<a href="" title="Выйти" id = "sign" class="btn">Выйти</a>';
            var showUser = document.getElementById('TopUser').className = '';
            var about = document.getElementById('about').className = '';
            var itemAddPhoto = document.getElementById('Add').className = '';
            showUser = document.getElementById('TopUser').innerHTML = `<a href="" title="user_name">${user}</a>`;
            showUser = document.getElementById('user_name').innerHTML = `${user}`;
        }
        else {
            var registrationUser = document.getElementById('reg_auth');
            registrationUser.innerHTML = '<a href="" title="Войти" id = "sign" class="btn">Войти</a>';
            var  showUser = document.getElementById('TopUser').className = 'hide';
            var about = document.getElementById('about').className = 'hide';
            var changePhoto = document.getElementsByClassName('avatar')[0].src = "if_Account_2190989.ico";
            var itemAddPhoto = document.getElementById('Add').className = 'hide';
        }

    }
    function display(photoPosts, user) {

        var index = document.getElementsByClassName('post').length;
        for (var i = index - 1; i >= 0; i--) {
            var posts = document.querySelector('.photoPosts');
            var deleteElem = document.getElementsByClassName('post')[i];
            posts.removeChild(deleteElem);
        }

        for (var i in photoPosts) {
            if (user !== null) {
                if (user !== photoPosts[i].author) {
                    displayWithoutDelete(photoPosts[i], photoPosts, user);
                }
                else {
                    displayPhotoPostUser(photoPosts[i], photoPosts, user);
                }
            }
            else {
                displayPhotoPost(photoPosts[i], photoPosts, user);
            }
        }
        if (photoPosts.length > 10) {
            var showDowloadButton = document.getElementById('DownloadButton').className = '';
        }
    }

    function validatePhotoPost(post, photoPosts, user) {
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

    function addPhotoPost(photoPosts, user, post) {
        if ((validatePhotoPost(post, photoPosts, user)) && (user === post.author)) {
            photoPosts.push(post);
            displayPhotoPostUser(post, photoPosts, user);

        }
        return photoPosts;
    }

    function displayPhotoPostUser(post, photoPosts, user) {
     //   console.log(post);
        var data = new Date(post.createdAt);
        var postsOnthePage = document.querySelector('.photoPosts');
        var newPost = document.createElement('article');
        newPost.className = 'post';
        newPost.setAttribute('data-id', post.id);
        // debugger;
        newPost.innerHTML = `<div id = "article_information"><img src="if_Account_2190989.ico" class="ava"/>
        <a href="" title="user_name"> 
        <span class="user_name1">${post.author}</span></a>
        <span class = "Data_and_time">${data.toLocaleString()}</span></div>
        <img src = ${post.photoLink} class = "pic"/>
        <div id = "edit">
        <a href="" title="delete">
        <img src="if_delete_16_22536.ico" class="delete"/></a>
        <a href="" title="red">
        <img src="if_90_171449.ico" class="red" /></a>
        <a href="" title="like"><img src=${userLike(post.likes, user)} class="like"/></a></div>
        <a href="" title="hashteg"><span class="HashTeg">${post.hashtags}</span></a>
        <p class="Description">${post.description}</p></div> `;
        var firstElem = document.getElementsByClassName('post')[0];
        //   debugger;
        postsOnthePage.insertBefore(newPost, firstElem);
    }

    function displayWithoutDelete(post, photoPosts, user) {
        console.log(post);
        var data = new Date(post.createdAt);
        var postsOnthePage = document.querySelector('.photoPosts');
        var newPost = document.createElement('article');
        newPost.className = 'post';
        newPost.setAttribute('data-id', post.id);
        newPost.innerHTML = `<div id = "article_information"><img src="if_Account_2190989.ico" class="ava"/>
        <a href="" title="user_name"> 
        <span class="user_name1">${post.author}</span></a>
        <span class = "Data_and_time">${data.toLocaleString()}</span></div>
        <img src = ${post.photoLink} class = "pic"/>
        <div id = "edit"><a href="" title="like"><img src=${userLike(post.likes, user)} class="like"/></a></div>
        <a href="" title="hashteg"><span class="HashTeg">${post.hashtags}</span></a>
        <p class="Description">${post.description}</p></div> `;
        var firstElem = document.getElementsByClassName('post')[0];
        postsOnthePage.insertBefore(newPost, firstElem);
    }


    function displayPhotoPost(post, photoPosts, user) {
        console.log(post);
        var data = new Date(post.createdAt);
        var postsOnthePage = document.querySelector('.photoPosts');
        var newPost = document.createElement('article');
        newPost.className = 'post';
        newPost.setAttribute('data-id', post.id);
        newPost.innerHTML = `<div id = "article_information"><img src="if_Account_2190989.ico" class="ava"/>
        <a href="" title="user_name"> 
        <span class="user_name1">${post.author}</span></a>
        <span class = "Data_and_time">${data.toLocaleString()}</span></div>
        <img src = ${post.photoLink} class = "pic_for_guest"/>
        <a href="" title="hashteg"><span class="HashTeg">${post.hashtags}</span></a>
        <p class="Description">${post.description}</p></div> `;
        var firstElem = document.getElementsByClassName('post')[0];
        postsOnthePage.insertBefore(newPost, firstElem);
    }

    function removePhotoPost(id, photoPosts, user) {
        var index = photoPosts.findIndex(function (element) {
            return element.id === `${id}`;
        });
        if (index >= 0) {
            var postOnthePage = document.querySelector('.photoPosts');
            var deleteElem = document.querySelector('.post[data-id ="' + id + '"]');
            postOnthePage.removeChild(deleteElem);
            photoPosts.splice(index, 1);
            return photoPosts;
        }
        return photoPosts;
    }


    function addPhotoPostHtml() {
        var posts = document.querySelector('.site_content');
        posts.classList.add('hide');
        var list = document.querySelector('main');
        var newPost = document.createElement('registration_form');
        newPost.className = 'addPost';
        newPost.id = "registration";
        newPost.innerHTML = `<form name="editForm" action="" class="registration"><span class="authorization">Добавление и редактирование фотопоста</span>
        <br><input type="text" name="newSrc" id="newSrc" placeholder="Добавить/изменить изображение">
        <br><input type="text" name="newDescription" id="newDescription" placeholder="Добавить/изменить описание">
        <br><input type="text" name="newHashtag" id="newHashtag" placeholder="Добавить/изменить хештеги">
        <button type="submit" id="save"><a type = "sign" href=" ">сохранить</a></button></form>`;
        list.appendChild(newPost);
    }

    function deleteEditForm() {
        var posts = document.querySelector('.site_content');
        posts.classList.remove('hide');
        var list = document.querySelector('main');
        list.removeChild(document.getElementById('registration'));
    }


    function MessageNotFound() {
        var hideInformation = document.querySelector('.site_content');
        hideInformation.classList.add('hide');
        hideInformation = document.querySelector('.userAvatar');
        hideInformation.classList.add('hide');
        var list = document.querySelector('main');
        var newPost = document.createElement('registration_form');
        newPost.id = "registration";
        newPost.innerHTML = `<form name="registrationForm" action="" class="registration"><span class="authorization">Вы действительно хотите удалить пост?</span>
        <button type="submit" id="yes"><a type = "sign" href=" ">да</a></button>
        <button type="submit" id="no"><a type = "sign" href=" ">отмена</a></button></form>`;
        list.appendChild(newPost);
    }

    function returnAfterMessage() {
        var post = document.querySelector('.userAvatar');
        post.classList.remove('hide');
        post = document.querySelector('.site_content');
        post.classList.remove('hide');
        var list = document.querySelector('main');
        list.removeChild(document.getElementById('registration'));
    }


    function registrationHtml() {

        if (document.getElementById('registration') != undefined) {
            var deleteRegistrationForm = document.querySelector('main');
            deleteRegistrationForm.removeChild(document.getElementById('registration'));

        }
        var postsHide = document.querySelector('.site_content');
        postsHide.classList.add('hide');
        postsHide = document.querySelector('.userAvatar');
        postsHide.classList.add('hide');
        var list = document.querySelector('main');
        var newPost = document.createElement('registration_form');
        newPost.id = "registration";
        newPost.innerHTML = `<form name="registrationForm" action="" class="registration"><span class="authorization">Авторизация</span>
        <br><input type="text" name="username" id="username" placeholder=" Username...">
        <br><input type="text" name="password" id="password" placeholder=" Password...">
        <button type="submit" id="button_registration"><a type = "sign" href="index.html">Войти</a></button></form>`;
        list.appendChild(newPost);;
    }

    function deleteRegistration() {
        var postsHide = document.querySelector('.userAvatar');
        postsHide.classList.remove('hide');
        postsHide = document.querySelector('.site_content');
        postsHide.classList.remove('hide');
        var list = document.querySelector('main');
        list.removeChild(document.getElementById('registration'));
    }

    function editPhotoPost(id, photoPosts, user, post) {
        if (user === null) {
            return photoPosts;
        }
        if (!post) {
            return photoPosts;
        }
        if (typeof id !== 'string' || id.length == 0) {
            return photoPosts;
        }
        var temp = 0;
        var index = photoPosts.findIndex(function (element) {
            return element.id === id;
        });
        if (index >= 0) {
            if (post.hasOwnProperty('id')) {
                return photoPosts;
            }
            if (post.hasOwnProperty('createdAt')) {
                return photoPosts;
            }
            if (post.hasOwnProperty('author')) {
                return photoPosts;
            }
            var post1 = document.querySelector(`.post[data-id="${id}"]`);

            if (post.hasOwnProperty('description')) {
                console.log('description');
                debugger;
                var edit = post1.querySelector('.Description');
                edit.innerHTML = post.description;
                photoPosts[index].description = post.description;
                temp = -1;
            }
            if (post.hasOwnProperty('hashtags')) {
                var edit = post1.querySelector('.HashTeg');
                edit.innerHTML = `${post.hashtags}`;
                photoPosts[index].hashtags = post.hashtags;
                temp = -1;
            }
            if (post.hasOwnProperty('photoLink')) {
                console.log('link');
                var edit = post1.querySelector('.pic');
                edit.src = post.photoLink;
                photoPosts[index].photoLink = post.photoLink;
                temp = -1;
            }
            if (temp == -1) {
                return photoPosts;
            }
        }
        console.log('incorrect');
        return photoPosts;
    }

    function compareDates(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
    }

    function getPhotoPosts(photoPosts, user, skip, top, filterConfig) {
        var index = document.getElementsByClassName('post').length;
        var showDowloadButton = document.getElementById('DownloadButton').className = '';
        for (var i = index - 1; i >= 0; i--) {
            var posts = document.querySelector('.photoPosts');
            var deleteElem = document.getElementsByClassName('post')[i];
            posts.removeChild(deleteElem);
        }
        skip = skip || 0;
        top = top || 10;
        photoPosts.sort(compareDates);
        var postsToDisplay = photoPosts.slice(0, photoPosts.length);
        var getIndexToDeisplay = photoPosts.length - skip - top;
        if (filterConfig == undefined) {
            postsToDisplay = photoPosts.slice(getIndexToDeisplay,getIndexToDeisplay + top);
            for (var i in postsToDisplay) {
                if (user !== null) {
                    if (user !== postsToDisplay[i].author) {
                        displayWithoutDelete(postsToDisplay[i], photoPosts, user);
                    }
                    else {
                        displayPhotoPostUser(postsToDisplay[i], photoPosts, user);
                    }
                }
                else {
                    displayPhotoPost(postsToDisplay[i], photoPosts, user);
                }
            }
            return postsToDisplay;
        }

        debugger;

        if (filterConfig.hasOwnProperty('author') && (filterConfig.author.length != 0)) {
            for (var i = postsToDisplay.length - 1; i >= 0; i--) {
                if (postsToDisplay[i].author !== filterConfig.author) {
                    postsToDisplay.splice(i, 1);
                }
            }
        }

        if (filterConfig.hasOwnProperty('createdAt') && (filterConfig.createdAt.length != 0)) {
            for (var i = postsToDisplay.length - 1; i >= 0; i--) {
                if (postsToDisplay[i].createdAt.getTime() !== filterConfig.createdAt.getTime()) {
                    postsToDisplay.splice(i, 1);
                }
            }
        }
        if (filterConfig.hasOwnProperty('hashtags') && (filterConfig.hashtags.length != 0)) {
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

        if (postsToDisplay.length == 0) {
            alert("Ничего не найдено");
            event.preventDefault();
            changeTitle();
            getPhotoPosts(photoPosts, user, 0, 10);
        }
        if (postsToDisplay.length <= 10) {
            for (var i in postsToDisplay) {
                if (user !== null) {
                    if (user !== postsToDisplay[i].author) {
                        displayWithoutDelete(postsToDisplay[i], photoPosts, user);
                    }
                    else {
                        displayPhotoPostUser(postsToDisplay[i], photoPosts, user);
                    }
                }
                else {
                    displayPhotoPost(postsToDisplay[i], photoPosts, user);
                }
            }
            var temp = document.getElementById('DownloadButton').className = 'hide';

            return postsToDisplay;
        }
        getIndexToDeisplay = postsToDisplay.length - skip - top;
        var display = postsToDisplay.slice(getIndexToDeisplay,getIndexToDeisplay + top);
        for (var i in display) {
            if (user !== null) {
                if (user !== display[i].author) {
                    displayWithoutDelete(display[i], photoPosts, user)
                }
                else {
                    displayPhotoPostUser(display[i], photoPosts, user);
                }
            }
            else {
                displayPhotoPost(display[i], photoPosts, user);
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
        displayUser: displayUser,
        displayWithoutDelete: displayWithoutDelete,
        registrationHtml: registrationHtml,
        deleteRegistration: deleteRegistration,
        setAvatar: setAvatar,
        changeTitle: changeTitle,
        changeTitletoMyPage: changeTitletoMyPage,
        getLikes: getLikes,
        MessageNotFound: MessageNotFound,
        returnAfterMessage: returnAfterMessage,
        addPhotoPostHtml: addPhotoPostHtml,
        deleteEditForm: deleteEditForm
    }
})();
