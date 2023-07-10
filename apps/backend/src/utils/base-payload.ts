import type { ZodError, ZodIssue } from 'zod';

export type UserError = {
  message: string;
  field?: string;
  code?: string | number;
};

export interface BasePayload {
  userErrors: Array<UserError>;
}

export function createPayload<T extends BasePayload>(): T {
  return { userErrors: [] as Array<UserError> } as T;
}

export function createValidationError(message: string): UserError;
export function createValidationError(
  field: string,
  message: string
): UserError;

export function createValidationError(arg1: string, arg2?: string): UserError {
  const code = 422;

  if (arg2 !== undefined) {
    return { code, field: arg1, message: arg2 };
  }

  return { code, message: arg1 };
}

export function createValidationErrors<T>(
  zodError: ZodError<T>,
  mapper?: (issue: ZodIssue) => string
): Array<UserError> {
  const userErrors: Array<UserError> = [];
  const flatError = zodError.flatten(mapper);

  Object.keys(flatError.fieldErrors).forEach((field) => {
    userErrors.push(
      createValidationError(field, flatError.fieldErrors[field].join('\n'))
    );
  });

  flatError.formErrors.forEach((message) => {
    userErrors.push(createValidationError(message));
  });

  return userErrors;
}

export function createInternalServerError(message: string): UserError {
  return { code: 500, message };
}

export function createUnauthorizedError(message: string): UserError {
  return { code: 401, message };
}
