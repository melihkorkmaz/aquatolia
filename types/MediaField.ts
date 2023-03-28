export interface MediaField {
  id?: number;
  ext?: string;
  height?: number;
  width?: number;
  url?: string;
  mime?: string;
  formats?: {
    thumbnail: {
      url: string;
      width?: number;
      height?: number;
    };
    small: {
      url: string;
      width?: number;
      height?: number;
    };
    medium: {
      url: string;
      width?: number;
      height?: number;
    };
    large: {
      url: string;
      width?: number;
      height?: number;
    };
  }
}
