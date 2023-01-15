export interface ProfileSchema {
  profileList: Record<string, ProfileModel>
}

export interface ProfileModel {
  name: string
  status: string
  bio: string
  avatar: string
}
