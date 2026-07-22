export const COOKIE_CONSENT_KEY = "doobot_cookie_consent";
export const COOKIE_PREFERENCES_KEY = "doobot_cookie_preferences";

export type CookieConsentState = "accepted" | "rejected" | "configured";

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
}

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};
