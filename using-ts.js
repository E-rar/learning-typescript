var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2, showResult) {
    if (showResult) {
        console.log(num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value, true));
});
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person.role.push('admin');
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
