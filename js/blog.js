let addCommentButton = document.querySelector('#addComment');
let comment = document.querySelector('#comment');


function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    if(hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor="white"
        wrapDiv.append(textBox, replyButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton);
    }
    setOnLocalStorage();
}

const commentContainer = document.getElementById('comments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});


function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('comments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('comments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Post';
        wrapDiv.append(textArea, addButton);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
        setOnLocalStorage();
    }
});