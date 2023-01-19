import { Store } from "redux"
import { Provider } from "react-redux"
import { StateSchema } from "../config/StateSchema"
import { createReduxStore } from "../config/store"
import { createWrapper } from "next-redux-wrapper"
import { PropsWithChildren } from "react"

const makeStore = () => createReduxStore()
export const wrapper = createWrapper<Store<StateSchema>>(makeStore, {
  debug: true,
})

export const StoreProvider = (props: PropsWithChildren) => {
  const { children } = props
  const { store } = wrapper.useWrappedStore({})

  return <Provider store={store}>{children}</Provider>
}
