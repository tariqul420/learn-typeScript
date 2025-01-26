// enum - store constants; duplicate value is not allowed hear
// enum  type: numeric, string, heterogenous


// numeric enum
enum RequestType {
    getDate = 1,
    readData,
    deleteData,
    saveData,
}

console.log(RequestType);

// string enum
enum RequestType2 {
    readData = "Read_Data",
    deleteData = "Delete_Data",
}

console.log(RequestType2);
console.log(RequestType.deleteData);
console.log(RequestType["deleteData"]);

// heterogenous enum
enum heterogenous {
    readData = "Read_Data",
    deleteData = "Delete_Data",
    id = 253
}