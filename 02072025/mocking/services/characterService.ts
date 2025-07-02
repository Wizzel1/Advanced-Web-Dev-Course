import { fetchCharacter } from "../api/fetchCharacter";

export async function getCharacterNameById(id: number): Promise<string> {
    const character = await fetchCharacter(id);
    return character.name;
}

export async function getIsCharacterAliveById(id: number): Promise<boolean> {
    const character = await fetchCharacter(id);
    return character.status === 'Alive';
}