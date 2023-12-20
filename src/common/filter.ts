import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        console.log(exception);
        
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const error = {
            statusCode: exception.getStatus(),
            message: exception.message,
            // stack: exception.stack,
            url: request.url,
        };
        return response.status(error.statusCode).json(error);
    }
}