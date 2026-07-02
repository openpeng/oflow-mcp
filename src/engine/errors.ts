export type OflowErrorCode =
  | 'CHECKPOINT_VALIDATION_FAILED'
  | 'CONFLICT'
  | 'INSTANCE_LOCKED'
  | 'INSTANCE_TOO_LARGE'
  | 'INSTANCE_VERSION_CONFLICT'
  | 'INTERNAL_ERROR'
  | 'INVALID_ALIAS'
  | 'INVALID_ARGUMENT'
  | 'INVALID_INSTANCE_ID'
  | 'INVALID_STEP_ID'
  | 'INVALID_TEMPLATE_NAME'
  | 'NOT_FOUND'
  | 'OUTPUTS_TOO_LARGE'
  | 'PATH_OUTSIDE_BASE_DIR'
  | 'PROMPT_SNAPSHOT_MISSING'
  | 'PROMPT_TOO_LARGE'
  | 'TOKEN_BUDGET_EXHAUSTED';

export class OflowError extends Error {
  readonly code: OflowErrorCode;
  readonly details?: unknown;

  constructor(code: OflowErrorCode, message: string, details?: unknown) {
    super(`${code}: ${message}`);
    this.name = 'OflowError';
    this.code = code;
    this.details = details;
  }
}

export function isOflowError(error: unknown): error is OflowError {
  return error instanceof OflowError;
}
