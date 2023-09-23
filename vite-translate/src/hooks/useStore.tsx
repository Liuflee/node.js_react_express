import { useReducer } from 'react'
import { type State, type Action, Language } from '../types.d.tsx'

const initialState: State = {
  fromLang: 'auto',
  toLang: 'en',
  fromText: '',
  result: '',
  loading: false
}

const reducer = (state: State, action: Action) => {
  const { type } = action

  if (type === 'INTERCHANGE_LANG') {
    if (state.fromLang === 'auto') {
      return state
    }
    return {
      ...state,
      fromLang: state.toLang,
      toLang: state.fromLang
    }
  }

  if (type === 'SET_FROM_LANG') {
    return {
      ...state,
      fromLang: action.payload
    }
  }

  if (type === 'SET_TO_LANG') {
    return {
      ...state,
      toLang: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export function useStore() {
    const [{
        fromLang,
        toLang,
        fromText,
        result,
        loading },
        dispatch] = useReducer(reducer, initialState)

    const interchangeLang = () => {
        dispatch({ type: 'INTERCHANGE_LANG' })
    }

    const setFromLang = (payload: Language) => {
        dispatch({ type: 'SET_FROM_LANG', payload })
    }

    const setToLang = (payload: Language) => {
        dispatch({ type: 'SET_TO_LANG', payload})
    }

    const setFromText = (payload: Language) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }

    const setResult = (payload: Language) => {
        dispatch({ type: 'SET_RESULT', payload })
    }


      
    return {
        fromLang,
        toLang,
        fromText,
        result,
        loading,
        interchangeLang,
        setFromLang,
        setToLang,
        setFromText,
        setResult
    }
    
}
