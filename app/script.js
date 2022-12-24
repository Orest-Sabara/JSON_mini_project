fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('box')

            let box = document.createElement('div');
            box.innerHTML = `${user.id}) ${user.name.toUpperCase()}`;

            let a = document.createElement('a');
            a.innerHTML = ' -> show more <- ';
            a.href = `user-details.html?id=${user.id}`;
            // a.href = 'user-details.html';

            div.append(box, a);

            let wrapper = document.getElementsByClassName('wrapper')[0];
            wrapper.appendChild(div)
        }
    })