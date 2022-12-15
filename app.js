const callApi = url => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayData(data))
    .catch(err => console.log(err))
}
callApi();

const displayData = data => {
    // console.log(data);
let Lists = '';
data.forEach(user => {
    Lists = Lists + `<div id="user-list" class="col-xl-6 col-md-6 m-auto user-list p-4 my-3">
          <h6 class="id">${user.id}</h6>

          <div class="user-content text-center">
          <p>${user.username}</p>
           <h5>${user.name}</h5>
           <button onclick="userBtn('${user.id}')" class="userBtn">${user.username} Info</button>
          </div>

    </div>`
   
})
const userContainer= document.getElementById("userContainer");
userContainer.innerHTML = Lists ;
}


const userBtn = id =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("userContainer").style.display="none"
        userInfo(data);
    })

}


const userInfo= user => {
    let users= ''
    users = users + `<div id="userPage" class="col-xl-10 col-md-8 m-auto mt-4">
    <div id="userClose" onclick="hideUser()" class=" d-flex justify-content-end">
    <i class="bi bi-x-circle-fill"></i>
    </div>
             <h5>Name :  ${user.name}</h5>
             <p>Phone :  ${user.phone}</p>
             <p>Email :  ${user.email}</p>
             <p>Website :  ${user.website}</p>
             <p>Comapany :  ${user.company.name}</p>
             <p>City :  ${user.address.city}</p>
             <p>Zip code :  ${user.address.zipcode}</p>
    </div>`
    const userDiv = document.getElementById("userInfo")
    userDiv.innerHTML = users ;
    
}



const hideUser = hide => {
    document.getElementById("userPage").style.display="none"
 document.getElementById("userContainer").style.display="block"
}