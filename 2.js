const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16,
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22,
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25,
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26,
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20,
    },
];

//  2.	Write a function which filter users who has  scoresGreaterThan85,

function filterScore(users, scoresGreaterThan) {
    return users.filter((it) => it.scores > scoresGreaterThan);
}
console.log(filterScore(users, 85));
let newUser = {
    name: 'Tom',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
};

// 	Write a function which addUser  to the user array only if the user does not exist.

function addUser(users, addUser) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === addUser.name) {
            return 'user Already exist';
        }
    }
    users.push(addUser);
    return users;
}
console.log(addUser(users, newUser));

// 	Write a function which addUserSkill which can add skill to a user only if the user exist.

// addUserSkill;
function addUserSkill(users, addUserSkills) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === addUserSkills.name) {
            users[i].skills.push(addUserSkills.skill);
            return users;
        }
    }
    return 'no User Found';
}
// console.log(addUserSkill(users, { name: 'Thomas', skill: 'NodeJs' }));

// 	Write a function which editUser if the user exist in the users array.

// editUser;
function editUser(users, editUserDetails) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === editUserDetails.name) {
            if (editUserDetails.scores) {
                users[i].scores = editUserDetails.scores;
            }
            if (editUserDetails.age) {
                users[i].age = editUserDetails.age;
            }
            return users[i];
        }
    }
    return 'no User Found';
}
console.log(editUser(users, { name: 'Thomas', scores: 100, age: 25 }));
