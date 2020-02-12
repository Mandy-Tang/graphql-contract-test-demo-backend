import { NestMiddleware, Injectable } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const requestTime = new Date();
    console.log(`Request...@${requestTime}`);
    next();
    const responseTime = new Date();
    console.log(`Response...after ${responseTime.getMilliseconds() - requestTime.getMilliseconds()}ms...@${responseTime}`);
  }
}