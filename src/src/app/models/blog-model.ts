export interface BlogModel {
  id: number;
  title: string;
  author: {
    name: {
      firstName: string;
      lastName: string;
    };
    about: string;
  };
  content: string;
  created: {
    iso: string;
    timestamp: string;
  };
}
