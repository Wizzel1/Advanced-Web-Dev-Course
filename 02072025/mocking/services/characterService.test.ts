import { any } from "zod";
import { Character } from "../api/fetchCharacter";
import { getCharacterNameById, getIsCharacterAliveById } from "./characterService";
import axios, { AxiosResponse } from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
    jest.clearAllMocks();
});

describe('getCharacterNameById', () => {
    test('should return the name of the fetched character', async () => {
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

    test('should throw an error if the character is not found', async () => {
        mockedAxios.get.mockResolvedValue({
            status: 404,
            statusText: 'Not Found',
            headers: {},
            data: null,
        });

        await expect(getCharacterNameById(1)).rejects.toThrow('Failed to fetch character');
    });
});

describe('getIsCharacterAliveById', () => {
    test('should return true if the character is alive', async () => {
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

        await expect(getIsCharacterAliveById(1)).resolves.toBe(true);
    });

    test('should return false if the character is dead', async () => {
        const mockResponse: Character = {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Dead',
            species: 'Human',
            type: '',
            gender: 'Male'
        };

        mockedAxios.get.mockResolvedValue({
            data: mockResponse,
            status: 200,
            statusText: 'OK',
            headers: {}
        });

        await expect(getIsCharacterAliveById(1)).resolves.toBe(false);
    });

    test('should throw an error if the character is not found', async () => {
        mockedAxios.get.mockResolvedValue({
            status: 404,
            statusText: 'Not Found',
            headers: {},
            data: null,
        });

        await expect(getIsCharacterAliveById(1)).rejects.toThrow('Failed to fetch character');
    });
});