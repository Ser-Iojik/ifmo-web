var commentContainer = document.getElementById("commentContainer")
var user = document.getElementById("user")
var comment = document.getElementById("comment")

document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault();
});

// Обработка кнопки Добавить Комментарий
function submitFunction() {

    // Создание формы Комментариев
    let divComment = document.createElement('div')
    divComment.classList.add('form-container')

    let formComment = document.createElement('form') 
    formComment.classList.add('form-comment')

    commentContainer.append(divComment)
    divComment.append(formComment)

    // Создание контейнера с комментарием
    let divResult = document.createElement('div')
    divResult.classList.add('resultContainer')
    formComment.append(divResult)

    let userText = document.createElement('div')
    userText.classList.add('user')
    divResult.append(userText)
    userText.innerHTML = user.value

    let commentText = document.createElement('div')
    commentText.classList.add('comment')
    divResult.append(commentText)
    commentText.innerHTML = comment.value

    localStorage.setItem(user, user.value + " " + comment.value);

    let arr = [];
    arr.push(localStorage.getItem(user));
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}