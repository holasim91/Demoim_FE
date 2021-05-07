import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import Exhibition from "./modules/exhibition";
import Team from "./modules/team";
import SmallTalk from "./modules/smalltalk";
import user from "./modules/user";
import Image from "./modules/image";
import Apply from "./modules/apply";
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  exhibition: Exhibition,
  team: Team,
  smalltalk: SmallTalk,
  user: user,
  image: Image,
  apply: Apply,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
);

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();