import { IProduct } from "./product.ts";


export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    results: IProduct[];
}

export class Pagination implements IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    results: IProduct[] = [];
}