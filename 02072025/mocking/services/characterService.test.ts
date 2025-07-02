import { Character } from "../api/fetchCharacter";
import { getCharacterNameById } from "./characterService";
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('getCharacterNameById should return the name of the fetched character', async () => {
    const mockResponse: Character = {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male'
    };
    
    mockedAxios.get.mockResolvedValue({
        data: mockResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
    });

    const characterName = await getCharacterNameById(1);
    expect(characterName).toBe('Rick Sanchez');
});