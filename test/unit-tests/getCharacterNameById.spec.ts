import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../../src/app.service';
import { HttpModule } from '@nestjs/axios';



describe('RickAndMortyService', () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            providers: [AppService],
        }).compile();

        service = module.get<AppService>(AppService);
    });

    describe('getCharacterNameById', () => {
        it(`Given an ID between 1 and 826
            When getCharacterNameById is executed
            Then should return the name of the character's ID`, async () => {
            // Arrenge
            const id = 1;
            const expectedName = 'Rick Sanchez';
            // Act
            const result = await service.getCharacterNameById(id);
            // Assert
            expect(result).toBe(expectedName);
        });

        it(`Given an ID less than 1
            When getCharacterNameById is executed
            Then should throw an error when attempting to retrieve the name of a character with an invalid ID`, async () => {
            // Arrenge
            const id = -1;
            // Act
            // Assert
            await expect(service.getCharacterNameById(id)).rejects.toThrow('Invalid ID. ID must be greater than 0.');
        });

        it(`Given an ID greater than 826 (last character ID)
            When getCharacterNameById is executed
            should throw an error when attempting to retrieve the name of a character that does not exist`, async () => {
            // Arrenge
            const id = 9999;
            // Act
            // Assert
            await expect(service.getCharacterNameById(id)).rejects.toThrow(`Failed to retrieve character with ID ${id}: Request failed with status code 404`);
        });
    });
});