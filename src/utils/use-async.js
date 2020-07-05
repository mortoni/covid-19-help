import React from 'react'
import { SharedContext } from 'context/shared-context'

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false)
  React.useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])
  return React.useCallback((...args) => (mounted.current ? dispatch(...args) : void 0), [dispatch])
}

const initialState = { status: 'idle', data: null, error: null }

function useAsync() {
  const [{ status, data, error }, setState] = React.useReducer((s, a) => ({ ...s, ...a }), initialState)
  // TODO refactor this despatch here, some times it can be undefined, not 100% sure why, maybe boostrap function call this before the context setup?
  const { dispatch } = React.useContext(SharedContext)
  const safeSetState = useSafeDispatch(setState)

  const run = React.useCallback(
    (promise, showProgress = false) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`,
        )
      }

      if (showProgress && dispatch) {
        dispatch({ type: 'progress', value: true })
      }

      safeSetState({ status: 'pending' })
      return promise.then(
        (data) => {
          if (showProgress && dispatch) {
            dispatch({ type: 'progress', value: false })
          }

          safeSetState({ data, status: 'resolved' })
          return data
        },
        (error) => {
          if (showProgress && dispatch) {
            dispatch({ type: 'progress', value: false })
          }

          safeSetState({ status: 'rejected', error })
          return error
        },
      )
    },
    [dispatch, safeSetState],
  )

  const setData = React.useCallback((data) => safeSetState({ data }), [safeSetState])
  const setError = React.useCallback((error) => safeSetState({ error }), [safeSetState])
  const reset = React.useCallback(() => safeSetState(initialState), [safeSetState])

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',
    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  }
}

export { useAsync }
