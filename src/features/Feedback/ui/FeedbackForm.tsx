import * as yup from "yup"
import "yup-phone"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "@/shared/ui/Button/Button"
import { Input } from "@/shared/ui/Input/Input"
import { VStack } from "@/shared/ui/Stack"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { FeedbackFormModel } from "../model/types/FeedbackFormSchema"

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
  const { className } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormModel>({ resolver: yupResolver(responseSchema) })

  const onSubmit = useCallback((data: FeedbackFormModel) => {
    console.log("data", data)
  }, [])

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

        <Button type="submit">Send</Button>
      </VStack>
    </form>
  )
}
