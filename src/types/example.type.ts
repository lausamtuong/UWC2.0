export interface exampleType{
    id:number
    username:string
    email:string
    active:boolean
    address:string
}

export type TypeAlias = Pick<exampleType,'id'|'username'>[]