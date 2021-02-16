const persons = [{name:'ayelet', age: 30, city:'haifa', grades: [56, 80]},
{name:'david', age: 23, city: 'tel aviv', grades: [80, 90]}, 
{name:'neta', age: 21, city:'jerusalem', grades: [100, 80]}];
// we want to print "my $name is XXX and my age is"
persons.map((p)=>{
    console.log(`my name is ${p.name}, age: ${p.age}, city: ${p.city}, my grades are: ${p.grades}`);
    const maxGrade = Math.max(p.grades[0], p.grades[1]);
    console.log(` my max grade is ${maxGrade}`)
});


// now let's try filter
let result = persons.filter(p=> {
    return p.age > 25;
});


console.log(`peolpe over 25 got these grades: ${result[0].grades}`);

// we can concatanate filter and map:

console.log(`\n *** concatanate filter and map: all people who live in tel-aviv ***`)
let result1 = persons.filter(p=> {
    return p.city =='tel aviv';
}).map((p)=>{
    console.log(`my name is ${p.name}, age: ${p.age}, city: ${p.city}, my grades are: ${p.grades}`);
    const maxGrade = Math.max(p.grades[0], p.grades[1]);
    console.log(`my max grade is ${maxGrade}`)
});


