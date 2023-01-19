import { StateSchema } from "@/shared/config/StoreConfig";

export const getFeedbackLoading = (state: StateSchema) => state.feedbackForm?.isloading
export const getFeedbackError = (state: StateSchema) => state.feedbackForm?.error
