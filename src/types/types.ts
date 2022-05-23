export type UserType = {
  id: string;
  name: string;
  profilePicture: string;
  uid: string
};

export type UserPutRequest =
  | UserType
  | Pick<UserType, "id" | "name">
  | Pick<UserType, "id" | "profilePicture">
  | Pick<UserType, "id" | "uid">
