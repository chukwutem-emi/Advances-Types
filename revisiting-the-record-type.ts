type DataStore = {
    [prop: string] : number | boolean;
};

let store: DataStore = {};

// ...
let dataObj: Record<string, number | boolean>
store.id = 5;
store.isOpen = false;