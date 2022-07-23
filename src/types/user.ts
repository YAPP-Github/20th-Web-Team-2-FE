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

type MatchStatus = 'WAITING' | 'MATCHED' | 'FAILED' | 'DONE' | 'PAID';

export interface AdminUsersStatus {
  kakaoId: string;
  matchStatus: MatchStatus;
  paid: boolean;
}
