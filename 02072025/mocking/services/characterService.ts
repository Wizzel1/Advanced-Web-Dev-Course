import { fetchCharacter } from "../api/fetchCharacter";

export async function getCharacterNameById(id: number): Promise<string> {
    const character = await fetchCharacter(id);
    return character.name;
}