const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const textComment = document.querySelector('').value.trim();
    const idPost = document.querySelector('').value;
        
    if (textComment) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };


  // need to update queryselector once post.handlebars is complete
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);