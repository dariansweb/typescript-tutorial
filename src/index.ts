// index.ts
interface User {
    id: number;
    name: string;
  }
  
  class Greeter {
    private user: User;
  
    constructor(user: User) {
      this.user = user;
    }
  
    greet(): string {
      return `Hello, ${this.user.name}! Your user ID is ${this.user.id}.`;
    }
  }
  
  const user: User = { id: 1, name: "Dude" };
  const greeter = new Greeter(user);
  
  console.log(greeter.greet());
  