// Middleware that checks if a request has a valid token
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // log the request, the method and the path
    console.log('Request...', req.method, req.path);

    // check if the token is valid
    const token = req.headers['authorization'];
    const expectedToken = process.env.TOKEN;

    if (expectedToken && token === expectedToken) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }
}
