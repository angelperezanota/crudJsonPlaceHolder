const table = document.querySelector('#usersList tbody');
function ReadUsers(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => {
      users.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML += `
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${'Street ' + user.address.street + ', ' + user.address.suite + ' City: ' + user.address.city + ' ZIP Code: ' + user.address.zipcode}</td>
              <td>${user.phone}</td>
              <td>${user.website}</td>
              <td>${user.company.name}</td>
              <td>${user.company.catchPhrase}</td>
              <td>${user.company.bs}</td>
              <td><button >Edit</button></td>
              <td><button>Delete</button></td>
          `;
          table.appendChild(row);                
      });
  }) 
  .catch(error => console.log('Hubo un error : ' + error.message))
}

ReadUsers()