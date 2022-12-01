var cl=console.log;

var ages = [12, 13, 14, 15, 2, 6, 36, 58, 59, 23, 45, 75, 8, 6];

// forEach >>is a metheod 
// forEach method accepts another function as a argument 
// anonymous function >> a function without name 
// callback function >> a function which is passed as parameter/argument in another function 

// arrayName.forEach(callBackFunction(parameter){
//    parameter>>each and every element of a 
// }

//we want reverse index number then what can we do 

// for (i=ages.length-1; i>=0; i--){
//    cl(ages[i])
// }

//we have to get array number by using for loop 
// for (var i=0; i<ages.length; i++){
//    cl(ages[i])
// }


//we have to get array number by using forEach loop
// ages.forEach(function(age){
//    cl(age)
// })

var skills=["HTML5", "CSS3", "Javascipt","SASS","Typescipt","Angular"];

//#second parameter of callBack function represent index number 
// skills.forEach(function(skill,i){
//    cl( (i+1) + " I love " + skill)
// })

//Example
//creat ul and li
var skillsInfo=document.getElementById('skillsInfo');

var result=`<ul class="list-group">`;
skills.forEach(function(skill){
   result+=`<li class="list-group-item"> I love ${skill} </li>`
});
result+=`</ul>`;

skillsInfo.innerHTML=result;


var element=[
   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ];

 var eleInfo=document.getElementById('eleInfo');
 var result1=" ";
 element.forEach(function(ele,i){
   //cl(ele)
   result1+=`<tr>
               <td>${i + 1}</td>
               <td>${ele.name}</td>
               <td>${ele.weight}</td>
               <td>${ele.symbol}</td>
            </tr>`
 })
eleInfo.innerHTML=result1;


 var authorsInfo=[ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

var info=document.getElementById('info');

result2='';
authorsInfo.forEach(function(author,i){
   result2+=`<tr>
                 <td>${i+1}</td>
                 <td>${author.author}</td>
                 <td>${author.title}</td>
                 <td>${author.libraryID}</td>                  
            </tr>`
})
info.innerHTML=result2;
