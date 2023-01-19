import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { CombinedState, Reducer } from "redux"
import { StateSchema, ThunkExtraArg } from "./StateSchema"
import { createReducerManager } from "./reducerManager"
import { apiClient } from "@/shared/api/apiClient"
import { feedbackFormReducers } from "@/features/Feedback"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    feedbackForm: feedbackFormReducers,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArg = {
    api: apiClient,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
