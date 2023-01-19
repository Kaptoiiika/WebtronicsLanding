import { AppDispatch } from "@/shared/config/StoreConfig"
import { useDispatch } from "react-redux"

export const useAppDispatch = () => useDispatch<AppDispatch>()
