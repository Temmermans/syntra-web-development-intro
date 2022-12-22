const input = `Monkey 0:
Starting items: 66, 59, 64, 51
Operation: new = old * 3
Test: divisible by 2
  If true: throw to monkey 1
  If false: throw to monkey 4

Monkey 1:
Starting items: 67, 61
Operation: new = old * 19
Test: divisible by 7
  If true: throw to monkey 3
  If false: throw to monkey 5

Monkey 2:
Starting items: 86, 93, 80, 70, 71, 81, 56
Operation: new = old + 2
Test: divisible by 11
  If true: throw to monkey 4
  If false: throw to monkey 0

Monkey 3:
Starting items: 94
Operation: new = old * old
Test: divisible by 19
  If true: throw to monkey 7
  If false: throw to monkey 6

Monkey 4:
Starting items: 71, 92, 64
Operation: new = old + 8
Test: divisible by 3
  If true: throw to monkey 5
  If false: throw to monkey 1

Monkey 5:
Starting items: 58, 81, 92, 75, 56
Operation: new = old + 6
Test: divisible by 5
  If true: throw to monkey 3
  If false: throw to monkey 6

Monkey 6:
Starting items: 82, 98, 77, 94, 86, 81
Operation: new = old + 7
Test: divisible by 17
  If true: throw to monkey 7
  If false: throw to monkey 2

Monkey 7:
Starting items: 54, 95, 70, 93, 88, 93, 63, 50
Operation: new = old + 4
Test: divisible by 13
  If true: throw to monkey 2
  If false: throw to monkey 0`;
const ROUNDS = 20;
let state = {};

// initialize all the monkeys with their starting items
const allMonkeys = input.split("\n\n").map((monkeyString) => {
  const parts = monkeyString.split("\n");
  const monkey = parts[0].replace(":", "").toLowerCase();
  const startingItems = parts[1].split("Starting items: ")[1].split(", ");
  state[monkey] = {
    items: startingItems,
    inspected: 0,
  };
});

for (let i = 0; i < ROUNDS; i++) {
  state = input.split("\n\n").reduce((acc, monkeyString) => {
    const parts = monkeyString.split("\n");
    const monkey = parts[0].replace(":", "").toLowerCase();
    const startingItems = acc[monkey].items;
    startingItems.forEach((item) => {
      acc[monkey].inspected++;
      const newValue = eval(parts[2].split("Operation: ")[1].replaceAll("old", item).replace("new = ", ""));
      const newWorryLevel = Math.floor(newValue / 3);
      const testValue = parseInt(parts[3].split("Test: ")[1].replace("divisible by ", ""));
      const throwTo =
        newWorryLevel % testValue === 0
          ? parts[4].split("If true: throw to ")[1].split("\n")[0].toLowerCase()
          : parts[5].split("If false: throw to ")[1].toLowerCase();

      // remove item from the current monkey
      acc[monkey].items = acc[monkey].items.filter((i) => i !== item);
      // push item to the new monkey
      acc[throwTo].items.push(newWorryLevel);
    });
    return acc;
  }, state);
}

// calculate monkey business

// get the two highest inspected values from the monkeys
const monkeyBusiness = Object.values(state)
  .map((value) => value.inspected)
  .sort((a, b) => b - a)
  .slice(0, 2)
  .reduce((a, b) => a * b);

console.log(monkeyBusiness);
