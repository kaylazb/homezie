import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const res = ctx.getResponse();

        return next.handle().pipe(
            map((responseData) => {

                const { data, message } = responseData ?? {};

                return {
                    success: true,
                    data,
                    code: res.statusCode,
                    message
                }
            }),
        );
    }
}
