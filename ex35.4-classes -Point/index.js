// ex35.4- Classes: Point - Ayelet Danieli

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  addToX(x) {
    this.x += x;
  }
  addToY(y) {
    this.y += y;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  addPoint(point) {
    this.x += point.getX();
    this.y += point.getY();
  }
  isSame(otherPoint) {
    if (this.x === otherPoint.getX() && this.y === otherPoint.getY())
      return true;
    return false;
  }
  print() {
    console.log(`Point:[${this.x},${this.y}]`);
  }
}

class PointWorld {
  constructor() {
    this.points = [];
  }
  addPoint(point) {
    this.points.push(point);
  }
  static pointCmp(point1, point2) {
    return;
  }
  sortPoints() {
    this.points.sort((p1, p2) => p2.y - p1.y);
  }
  sumX() {
    //   function reducer(a,b) { return a += b.getX(); };
    let sum=  this.points.reduce((a,b) => a+b.x, 0);
    return sum;
  }
  // return true if point is in the class, else false
  contains(point) {
    let filtered = this.points.filter((p) => p.isSame(point));
    if (filtered.length > 0) return point;
    return false;
  }
  removeDoublePoints() {
    this.points.forEach((p) => {
      let filteredPts = this.points.filter((point) => point.isSame(p));
      if (filtered.length > 1) {
        // point is twice or more
        let i = this.points.indexOf(p);
        this.points.splice(i, 1); //remove the current point
      }
    });
  } 
  print() { 
    console.log("Point collection:");  
    this.points.forEach(p => p.print());}
}

let pW = new PointWorld();

pW.addPoint(new Point(3,4));
pW.addPoint(new Point(5,4));
pW.addPoint(new Point(8,7));
pW.addPoint(new Point(3,4));
console.log(pW.contains(new Point(3,4)));
console.log(pW.contains(new Point(4,4)));
console.log(pW.sumX());
pW.print();
