import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = new Date();
    console.log(`Start..@${startTime}`)
    return next.handle().pipe(
      tap(() => {
        const endTime = new Date();
        console.log(`End...after${endTime.getTime() - startTime.getTime()}ms...@${endTime}`)
      })
    )
  }
}
