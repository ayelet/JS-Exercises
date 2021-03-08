// ex35.3 - Classes - Ayelet Danieli

class SortNumber {
    constructor() {
        this.numList = [];
    }
  
    addNum(num) {  
        //if inserted return true, else false
        if (!this.isPrime(num))
            return false;
        this.numList.push(num);
        return true;
    }
    // isPrime: this could be optimized by checking until sqrt(num)
    isPrime(num) {
            for(let i = 2; i < num; i++)
              if(num % i === 0) return false;
            return num > 1;
    }
    removeNum(num){
        const index = this.numList.indexOf(num);
        if (index > -1) {
            this.numList.splice(index, 1);
          return true;
        }
        return false;
    }
    getAll() { return this.numList; }
    print() { console.log(this.numList); }

    share(anotherSortNumberClass) {
        // let newArray = this.numList;
        let union = this.numList.concat(anotherSortNumberClass.numList)
        let set = new Set(union);
        // newArray.concat(anotherSortNumberClass.numList);
        let a = set.size;
        let b = union.length;
        console.log(a,b);
        return (b-a);
    }
    union(anotherSortNumberClass) {
        let union = this.numList.concat(anotherSortNumberClass.numList)
        let set = new Set(union);
        return Array.from(set);
    }
}

let primes = new SortNumber();
primes.addNum(3);
primes.addNum(4); // this will not be inserted
primes.addNum(5);
primes.addNum(7);
primes.addNum(17);
primes.addNum(29);


primes.print();
primes.removeNum(29);
console.log("after removal: ");
primes.print();

let primes2 = new SortNumber();
primes2.addNum(1);
primes2.addNum(3);
primes2.addNum(11);
primes2.addNum(13);

primes2.print();

console.log(primes.share(primes2));
console.log(primes.union(primes2));
// primes.print();