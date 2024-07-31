import {ObjectType, Field} from '@nestjs/graphql'
import {User} from '../entities/user.entity'

@ObjectType()
export class ErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code?: string;
}

@ObjectType()
export class RegisterResponse {
  @Field()
  activation_token: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class ActivationResponse {
  @Field(() => User)
  user: User | any;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class LoginRespone {
  @Field(() => User, { nullable: true })
  user?: User | any;

  @Field()
  accessToken?: string;

  @Field()
  refreshToken?: string;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
@ObjectType()
export class LogoutResponse {
  @Field()
  message?: string;
}