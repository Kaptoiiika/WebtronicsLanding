import { FormateError } from "@/shared/api/Errors/FormateError/FormateError"
import { ThunkConfig } from "@/shared/config/StoreConfig"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { FeedbackFormModel } from "../../types/FeedbackFormSchema"

type FeedbackRespounce = {}

export const UploadFeedback = createAsyncThunk<
  void,
  FeedbackFormModel,
  ThunkConfig<string>
>(
  "AuthByUsername/loginByUsernameOrEmail",
  async ({ email, name, phone }, thunkAPI) => {
    const body = { email, name, phone }

    try {
      await thunkAPI.extra.api.post<FeedbackRespounce>("/feedback", body)

      return
    } catch (error) {
      return thunkAPI.rejectWithValue(FormateError(error))
    }
  }
)
