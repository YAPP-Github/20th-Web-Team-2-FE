export interface LoginRequest {
  password: 'string' | '';
  userName: 'string' | '';
}

export interface LoginResponse {
  accessToken: 'string';
}

type MatchStatus = 'WAITING' | 'MATCHED' | 'FAILED' | 'DONE' | 'PAID';

export interface AdminUsersStatus {
  kakaoId: string;
  matchStatus: MatchStatus;
  paid: boolean;
}
