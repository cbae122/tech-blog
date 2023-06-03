const post_id = document.querySelector('').value;
console.log(post_id);

const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('').value
    const content = document.querySelector('').value
    console.log(title);
    console.log(content);


    const response = await fetch(`/api/post/${post_id}`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.rreplace('/dashboard');
    } else {
        alert('Failed to edit post');
    }
    document.location.replace('/dashboard');
};

const deleteFormHandler = async () => {
    await fetch(`/api/post/${post_id}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard');
};


// need to update queryselector once post.handlebars is complete
document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);
document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);