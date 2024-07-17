 interface Token {
  token: {
    token: string | null;
  };
}

type User = {
  userid: number;
  username: string;
  email: string;
  profile?: string;
};

interface IUser {
  user: User;
}
