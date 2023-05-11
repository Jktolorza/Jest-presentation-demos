import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  
  async getCharacterById(id: number): Promise<any> {
    try {
      if (id <= 0) {
        throw new Error('Invalid ID. ID must be greater than 0.');
      }
  
      const response = await lastValueFrom(this.httpService.get(`https://rickandmortyapi.com/api/character/${id}`));
  
      if (response.status !== 200) {
        throw new Error(`Failed to retrieve character with ID ${id}. Status code: ${response.status}.`);
      }
  
      return response.data;
    } catch (error) {
      throw new Error(`Failed to retrieve character with ID ${id}: ${error.message}`);
    }
  }
  
  async getCharacterNameById(id: number) {
    const character = await this.getCharacterById(id);
    return character.name;
  }

  async getCharacterNameById2(id: number): Promise<string> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        return data.name;
    } catch (error) {
        console.error(error);
        throw new Error(`Unable to get character with ID ${id}`);
    }
}
}