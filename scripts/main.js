function loadContent(page) {
  fetch(page)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.text();
      })
      .then(data => {
          const contentDiv = document.getElementById('content');
          if (contentDiv) {
              contentDiv.innerHTML = data;
          } else {
              console.error('Element with ID "content" not found.');
          }
      })
      .catch(error => console.error('Error loading content:', error));
}
