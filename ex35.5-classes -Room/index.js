// ex35.4- Classes: Rooms - Ayelet Danieli

class Room {
  constructor(id, level, amount) {
    this.roomId = id;
    this.level = level;
    this.amount = amount;
    this.isFree = true;
  }

  populate(amount) {
    if (!this.isFree) return false;
    if (this.amount < amount) return false;
    this.isFree = false;
  }
  print()  {
    console.log(`Room: number: ${this.roomId}, level: ${this.level}, amount: ${this.amount}`);
  }
}

class Hotel {
  constructor(room) {
    this.rooms = [room];
  }
  exists(room) {
   let filtered= this.rooms.filter(r => r.roomId === room.roomId);
   if (filtered > 0) return true;
   return false;
  }
  addRoom(room) {
    if (this.exists(room)) return false;
    this.rooms.push(room);
    return true;
  }
  addNewRoom(room){}
  removeRoom(roomId) {  }
  checkFreeRooms(amount) {}
  checkIn(roomId, amount)
  HighRoomFree() {}
  getAllRoom(isFree) {}

}