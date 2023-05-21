/**
 * Interface of Character
 * @param id	    (int) The id of the character.
 * @param name	    (string) The name of the character.
 * @param status	(string) The status of the character ('Alive', 'Dead' or 'unknown').
 * @param species	(string) The species of the character.
 * @param type	    (string) The type or subspecies of the character.
 * @param gender	(string) The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
 * @param origin	(object) Name and link to the character's origin location.
 * @param location  (object) Name and link to the character's last known location endpoint.
 * @param image	    (string) (url) Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
 * @param episode	(array(urls)) List of episodes in which this character appeared.
 * @param url	    (string(url)) Link to the character's own URL endpoint.
 * @param created	(string) Time at which the character was created in the database.
 */
export interface ICharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: ICharacterOrigin
    location: ICharacterLocation
    image: string
    episode: Array<string>
    url: string
    created: string
}

interface ICharacterOrigin {
    name: string
    url: string
}

interface ICharacterLocation {
    name: string
    url: string
}