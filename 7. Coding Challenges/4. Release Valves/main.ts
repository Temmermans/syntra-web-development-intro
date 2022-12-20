const i = `Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`;

interface Valve {
  name: string;
  flowRate: number;
  tunnels: string[];
}

interface State {
  averagePressure: number;
  pressureCumul: number;
  currentPressure: number;
  previousValve: string | null;
  currentValve: string;
  openValves: string[];
}

const valves: Valve[] = i.split("\n").map((valve) => {
  return {
    name: valve.split(" ")[1],
    flowRate: parseInt(valve.split("rate=")[1]),
    tunnels: valve
      .split("to ")[1]
      .replace(/valves|valve/g, "")
      .split(", ")
      .map((v) => v.trim()),
  };
});
const ROUNDS = 30;
const state: State = {
  averagePressure: valves.reduce((acc, v) => acc + v.flowRate, 0) / valves.length,
  pressureCumul: 0,
  currentPressure: 0,
  previousValve: null,
  currentValve: "AA",
  openValves: [],
};

function getNextTunnelName(adjacentTunnels: string[], previousValve: string | null, openValves: string[]) {
  let tunnelName = adjacentTunnels.filter((t) => t !== previousValve).filter((t) => !openValves.includes(t))[0];
  if (!tunnelName) {
    tunnelName = adjacentTunnels.filter((t) => t !== previousValve)[0];
  }
  if (!tunnelName) {
    tunnelName = adjacentTunnels[0];
  }
  return tunnelName;
}

for (let i = 0; i < ROUNDS; i++) {
  const currentValveName = state.currentValve;
  const currentValve = valves.find((v) => v.name === currentValveName)!;
  const isCurretValveOpen = state.openValves.includes(currentValveName);

  // make sure the first valve that is open, the pressure us immediatly released
  state.pressureCumul += state.currentPressure === 0 ? currentValve.flowRate : state.currentPressure;

  if (
    !isCurretValveOpen &&
    currentValve.flowRate > 0 &&
    currentValve.flowRate > state.averagePressure / valves.length
  ) {
    // open valve
    state.openValves.push(currentValve.name);
    state.currentPressure += currentValve.flowRate;
    state.averagePressure =
      valves.filter((v) => !state.openValves.includes(v.name)).reduce((acc, v) => acc + v.flowRate, 0) / valves.length;
    continue;
  }

  const adjacentTunnels = currentValve.tunnels;
  const nextTunnelName = getNextTunnelName(adjacentTunnels, state.previousValve, state.openValves);
  const nextTunnel = valves.find((v) => v.name === nextTunnelName)!;

  state.previousValve = currentValveName;
  state.currentValve = nextTunnel.name;
}

console.log(state);
