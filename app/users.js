let url = new URL(location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then((user) => {
        let div = document.createElement('div');

        //title
        let titleName = document.createElement('h3');
        titleName.innerHTML = `${user.name.toUpperCase()}`;

        //id name email
        let userNameId = document.createElement('div');
        userNameId.classList.add('userNameId');

        let contactDiv = document.createElement('div');
        contactDiv.innerText = `id: ${user.id}`;
        let username = document.createElement('div');
        username.innerText = `username: ${user.username} `;
        let email = document.createElement('div');
        email.innerHTML = `email: ${user.email} <br><br> `;

        userNameId.append(contactDiv, username, email)

        //address
        let address = document.createElement('div');
        address.classList.add('address')

        let zipcodeCity = document.createElement('div');
        zipcodeCity.innerHTML = `Address <br> city: ${user.address.city}, zipcode: ${user.address.zipcode}`;
        let streetSuite = document.createElement('div');
        streetSuite.innerText = `street: ${user.address.street}, suite: ${user.address.suite}`;

        // address geo
        let geo = document.createElement('ul');
        geo.innerText = 'Geo'

        let lat = document.createElement('li');
        lat.innerText = `lat: ${user.address.geo.lat}`;
        let lng = document.createElement('li');
        lng.innerHTML = `lng: ${user.address.geo.lng}<br><br>`;

        geo.append(lat, lng);
        address.append(zipcodeCity, streetSuite, geo);

        //contacts
        let contacts = document.createElement('div');
        contacts.classList.add('contacts');

        let phone = document.createElement('div');
        phone.innerText = `Phone No: ${user.phone}`;
        let website = document.createElement('div');
        website.innerHTML = `Website: https://www.${user.website}/ <br><br>`;

        contacts.append(phone, website)

        //company
        let company = document.createElement('div');
        company.classList.add('company');

        let companyName = document.createElement('div');
        companyName.innerHTML = `Company <br> name: ${user.company.name}`;
        let catchPhrase = document.createElement('div');
        catchPhrase.innerText = `catch phrase: ${user.company.catchPhrase}`;
        let bs = document.createElement('div');
        bs.innerHTML = `bs: ${user.company.bs}<br><br>`;

        company.append(companyName, catchPhrase, bs)

        //posts button
        let divPosts = document.createElement('div');
        divPosts.classList.add('target');


        let btn = document.createElement('button');
            btn.classList.add('btn');
        btn.innerHTML = `post of current user`;
        btn.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    for (const post of posts) {
                        let postDiv = document.createElement('div');
                        postDiv.innerHTML = `post №${post.id} <br><br> <i>${post.title}</i>`;

                        const postAhref = document.createElement('a');
                        postAhref.href = `post-details.html?id=${id}&userPostId=${post.id}`;

                            divPosts.append(postAhref)

                        postAhref.appendChild(postDiv)
                        div.appendChild(divPosts);
                    }
                })}

        div.append(titleName, userNameId, address, contacts, company, btn, divPosts)
        document.body.appendChild(div);

    })