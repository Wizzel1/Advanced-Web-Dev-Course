import axios from "axios";
import { z } from "zod";

const characterSchema = z.object({
    id: z.number(),
    name: z.string(),
    status: z.enum(['Alive', 'Dead', 'unknown']),
    species: z.string(),
    type: z.string(),
    gender: z.enum(['Male', 'Female', 'Genderless', 'unknown']),
})
export type Character = z.infer<typeof characterSchema>;
export async function fetchCharacter(id: number): Promise<Character> {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const character = characterSchema.parse(response.data);
    console.log(character);
    return character;
}