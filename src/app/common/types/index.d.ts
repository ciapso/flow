// src/app/common/types/index.d.ts
export interface ApiResponse<T> {
  data: T;
  error?: string;
}
