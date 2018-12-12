
const chars = ["a", "b", "c", "d", "e", "f"];
const nums = ["1", "2", "3", "4", "5", "6"];
class robot {
    constructor() {
        this.name = this.generateRandomName();
        
    }
    //  get generateRandomName()
    //  {
    //      return generateRandomName()
    //  }
      generateRandomName()
    {
          return `${chars[parseInt(Math.random() * 6)]}${chars[parseInt(Math.random() * 6)]}${chars[parseInt(Math.random() * 6)]}${nums[parseInt(Math.random() * 6)]}${nums[parseInt(Math.random() * 6)]}${nums[parseInt(Math.random() * 6)]}`;
    }

}