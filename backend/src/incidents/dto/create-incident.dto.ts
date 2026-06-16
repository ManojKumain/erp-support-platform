import { IsEnum, IsString, MinLength } from "class-validator";
import { IncidentPriority } from "@prisma/client";

export class CreateIncidentDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(5)
  description: string;

  @IsEnum(IncidentPriority)
  priority: IncidentPriority;
}