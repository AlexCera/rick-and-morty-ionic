/**
 * Interface of Episode
 * @param id	        (int) The id of the episode.
 * @param name	        (string) The name of the episode.
 * @param air_date	    (string) The air date of the episode.
 * @param episode	    (string) The code of the episode.
 * @param characters	(array(urls)) List of characters who have been seen in the episode.
 * @param url	        (string(url)) Link to the episode's own endpoint.
 * @param created	    (string) Time at which the episode was created in the database.
 */
export interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Array<string>
    url: string
    created: string
}