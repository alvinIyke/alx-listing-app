// Environment and API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  VERSION: process.env.NEXT_PUBLIC_API_VERSION || 'v1',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
    RESEND_VERIFICATION: '/auth/resend-verification',
  },
  
  // User endpoints
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    DELETE_ACCOUNT: '/user/account',
    CHANGE_PASSWORD: '/user/change-password',
    PREFERENCES: '/user/preferences',
    NOTIFICATIONS: '/user/notifications',
  },
  
  // Content endpoints
  POSTS: {
    LIST: '/posts',
    CREATE: '/posts',
    GET_BY_ID: (id: string) => `/posts/${id}`,
    UPDATE: (id: string) => `/posts/${id}`,
    DELETE: (id: string) => `/posts/${id}`,
    LIKE: (id: string) => `/posts/${id}/like`,
    UNLIKE: (id: string) => `/posts/${id}/unlike`,
    COMMENTS: (id: string) => `/posts/${id}/comments`,
  },
  
  // File upload endpoints
  UPLOAD: {
    IMAGE: '/upload/image',
    FILE: '/upload/file',
    AVATAR: '/upload/avatar',
    BULK: '/upload/bulk',
  },
  
  // Search endpoints
  SEARCH: {
    GLOBAL: '/search',
    USERS: '/search/users',
    POSTS: '/search/posts',
    SUGGESTIONS: '/search/suggestions',
  },
} as const;

// Application Configuration
export const APP_CONFIG = {
  NAME: 'My Next.js App',
  DESCRIPTION: 'A modern web application built with Next.js',
  VERSION: '1.0.0',
  AUTHOR: 'Your Name',
  KEYWORDS: ['nextjs', 'react', 'typescript', 'tailwind'],
  
  // SEO Configuration
  SEO: {
    DEFAULT_TITLE: 'My Next.js App',
    TITLE_TEMPLATE: '%s | My Next.js App',
    DEFAULT_DESCRIPTION: 'A modern web application built with Next.js',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
    TWITTER_HANDLE: '@yourusername',
    FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '',
  },
  
  // Pagination
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100,
    POSTS_PER_PAGE: 12,
    COMMENTS_PER_PAGE: 20,
  },
  
  // File Upload Limits
  UPLOAD_LIMITS: {
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    MAX_IMAGE_SIZE: 5 * 1024 * 1024,  // 5MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    ALLOWED_FILE_TYPES: ['application/pdf', 'application/msword', 'text/plain'],
  },
} as const;

// UI Constants
export const UI_CONSTANTS = {
  // Component sizes
  SIZES: {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
  },
  
  // Component variants
  VARIANTS: {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    OUTLINE: 'outline',
    GHOST: 'ghost',
    LINK: 'link',
    DESTRUCTIVE: 'destructive',
  },
  
  // Colors
  COLORS: {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
  },
  
  // Breakpoints (matching Tailwind defaults)
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
  },
  
  // Z-index layers
  Z_INDEX: {
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
    TOAST: 1080,
  },
  
  // Animation durations
  ANIMATION: {
    FAST: 150,
    NORMAL: 200,
    SLOW: 300,
    SLOWER: 500,
  },
} as const;

