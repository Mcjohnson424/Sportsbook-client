export const HOME = {
  href: "/",
  as: () => `/`,
};
export const FORGOT_PASSWORD = {
  href: "/forgot-password",
  as: () => `/forgot-password`,
};
export const SIGN_IN = {
  href: "/sign_in",
  as: () => `/sign_in`,
};
export const SIGN_UP = {
  href: "/sign_up",
  as: () => `/sign_up`,
};
export const DASHBOARD = {
  href: "/dashboard",
  as: () => `/dashboard`,
};
export const DASHBOARD_ACCOUNT = {
  href: "/dashboard/account",
  as: () => `/dashboard/account`,
};
export const DASHBOARD_SPORTSBOOKS = {
  href: "/dashboard/sportsbooks",
  as: () => `/dashboard/sportsbooks`,
};

export const DASHBOARD_BETLOG = {
  href: "/dashboard/bet-log",
  as: () => `/dashboard/bet-log`,
};
export const DASHBOARD_REPORTING = {
  href: "/dashboard/reporting",
  as: () => `/dashboard/reporting`,
};

export const DASHBOARD_SPORTSBOOKS_ACCOUNTS = {
  href: "/dashboard/sportsbooks/accounts",
  as: () => `/dashboard/sportsbooks/accounts`,
};
export const DASHBOARD_SPORTSBOOKS_ACCOUNTS_LIST = {
  href: "/dashboard/sportsbooks/accounts/list",
  as: () => `/dashboard/sportsbooks/accounts/list`,
};

export const DASHBOARD_SPORTSBOOKS_ACCOUNTS_CREATE = {
  href: "/dashboard/sportsbooks/accounts/create",
  as: () => `/dashboard/sportsbooks/accounts/create`,
};
export const DASHBOARD_SPORTSBOOKS_ACCOUNTS_EDIT = {
  href: "/dashboard/sportsbooks/accounts/:accountId/edit",
  as: (params) => `/dashboard/sportsbooks/accounts/${params.accountId}/edit`,
};
export const DASHBOARD_SPORTSBOOKS_ACCOUNTS_SHOW = {
  href: "/dashboard/sportsbooks/accounts/:accountId/show",
  as: (params) => `/dashboard/sportsbooks/accounts/${params.accountId}/show`,
};
export const DASHBOARD_SPORTSBOOKS_ACCOUNTS_GETDATA = {
  href: "/dashboard/sportsbooks/accounts/:accountId/getdata",
  as: (params) => `/dashboard/sportsbooks/accounts/${params.accountId}/getdata`,
};
