import {
      CanActivate,
      ExecutionContext,
      Inject,
      Injectable,
      UnauthorizedException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './decorator/public.decorator';
import { UserService } from 'src/service/user.service';
import { User } from 'src/model/user.model';

@Injectable()
export class BasicAuthGuard implements CanActivate {
      constructor(private reflector: Reflector,
                  @Inject(UserService)
                  private userService: UserService,
      ) { }

      async canActivate(context: ExecutionContext): Promise<boolean> {

            const isPublic = this.reflector.getAllAndOverride<boolean>(
                  IS_PUBLIC_KEY,
                  [
                        context.getHandler(),
                        context.getClass(),
                  ],
            );

            if (isPublic) {
                  return true; 
            }

            const request = context.switchToHttp().getRequest();
            const authHeader = request.headers.authorization;

            if (!authHeader || !authHeader.startsWith('Basic ')) {
                  throw new UnauthorizedException();
            }

            const base64Credentials = authHeader.split(' ')[1];
            const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
            const [username, password] = credentials.split(':');

            
            if (!(await this.userService.find(new User(username, password, false)))) {
                  throw new UnauthorizedException();
            }

            return true;
      }
}