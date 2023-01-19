import * as yup from "yup"
import "yup-phone"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "@/shared/ui/Button/Button"
import { Input } from "@/shared/ui/Input/Input"
import { VStack } from "@/shared/ui/Stack"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader"
import { FeedbackFormModel } from "../model/types/FeedbackFormSchema"
import { UploadFeedback } from "../model/services/UploadFeedback/UploadFeedback"
import { useSelector } from "react-redux"
import {
  getFeedbackError,
  getFeedbackLoading,
} from "../model/selectors/feedbackFormSelectors"
import { Typography } from "@/shared/ui/Typography/Typography"
import { feedbackFormReducers } from "../model/slice/FeedbackFormSlice"

type FeedbackFormProps = {
  className?: string
}

const responseSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().phone("ru").required(),
  })
  .required()

export const FeedbackForm = (props: FeedbackFormProps) => {
  useDynamicModuleLoader({
    reducers: { feedbackForm: feedbackFormReducers },
  })
  const { className } = props
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getFeedbackLoading)
  const uploadError = useSelector(getFeedbackError)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormModel>({ resolver: yupResolver(responseSchema) })

  const onSubmit = useCallback(
    (data: FeedbackFormModel) => {
      dispatch(UploadFeedback(data)).then()
    },
    [dispatch]
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <VStack align="stretch" gap="24">
        <VStack align="stretch" gap="16">
          <Input
            error={String(errors.name?.message || "")}
            placeholder="Name"
            {...register("name")}
          />
          <Input
            error={String(errors.phone?.message || "")}
            placeholder="phone"
            type={"tel"}
            {...register("phone")}
          />
          <Input
            error={String(errors.email?.message || "")}
            placeholder="E-mail"
            {...register("email")}
          />
        </VStack>

        <Button type="submit" disabled={isLoading}>
          Send
        </Button>
        {uploadError && <Typography>{uploadError}</Typography>}
      </VStack>
    </form>
  )
}
