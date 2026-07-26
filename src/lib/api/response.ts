export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export function ok<T>(data: T, message = "Success"): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
  };
}

export function fail(message: string, error?: string): ApiResponse {
  return {
    success: false,
    message,
    error,
  };
}
