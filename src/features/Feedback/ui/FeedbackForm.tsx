import { classNames } from "@/shared/lib/classNames/classNames"
import { Button } from "@/shared/ui/Button/Button"
import { Input } from "@/shared/ui/Input/Input"
import { VStack } from "@/shared/ui/Stack"
import { useCallback } from "react"
import styles from "./FeedbackForm.module.scss"

type FeedbackFormProps = {
  className?: string
}

export const FeedbackForm = (props: FeedbackFormProps) => {
  const { className } = props

  const onSend = useCallback(() => {
    console.log("send")
  }, [])

  return (
    <form onSubmit={onSend} className={className}>
      <VStack align="stretch" gap="24">
        <VStack align="stretch" gap="16">
          <Input placeholder="Name" type={"text"} />
          <Input placeholder="Phone" type={"tel"} />
          <Input placeholder="E-mail" type={"email"} />
        </VStack>

        <Button type="submit">Send</Button>
      </VStack>
    </form>
  )
}
