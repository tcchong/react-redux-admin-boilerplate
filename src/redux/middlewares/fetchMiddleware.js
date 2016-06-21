import { apiEndpoint } from '../../../config/env.config';

export default function fetchMiddleware(fetch) {
  return ({ getState, dispatch }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    const {
      types,
      query,
      ...rest
    } = action;

    if (!query) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    const {
      url,
      method,
      data
    } = query;

    next({ type: REQUEST, ...rest });

    const fetchOptions = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };

    if (method !== 'GET' && method !== 'HEAD') {
      fetchOptions.body = JSON.stringify(data);
    }

    return fetch(`${apiEndpoint}${url}`, fetchOptions)
            .then((response) => response.json())
            .then(
              (result) => next({ type: SUCCESS, result, ...rest }),
              (error) => next({ type: FAILURE, error, ...rest })
            )
            .catch((error) => {
              console.log('middleware error', error);
              next({ type: FAILURE, error, ...rest });
            });
  };
}