// UI Text Constants
export const UI_TEXT = {
  // Common actions
  ACTIONS: {
    SAVE: 'Save',
    CANCEL: 'Cancel',
    DELETE: 'Delete',
    EDIT: 'Edit',
    CREATE: 'Create',
    UPDATE: 'Update',
    SUBMIT: 'Submit',
    RESET: 'Reset',
    CONFIRM: 'Confirm',
    BACK: 'Back',
    NEXT: 'Next',
    PREVIOUS: 'Previous',
    CLOSE: 'Close',
    OPEN: 'Open',
    SHOW: 'Show',
    HIDE: 'Hide',
    LOADING: 'Loading...',
    RETRY: 'Retry',
  },
  
  // Navigation
  NAVIGATION: {
    HOME: 'Home',
    DASHBOARD: 'Dashboard',
    PROFILE: 'Profile',
    SETTINGS: 'Settings',
    HELP: 'Help',
    ABOUT: 'About',
    CONTACT: 'Contact',
    PRIVACY: 'Privacy Policy',
    TERMS: 'Terms of Service',
    LOGOUT: 'Logout',
    LOGIN: 'Login',
    REGISTER: 'Register',
  },
  
  // Error messages
  ERRORS: {
    GENERIC: 'Something went wrong. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
    UNAUTHORIZED: 'You are not authorized to perform this action.',
    FORBIDDEN: 'Access forbidden.',
    NOT_FOUND: 'The requested resource was not found.',
    SERVER_ERROR: 'Server error. Please try again later.',
    VALIDATION_ERROR: 'Please check your input and try again.',
    TIMEOUT: 'Request timed out. Please try again.',
    UPLOAD_ERROR: 'File upload failed. Please try again.',
    UPLOAD_SIZE_ERROR: 'File size exceeds the limit.',
    UPLOAD_TYPE_ERROR: 'File type not supported.',
  },
  
  // Success messages
  SUCCESS: {
    SAVED: 'Changes saved successfully.',
    CREATED: 'Created successfully.',
    UPDATED: 'Updated successfully.',
    DELETED: 'Deleted successfully.',
    UPLOADED: 'File uploaded successfully.',
    EMAIL_SENT: 'Email sent successfully.',
    PASSWORD_CHANGED: 'Password changed successfully.',
    PROFILE_UPDATED: 'Profile updated successfully.',
  },
  
  // Form validation
  VALIDATION: {
    REQUIRED: 'This field is required.',
    EMAIL_INVALID: 'Please enter a valid email address.',
    PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters.',
    PASSWORD_WEAK: 'Password must contain uppercase, lowercase, and numbers.',
    CONFIRM_PASSWORD: 'Passwords do not match.',
    PHONE_INVALID: 'Please enter a valid phone number.',
    URL_INVALID: 'Please enter a valid URL.',
    FILE_REQUIRED: 'Please select a file.',
    IMAGE_REQUIRED: 'Please select an image.',
  },
  
  // Status messages
  STATUS: {
    DRAFT: 'Draft',
    PUBLISHED: 'Published',
    ARCHIVED: 'Archived',
    PENDING: 'Pending',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
    ONLINE: 'Online',
    OFFLINE: 'Offline',
  },
  
  // Placeholders
  PLACEHOLDERS: {
    SEARCH: 'Search...',
    EMAIL: 'Enter your email',
    PASSWORD: 'Enter your password',
    NAME: 'Enter your name',
    PHONE: 'Enter your phone number',
    MESSAGE: 'Enter your message',
    COMMENT: 'Write a comment...',
    TITLE: 'Enter title',
    DESCRIPTION: 'Enter description',
    TAGS: 'Enter tags separated by commas',
    URL: 'Enter URL',
  },
  
  // Empty states
  EMPTY_STATES: {
    NO_DATA: 'No data available.',
    NO_RESULTS: 'No results found.',
    NO_POSTS: 'No posts yet.',
    NO_COMMENTS: 'No comments yet.',
    NO_NOTIFICATIONS: 'No notifications.',
    NO_MESSAGES: 'No messages.',
    EMPTY_FOLDER: 'This folder is empty.',
    EMPTY_CART: 'Your cart is empty.',
  },
  
  // Confirmation messages
  CONFIRMATIONS: {
    DELETE: 'Are you sure you want to delete this item?',
    DELETE_ACCOUNT: 'Are you sure you want to delete your account? This action cannot be undone.',
    LOGOUT: 'Are you sure you want to logout?',
    DISCARD_CHANGES: 'You have unsaved changes. Are you sure you want to discard them?',
    LEAVE_PAGE: 'Are you sure you want to leave this page?',
    RESET_FORM: 'Are you sure you want to reset the form?',
  },
} as const;

// Route Constants
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  VERIFY_EMAIL: '/auth/verify-email',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  POSTS: '/posts',
  POST_DETAIL: (id: string) => `/posts/${id}`,
  POST_CREATE: '/posts/create',
  POST_EDIT: (id: string) => `/posts/${id}/edit`,
  USERS: '/users',
  USER_PROFILE: (id: string) => `/users/${id}`,
  SEARCH: '/search',
  HELP: '/help',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  NOT_FOUND: '/404',
  SERVER_ERROR: '/500',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
  CART: 'cart',
  SEARCH_HISTORY: 'search_history',
  FORM_DRAFT: 'form_draft',
  LAST_VISIT: 'last_visit',
  SIDEBAR_COLLAPSED: 'sidebar_collapsed',
  NOTIFICATION_SETTINGS: 'notification_settings',
  ONBOARDING_COMPLETED: 'onboarding_completed',
} as const;

// Cookie Names
export const COOKIE_NAMES = {
  SESSION: 'session',
  CSRF_TOKEN: 'csrf_token',
  CONSENT: 'cookie_consent',
  REMEMBER_ME: 'remember_me',
  LANGUAGE: 'language',
  THEME: 'theme',
} as const;

// Query Keys (for React Query/SWR)
export const QUERY_KEYS = {
  USER: 'user',
  POSTS: 'posts',
  POST: (id: string) => `post-${id}`,
  COMMENTS: (postId: string) => `comments-${postId}`,
  NOTIFICATIONS: 'notifications',
  SEARCH: (query: string) => `search-${query}`,
  USERS: 'users',
  PROFILE: (id: string) => `profile-${id}`,
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/yourusername',
  FACEBOOK: 'https://facebook.com/yourpage',
  INSTAGRAM: 'https://instagram.com/yourusername',
  LINKEDIN: 'https://linkedin.com/company/yourcompany',
  GITHUB: 'https://github.com/yourusername',
  YOUTUBE: 'https://youtube.com/yourchannel',
} as const;

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'contact@example.com',
  PHONE: '+1 (555) 123-4567',
  ADDRESS: '123 Main St, City, State 12345',
  SUPPORT_EMAIL: 'support@example.com',
  BUSINESS_HOURS: 'Mon-Fri 9AM-5PM EST',
} as const;

// Type exports for better TypeScript support
export type ApiEndpoint = typeof API_ENDPOINTS;
export type Route = typeof ROUTES;
export type StorageKey = typeof STORAGE_KEYS;
export type QueryKey = typeof QUERY_KEYS;