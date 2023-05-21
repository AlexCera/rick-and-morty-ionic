/**
 * Interface of Location
 * @param id	        (int) The id of the location.
 * @param name	        (string) The name of the location.
 * @param type	        (string) The type of the location.
 * @param dimension	    (string) The dimension in which the location is located.
 * @param residents	    (array(urls)) List of character who have been last seen in the location.
 * @param url	        (string(url)) Link to the location's own endpoint.
 * @param created	    (string) Time at which the location was created in the database.
 */
export interface ILocation {
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<string>
    url: string
    created: string
}