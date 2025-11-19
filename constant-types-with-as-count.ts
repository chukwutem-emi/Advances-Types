type DataStore = {
    [prop: string] : number | boolean;
};

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;

let roles = ["admin", "guest", "editor"] as const ;
