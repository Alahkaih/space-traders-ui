import { faction } from "./faction"

export type newUserInput = {
    symbol: string,
    faction: faction
}

export interface NewUserOutput {
    token:    string;
    agent:    Agent;
    contract: Contract;
    faction:  Faction;
    ship:     Ship;
}

export interface Agent {
    accountId:    string;
    symbol:       string;
    headquarters: string;
    credits:      number;
}

export interface Contract {
    id:            string;
    factionSymbol: string;
    type:          string;
    terms:         Terms;
    accepted:      boolean;
    fulfilled:     boolean;
    expiration:    string;
}

export interface Terms {
    deadline: string;
    payment:  Payment;
    deliver:  Deliver[];
}

export interface Deliver {
    tradeSymbol:       string;
    destinationSymbol: string;
    unitsRequired:     number;
    unitsFulfilled:    number;
}

export interface Payment {
    onAccepted:  number;
    onFulfilled: number;
}

export interface Faction {
    symbol:       string;
    name:         string;
    description:  string;
    headquarters: string;
    traits:       Trait[];
}

export interface Trait {
    symbol:      string;
    name:        string;
    description: string;
    units?:      number;
}

export interface Ship {
    symbol:       string;
    nav:          Nav;
    crew:         Crew;
    fuel:         Fuel;
    frame:        Frame;
    reactor:      Reactor;
    engine:       Engine;
    modules:      Module[];
    mounts:       Mount[];
    registration: Registration;
    cargo:        Cargo;
}

export interface Cargo {
    capacity:  number;
    units:     number;
    inventory: Trait[];
}

export interface Crew {
    current:  number;
    capacity: number;
    required: number;
    rotation: string;
    morale:   number;
    wages:    number;
}

export interface Engine {
    symbol:       string;
    name:         string;
    description:  string;
    condition:    number;
    speed:        number;
    requirements: EngineRequirements;
}

export interface EngineRequirements {
    power: number;
    crew:  number;
}

export interface Frame {
    symbol:         string;
    name:           string;
    description:    string;
    moduleSlots:    number;
    mountingPoints: number;
    fuelCapacity:   number;
    condition:      number;
    requirements:   EngineRequirements;
}

export interface Fuel {
    current:  number;
    capacity: number;
    consumed: Consumed;
}

export interface Consumed {
    amount:    number;
    timestamp: string;
}

export interface Module {
    symbol:       string;
    name:         string;
    description:  string;
    capacity?:    number;
    requirements: ModuleRequirements;
    range?:       number;
}

export interface ModuleRequirements {
    crew:  number;
    power: number;
    slots: number;
}

export interface Mount {
    symbol:       string;
    name:         string;
    description:  string;
    strength:     number;
    requirements: EngineRequirements;
    deposits?:    string[];
}

export interface Nav {
    systemSymbol:   string;
    waypointSymbol: string;
    route:          Route;
    status:         string;
    flightMode:     string;
}

export interface Route {
    departure:     Departure;
    destination:   Departure;
    arrival:       string;
    departureTime: string;
}

export interface Departure {
    symbol:       string;
    type:         string;
    systemSymbol: string;
    x:            number;
    y:            number;
}

export interface Reactor {
    symbol:       string;
    name:         string;
    description:  string;
    condition:    number;
    powerOutput:  number;
    requirements: ReactorRequirements;
}

export interface ReactorRequirements {
    crew: number;
}

export interface Registration {
    name:          string;
    factionSymbol: string;
    role:          string;
}
