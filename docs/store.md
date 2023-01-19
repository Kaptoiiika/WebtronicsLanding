# Redux Store

## StateSchema

файл с типами для стора сюда закидываем все редюсеры

```ts
export interface StateSchema {
  user: UserSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  feedbackForm?: FeedbackFormSchema
  articles?: ArticlesSchema
}
```

так же нам понадобиться тип для асинхронного вмонтирование редюсеров
идея взята от сюда [redux.js.org]("https://redux.js.org/usage/code-splitting#using-a-reducer-manager")

```ts
export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}
```

И сама реализация уже типизированного reducerManager

```ts
export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: Array<StateSchemaKey> = []
  const mountedReducers: MountedReducers = {}

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        keysToRemove.forEach((key) => {
          delete state[key]
        })
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer
      mountedReducers[key] = true

      combinedReducer = combineReducers(reducers)
    },
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      mountedReducers[key] = false

      combinedReducer = combineReducers(reducers)
    },
  }
}
```

## createReduxStore

Функция для создание стора, здесь из за очень сложной типизации redux проще воспользоваться возможностью JS и отключить TS в пару местах

```ts
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    // на самом деле тип .reduce таким и является но почему то TS здесь ругается
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: true, // IS_DEV
    preloadedState: initialState,
  })

  // @ts-ignore // этот косяк я так не смог нормально решить
  store.reducerManager = reducerManager

  return store
}
```

## Hooks - useDynamicModuleLoader

не отходя далеко создаем хук для вмонтирование асинх=ронных редюсеров

```ts
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
}

export function useDynamicModuleLoader({ reducers }: DynamicModuleLoaderProps) {
  // единственное место где мы будем использовать ReducerManager
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      /* здесь мы приводи name к StateSchemaKey мы можем такое позволить 
      поскольку на вход мы принимает только ключи которые входит в StateSchemaKey */
      if (store.reducerManager.getReducerMap()[name as StateSchemaKey]) return
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })
    // eslint-disable-next-line
  }, [])

  return
}
```

## StoreProvider

Создаем обычный provider и прокидываем его куда нам надо для next в pages/_app.tsx

```ts
const makeStore = () => createReduxStore()
export const wrapper = createWrapper<Store<StateSchema>>(makeStore, {
  debug: true,
})

export const StoreProvider = (props: PropsWithChildren) => {
  const { children } = props
  const { store } = wrapper.useWrappedStore({})

  return <Provider store={store}>{children}</Provider>
}
```
