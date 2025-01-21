export interface Chefs {
    _id:string;
    name:string;
    _type:"Chef";
image?:{
    asset :{
        _ref:string;
        _type:"image";

    }
};
description?:string;
}