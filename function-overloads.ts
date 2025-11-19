function getLength(val: string) : string;
function getLength(val: any[]) : any;
function getLength(val: string | any[]) {
    if (typeof val === "string") {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} words`
    }
    return val.length;
};
const numberOfWords = getLength("does this work");

const numItems = getLength(["Sport", "Cookies"]);