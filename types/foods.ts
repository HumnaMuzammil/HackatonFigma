export interface Foods {
    _id:string;
    name:string;
    _type:"Food";
image?:{
    asset :{
        _ref:string;
        _type:"image";

    }
};
price:number;
description?:string;
}

