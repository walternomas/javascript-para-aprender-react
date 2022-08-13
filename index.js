let data = fetch('https://jsonplaceholder.typicode.com/posts');

console.log(data);

const ul = document.createElement('ul');
//const li = document.createElement('li');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log('finalizó la carga');
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach(post => {
      const li = document.createElement('li');
      li.innerText = post.title;
      ul.append(li);
    });
    document.body.append(ul);
  })

console.log('linea 2');