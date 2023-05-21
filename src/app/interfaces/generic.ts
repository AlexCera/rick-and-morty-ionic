/**
 * Interface Generic
 * @param Type string | number | array | object | custom
 */
export interface IGeneric<Type> {
    (arg: Type): Type;
}