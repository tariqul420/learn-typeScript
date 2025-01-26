// enum - store constants; duplicate value is not allowed hear
// enum  type: numeric, string, heterogenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["getDate"] = 1] = "getDate";
    RequestType[RequestType["readData"] = 2] = "readData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
    RequestType[RequestType["saveData"] = 4] = "saveData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
console.log(RequestType.deleteData);
console.log(RequestType["deleteData"]);
// heterogenous enum
var heterogenous;
(function (heterogenous) {
    heterogenous["readData"] = "Read_Data";
    heterogenous["deleteData"] = "Delete_Data";
    heterogenous[heterogenous["id"] = 253] = "id";
})(heterogenous || (heterogenous = {}));
