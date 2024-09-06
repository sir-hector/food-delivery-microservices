import { InputType, Field } from "@nestjs/graphql";
import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator'

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must need to be one string' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Passoword is required' })
  @MinLength(8, { message: 'Passoword must be at least 8 characters.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email is invalid' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required' })
  phone_number: number;

  // @Field()
  // address?: string;
}

@InputType()
export class LoginDto {

    @Field()
    @IsNotEmpty({message: "Email is required"})
    @IsEmail({}, {message: "Email is invalid"})
    email: string;

    @Field()
    @IsNotEmpty({message: "Passoword is required"})
    password: string
}

@InputType()
export class ActivationDto {
  @Field()
  @IsNotEmpty({ message: 'Actication token is required' })
  activationToken: string;

  @Field()
  @IsNotEmpty({ message: 'Activation code is required' })
  activationCode: string;
}


