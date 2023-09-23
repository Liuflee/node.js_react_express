import { type SUPPORTED_LANGUAGES, type AUTO_LANG } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLang = typeof AUTO_LANG
export type FromLanguage = Language | AutoLang


export type State = {
    fromLang: FromLanguage
    toLang: Language
    fromText: string
    result: string
    loading: boolean
}

export type Action = 
    | { type: 'INTERCHANGE_LANG'}
    | { type: 'SET_FROM_LANG', payload: FromLanguage }
    | { type: 'SET_TO_LANG', payload: Language }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }

export enum SectionType {
    From = 'from',
    To = 'to'
}

