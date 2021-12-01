const button=document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add (num1: number , num2 : number,showResult:boolean){
    if(showResult){
        console.log(num1+num2);
    }
    else{
        return num1+num2;
    }
    
}

button.addEventListener('click',function(){
    console.log(add(+input1.value,+input2.value,true))
})

const person: {
    name:string;
    age:number;
    hobbies: string[];
    role:[number,string];
} ={
    name:'Maximilian',
    age:30,
    hobbies:['Sports','Cooking'],
    role:[2,'author']
}
// person.role.push('admin');
enum Role {ADMIN=5, READ_ONLY,AUTHOR};