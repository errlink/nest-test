import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  getHello(@Req() req: Request, @Res() res: Response): any {
    console.log(req.params);
    return res.status(200).send(req.query);
  }
}
