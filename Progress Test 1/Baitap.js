//BÀI 1
let input1=prompt("Mời nhập chuỗi ký tự bất kỳ");
console.log("Chuỗi trước khi sắp xếp: ",input1);
const arr1=[...input1];
for(let i=0;i<arr1.length-1;i++)
    for(let j=0;j<arr1.length-2;j++){
        let temp=arr1[i];
        arr1[i]=arr1[j];
        arr1[j]=temp;
}
console.log("Chuỗi sau khi sắp xếp: ",arr1.join(''));

//BÀI 2
let input2=prompt("Mời nhập chuỗi ký tự bất kỳ");
const arr2=[...input3];


//BÀI 3
let input3=prompt("Mời nhập chuỗi ký tự bất kỳ");
console.log("Mảng trước khi sắp xếp: ",input3);
const arr3=[...input3];
for(let i=0;i<arr3.length;i++)
    for(let j=1;j<arr3.length;j++){
        if(arr3[i]===arr3[j]){
            arr3[j].slice(0,1);
        }
}
console.log("Mảng sau khi sắp xếp: ",arr3.join(''));

//BÀI 4
const nv_MindX=[
    {
        name: 'a',
        age: 24,
        salary: '1600$',
        position: 'Manager'
    },
    {
        name: 'b',
        age: 27,
        salary: '2000$',
        position: 'Boss'
    },
    {
        name: 'c',
        age: 20,
        salary: '800$',
        position: 'Employee'
    }
]
console.log('--- READ ---');
console.log({nv_MindX});
console.log('--- CREATE ---');
nv_MindX.push({
    name: 'd',
    age: 25,
    salary: '1000$',
    position: 'Employee'
})
console.log({nv_MindX});
console.log('--- UPDATE ---');
for (let index = 0; index < nv_MindX.length; index++) {
    if(nv_MindX[index].name==='b'){
        nv_MindX[index].age= 30;
    }
}
console.log({nv_MindX});
console.log('--- DELETE ---');
for (let index = 0; index < nv_MindX.length; index++) {
    if(nv_MindX[index].name==='a'){
        delete nv_MindX[index];
    }
}
console.log({nv_MindX});

//BÀI 5