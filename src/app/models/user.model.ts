export class UserModel {
  id: number | undefined;
  name: | undefined;
  username: | undefined;
  email: string | undefined;
  address!: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number | undefined;
  website: | undefined;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  } | undefined
}
