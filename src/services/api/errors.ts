
export function getErrorMessage(error: any): string {
  if (!error) return 'Unknown error occurred'
  if (error.data?.message) return error.data.message
  if (error.message) return error.message
  return 'Something went wrong'
}
export function isAuthError(error: any) { return error?.status === 401 }
export function isValidationError(error: any) { return error?.status === 422 }
