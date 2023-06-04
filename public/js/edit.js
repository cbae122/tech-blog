// const post_id = document.querySelector('input[name="post-id"]').value;
// console.log(post_id);

// const editFormHandler = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('input[name="post-title"]').value
//     const content = document.querySelector('input[name="content"]').value

//     console.log(title);
//     console.log(content);


//     const response = await fetch(`/api/post/${post_id}`, {
//         method: 'POST',
//         body: JSON.stringify({ title, content }),
//         headers: { 'Content-Type': 'application/json' },
//     });
//     console.log(response);

//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         alert('Failed to edit post');
//     }
//     document.location.replace('/dashboard');
// };


async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value
    const content = document.querySelector('input[name="content"]').value

    console.log(title);
    console.log(content);

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_id: id, title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to edit post');
    }

};

const deleteFormHandler = async () => {
    await fetch(`/api/post/${post_id}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard');
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editFormHandler);
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteFormHandler);