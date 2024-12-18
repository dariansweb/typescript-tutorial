// 1. Basic String Enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  
  // Using the enum
  let move: Direction = Direction.Up;
  console.log(`Moving: ${move}`); // Outputs: Moving: UP
  
  // 2. Numeric Enum (Auto-Incremented Values)
  enum Status {
    Inactive, // 0
    Active,   // 1
    Suspended // 2
  }
  
  // Accessing numeric enums
  let currentStatus: Status = Status.Active;
  console.log(`Current Status: ${currentStatus}`); // Outputs: Current Status: 1
  
  // Getting enum name from value
  console.log(`Status name: ${Status[1]}`); // Outputs: Status name: Active
  
  // 3. Custom Numeric Enum
  enum ErrorCode {
    NotFound = 404,
    Unauthorized = 401,
    Forbidden = 403,
  }
  
  // Using custom numeric enums
  let error: ErrorCode = ErrorCode.NotFound;
  console.log(`Error Code: ${error}`); // Outputs: Error Code: 404
  
// 4. Enum with Computed and Constant Members
enum FileAccess {
    // `None` is a constant member. It gets the value `0` because enums in TypeScript
    // auto-increment numeric values starting from 0 unless specified otherwise.
    None, // 0
  
    // `Read` is explicitly assigned a value using a bitwise shift operation (`1 << 0`).
    // `1 << 0` means "shift the binary value of 1 to the left by 0 places," so it remains 1.
    Read = 1 << 0, // 1 (binary: 0001)
  
    // `Write` is assigned a value using another bitwise shift (`1 << 1`).
    // `1 << 1` means "shift the binary value of 1 to the left by 1 place," so it becomes 2.
    Write = 1 << 1, // 2 (binary: 0010)
  
    // `ReadWrite` is computed by combining the `Read` and `Write` values
    // using the bitwise OR operator (`|`).
    // Bitwise OR: 0001 | 0010 = 0011 (binary), which equals 3 in decimal.
    ReadWrite = Read | Write, // 3 (binary: 0011)
  
    // `G` is a computed member. Its value is the length of the string "Generated",
    // which is calculated at compile time.
    G = "Generated".length // 9
  }
  
  console.log(FileAccess.ReadWrite); // Outputs: 3
  console.log(FileAccess.G); // Outputs: 9
  
  // 5. Enum with Reverse Mapping (Numeric Enums Only)
  enum StatusWithReverse {
    Offline = 0,
    Online = 1,
    Away = 2
  }
  console.log(StatusWithReverse.Online); // Outputs: 1
  console.log(StatusWithReverse[1]); // Outputs: Online
  
  // 6. Enum as Function Argument
  function respond(recipient: string, message: Status): void {
    console.log(`${recipient} is currently ${Status[message]}.`);
  }
  respond("Dude", Status.Active); // Outputs: Dude is currently Active.
  
  // 7. Enum-Like Object (Const Enums)
  const enum Light {
    Red,
    Green,
    Yellow,
  }
  
  // Using const enums
  let trafficLight: Light = Light.Green;
  console.log(`Light is: ${trafficLight}`); // Outputs: Light is: 1
  
  // 8. Practical Use Case: Enum for Configuration
  enum LogLevel {
    Debug,
    Info,
    Warn,
    Error,
    Fatal,
  }
  
  // Function that uses the enum
  function logMessage(level: LogLevel, message: string): void {
    if (level >= LogLevel.Error) {
      console.error(`[ERROR]: ${message}`);
    } else {
      console.log(`[LOG]: ${message}`);
    }
  }
  logMessage(LogLevel.Debug, "This is a debug message."); // Outputs: [LOG]: This is a debug message.
  logMessage(LogLevel.Fatal, "Something went very wrong!"); // Outputs: [ERROR]: Something went very wrong!
  