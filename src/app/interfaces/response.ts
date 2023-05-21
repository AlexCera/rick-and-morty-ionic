/**
 * Interface of Response
 * @param info (object)
 * @param results
 */
export interface IResponse<T> {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: null
    },
    results: T;
}