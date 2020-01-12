/// <reference types="node" />
export declare type BencodexValue = null | boolean | bigint | string | Buffer | BencodexDict | BencodexList;
export interface BencodexDict extends Map<string | Buffer, BencodexValue> {
}
export interface BencodexList extends Array<BencodexValue> {
}
export declare type Encodable = BencodexValue | undefined | number | ArrayBuffer | EncodableDict | EncodableObject | EncodableArray;
export interface EncodableDict extends Map<string | Buffer, Encodable> {
}
export interface EncodableObject {
    [key: string]: Encodable;
}
export interface EncodableArray extends Array<Encodable> {
}
export declare function encode(data: Encodable): Buffer;
export declare function decode(data: Buffer): BencodexValue | undefined;
