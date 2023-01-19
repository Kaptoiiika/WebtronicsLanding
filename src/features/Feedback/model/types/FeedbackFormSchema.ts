export interface FeedbackFormSchema  {
  isloading?: boolean
  error?: string
}

export interface FeedbackFormModel {
  email: string
  phone: string
  name: string
}
