const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

    let myList = document.createElement('ol');
    myList.style.listStyle = "none";
    users.forEach((user) => {
        let id = user.id;
        let name = user.firstName + " " + user.lastName;
        console.log(id, name);
        let li = document.createElement('li');
        li.innerHTML = name;
        li.setAttribute('data-id', id);
        // li.data-id = id;
        // li.data-id = id;
        myList.appendChild(li);

    })

    document.body.appendChild(myList);