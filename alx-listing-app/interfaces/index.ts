import { ReactNode, MouseEvent, FocusEvent, CSSProperties } from 'react';
import { LinkProps } from 'next/link';

// Card component props interface for Next.js
interface CardProps {
  // Content props
  title?: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  
  // Layout props
  variant?: 'default' | 'outlined' | 'elevated' | 'filled' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  orientation?: 'horizontal' | 'vertical';
  
  // Styling props
  className?: string;
  style?: CSSProperties;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  // Interactive props
  clickable?: boolean;
  hoverable?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  
  // Next.js Image props
  image?: string;
  imageAlt?: string;
  imagePosition?: 'top' | 'bottom' | 'left' | 'right';
  imagePriority?: boolean;
  imageFill?: boolean;
  imageSizes?: string;
  
  // State props
  loading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  
  // Accessibility props
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-selected'?: boolean;
  
  // Additional props
  header?: ReactNode;
  footer?: ReactNode;
  actions?: ReactNode;
  'data-testid'?: string;
  
  // Next.js specific
  prefetch?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  replace?: boolean;
  href?: string;
  as?: string;
}

// Button component props interface for Next.js
interface ButtonProps {
  // Content props
  children?: ReactNode;
  text?: string;
  
  // Appearance props
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  // Icon props
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  
  // State props
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  
  // Styling props
  className?: string;
  style?: CSSProperties;
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  // Interaction props
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
  
  // HTML button props
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  formAction?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  value?: string;
  
  // Accessibility props
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
  'aria-controls'?: string;
  tabIndex?: number;
  
  // Next.js Link props (when button acts as link)
  href?: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string;
  
  // Link-like props
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  download?: string;
  
  // Additional props
  tooltip?: string;
  'data-testid'?: string;
  autoFocus?: boolean;
  
  // Loading state customization
  loadingText?: string;
  loadingIcon?: ReactNode;
}

// Default props for Next.js components
const defaultCardProps: Partial<CardProps> = {
  variant: 'default',
  size: 'md',
  orientation: 'vertical',
  shadow: 'sm',
  rounded: 'md',
  clickable: false,
  hoverable: false,
  loading: false,
  disabled: false,
  selected: false,
  imagePriority: false,
  imageFill: false,
  prefetch: true,
  scroll: true,
  shallow: false,
  replace: false,
};

const defaultButtonProps: Partial<ButtonProps> = {
  variant: 'default',
  size: 'md',
  color: 'default',
  type: 'button',
  loading: false,
  disabled: false,
  active: false,
  iconPosition: 'left',
  iconOnly: false,
  fullWidth: false,
  rounded: 'md',
  autoFocus: false,
  prefetch: true,
  scroll: true,
  shallow: false,
  replace: false,
};

// Extended interfaces for Next.js specific use cases
interface CardHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  avatar?: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  align?: 'left' | 'center' | 'right' | 'space-between';
  className?: string;
}

interface ButtonGroupProps {
  children: ReactNode;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  attached?: boolean;
  className?: string;
}

// Next.js specific card variant for navigation
interface NavigationCardProps extends Omit<CardProps, 'onClick'> {
  href: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string;
}

// Next.js specific button variant for navigation
interface NavigationButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string;
}

// Type guards for component variants
export const isNavigationCard = (props: CardProps | NavigationCardProps): props is NavigationCardProps => {
  return 'href' in props && typeof props.href === 'string';
};

export const isNavigationButton = (props: ButtonProps | NavigationButtonProps): props is NavigationButtonProps => {
  return 'href' in props && typeof props.href === 'string';
};

// Export all interfaces
export type {
  CardProps,
  ButtonProps,
  CardHeaderProps,
  CardFooterProps,
  ButtonGroupProps,
  NavigationCardProps,
  NavigationButtonProps,
};

export { defaultCardProps, defaultButtonProps };