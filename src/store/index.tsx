import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Reducer } from './reducer'


const persistConfig = {
    key: 'ROOT',
    storage: storage,
    stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
}

const myPersistReducer = persistReducer(persistConfig, Reducer)

const store = createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk)))

const persistor = persistStore(store)

export { store, persistor }
