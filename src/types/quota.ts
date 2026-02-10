/**
 * Quota management types.
 */

// Theme types
export type ThemeColors = { bg: string; text: string; border?: string };
export type TypeColorSet = { light: ThemeColors; dark?: ThemeColors };
export type ResolvedTheme = 'light' | 'dark';

// API payload types
export interface GeminiCliQuotaBucket {
  modelId?: string;
  model_id?: string;
  tokenType?: string;
  token_type?: string;
  remainingFraction?: number | string;
  remaining_fraction?: number | string;
  remainingAmount?: number | string;
  remaining_amount?: number | string;
  resetTime?: string;
  reset_time?: string;
}

export interface GeminiCliQuotaPayload {
  buckets?: GeminiCliQuotaBucket[];
}

export interface AntigravityQuotaInfo {
  displayName?: string;
  quotaInfo?: {
    remainingFraction?: number | string;
    remaining_fraction?: number | string;
    remaining?: number | string;
    resetTime?: string;
    reset_time?: string;
  };
  quota_info?: {
    remainingFraction?: number | string;
    remaining_fraction?: number | string;
    remaining?: number | string;
    resetTime?: string;
    reset_time?: string;
  };
}

export type AntigravityModelsPayload = Record<string, AntigravityQuotaInfo>;

export interface AntigravityQuotaGroupDefinition {
  id: string;
  label: string;
  identifiers: string[];
  labelFromModel?: boolean;
}

export interface GeminiCliQuotaGroupDefinition {
  id: string;
  label: string;
  preferredModelId?: string;
  modelIds: string[];
}

export interface GeminiCliParsedBucket {
  modelId: string;
  tokenType: string | null;
  remainingFraction: number | null;
  remainingAmount: number | null;
  resetTime: string | undefined;
}

export interface CodexUsageWindow {
  used_percent?: number | string;
  usedPercent?: number | string;
  limit_window_seconds?: number | string;
  limitWindowSeconds?: number | string;
  reset_after_seconds?: number | string;
  resetAfterSeconds?: number | string;
  reset_at?: number | string;
  resetAt?: number | string;
}

export interface CodexRateLimitInfo {
  allowed?: boolean;
  limit_reached?: boolean;
  limitReached?: boolean;
  primary_window?: CodexUsageWindow | null;
  primaryWindow?: CodexUsageWindow | null;
  secondary_window?: CodexUsageWindow | null;
  secondaryWindow?: CodexUsageWindow | null;
}

export interface CodexUsagePayload {
  plan_type?: string;
  planType?: string;
  rate_limit?: CodexRateLimitInfo | null;
  rateLimit?: CodexRateLimitInfo | null;
  code_review_rate_limit?: CodexRateLimitInfo | null;
  codeReviewRateLimit?: CodexRateLimitInfo | null;
}

// Quota state types
export interface AntigravityQuotaGroup {
  id: string;
  label: string;
  models: string[];
  remainingFraction: number;
  resetTime?: string;
}

export interface AntigravityQuotaState {
  status: 'idle' | 'loading' | 'success' | 'error';
  groups: AntigravityQuotaGroup[];
  error?: string;
  errorStatus?: number;
}

export interface GeminiCliQuotaBucketState {
  id: string;
  label: string;
  remainingFraction: number | null;
  remainingAmount: number | null;
  resetTime: string | undefined;
  tokenType: string | null;
  modelIds?: string[];
}

export interface GeminiCliQuotaState {
  status: 'idle' | 'loading' | 'success' | 'error';
  buckets: GeminiCliQuotaBucketState[];
  error?: string;
  errorStatus?: number;
}

export interface CodexQuotaWindow {
  id: string;
  label: string;
  labelKey?: string;
  usedPercent: number | null;
  resetLabel: string;
}

export interface CodexQuotaState {
  status: 'idle' | 'loading' | 'success' | 'error';
  windows: CodexQuotaWindow[];
  planType?: string | null;
  error?: string;
  errorStatus?: number;
}

// Claude quota types
export interface ClaudeOAuthUsage {
  five_hour_utilization?: string;
  fiveHourUtilization?: string;
  five_hour_resets_at?: string;
  fiveHourResetsAt?: string;
  seven_day_utilization?: string;
  sevenDayUtilization?: string;
  seven_day_resets_at?: string;
  sevenDayResetsAt?: string;
  seven_day_sonnet_util?: string;
  sevenDaySonnetUtil?: string;
  seven_day_sonnet_resets?: string;
  sevenDaySonnetResets?: string;
}

export interface ClaudeQuotaPayload {
  auth_file?: string;
  authFile?: string;
  provider?: string;
  email?: string;
  organization_id?: string;
  organizationId?: string;
  organization_name?: string;
  organizationName?: string;
  plan_type?: string;
  planType?: string;
  quota?: {
    monthly_quota?: number | string;
    monthlyQuota?: number | string;
    used_quota?: number | string;
    usedQuota?: number | string;
    remaining_quota?: number | string;
    remainingQuota?: number | string;
    quota_percentage?: string;
    quotaPercentage?: string;
    reset_date?: string;
    resetDate?: string;
    reset_time?: number | string;
    resetTime?: number | string;
  };
  rate_limit?: {
    requests_limit?: number | string;
    requestsLimit?: number | string;
    requests_remaining?: number | string;
    requestsRemaining?: number | string;
  };
  rateLimit?: {
    requests_limit?: number | string;
    requestsLimit?: number | string;
    requests_remaining?: number | string;
    requestsRemaining?: number | string;
  };
  oauth_usage?: ClaudeOAuthUsage;
  oauthUsage?: ClaudeOAuthUsage;
  last_updated?: string;
  lastUpdated?: string;
}

export interface ClaudeOAuthWindow {
  id: string;
  labelKey: string;
  usedPercent: number | null;
  resetsAt?: string;
}

export interface ClaudeQuotaState {
  status: 'idle' | 'loading' | 'success' | 'error';
  email?: string;
  organizationName?: string;
  planType?: string;
  monthlyQuota?: number;
  usedQuota?: number;
  remainingQuota?: number;
  quotaPercentage?: number;
  resetDate?: string;
  requestsLimit?: number;
  requestsRemaining?: number;
  oauthWindows?: ClaudeOAuthWindow[];
  error?: string;
  errorStatus?: number;
}
