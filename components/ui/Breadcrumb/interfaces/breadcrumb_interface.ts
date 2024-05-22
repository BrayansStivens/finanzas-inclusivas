export interface BreadcrumbProps {
  title?: string;
  mainTitle?: string;
  parent?: {
    name: string;
    url?: string;
    isLink?: boolean;
  };
  subParent?: {
    name: string;
    url?: string;
    isLink?: boolean;
  };
  homeRoute?: string;
}
