// src/guards/roles/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles'; // <-- export with the correct name
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
