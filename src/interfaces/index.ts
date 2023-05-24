export interface UserDetailsResponse {
  data: {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
      filter_enabled: boolean;
      filter_locked: boolean;
    };
    external_urls: {
      spotify: string;
    };
    followers: {
      href: null;
      total: 4;
    };
    href: string;
    id: string;
    images: any[];
    product: string;
    type: string;
    uri: string;
  };
}

export interface UserFollowingResponseObj {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: [
    {
      height: number;
      url: string;
      width: number;
    }
  ];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface UserFollowingResponse {
  data: {
    artists: {
      items: UserFollowingResponseObj[];
      next: null;
      cursors: {
        after: null;
      };
      limit: number;
      href: string;
    };
  };
}
