type fileSource = {type: "file"; path:string};
const fileSource : fileSource = {
    type: "file",
    path:"some/path/to/file.csv",
};
type DBSource = {type: "db"; connectionUrl: string};
const dbSource: DBSource = {
    type: "db",
    connectionUrl: "some-connection-url",
};
type Source = fileSource | DBSource;

function isFile(source:Source) {
    return source.type === "file";
};
function loadingData(source:Source) {
    // if ("path" in source) {
    if (isFile(source)) {
        // source.path; => use that to open the file
        return;
    }
    // source.connectionUrl; +. to reach out to database
}