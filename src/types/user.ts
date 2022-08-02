export interface LoginRequest {
  password: string | '';
  userName: string | '';
}

export interface LoginResponse {
  accessToken: string;
}

export interface KakaoIdResponse {
  app_id: number;
  expires_in: number;
  id: number;
}

export interface AdminPaymentTargets {
  femaleId: string;
  maleId: string;
  payName: string;
  isPaid: boolean;
}
