type fileSource = {path:string};
const fileSource : fileSource = {
    path:"some/path/to/file.csv",
};
type DBSource = {connectionUrl: string};
const dbSource: DBSource = {
    connectionUrl: "some-connection-url",
};
type Source = fileSource | DBSource;

function loading(source:Source) {
    // open + read file OR reach out to database Server
}