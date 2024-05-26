import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ChatDto } from 'src/open-ai/dto/chat.dto';

@Injectable()
export class Llama3Service {
  async chat(chatDto: ChatDto): Promise<any> {
    // get the URL from the environment
    const url = process.env.LLAMA3_URL;
    //use axios to make a request to the llama3 API
    const response = await axios.post(url, chatDto);
    return response.data;
  }
}
