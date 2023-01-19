import { createSlice } from "@reduxjs/toolkit"
import { UploadFeedback } from "../services/UploadFeedback/UploadFeedback"
import { FeedbackFormSchema } from "../types/FeedbackFormSchema"

export const feedbackFormInitialState: FeedbackFormSchema = {
  isloading: false,
}

export const feedbackFormSlice = createSlice({
  name: "feedbackForm",
  initialState: feedbackFormInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UploadFeedback.pending, (state) => {
        state.isloading = true
        state.error = ""
      })
      .addCase(UploadFeedback.fulfilled, (state) => {
        state.isloading = false
      })
      .addCase(UploadFeedback.rejected, (state, action) => {
        state.isloading = false
        state.error = action.payload
      })
  },
})

export const { actions: feedbackFormActions } = feedbackFormSlice
export const { reducer: feedbackFormReducers } = feedbackFormSlice
