// import global stylesheet
import './style.css'

import { slides as introduction } from './slides/01-introduction.mdx'
import { slides as content } from './slides/02-content.mdx'
import { slides as others } from './slides/03-others.mdx'
import { slides as closing } from './slides/99-closing.mdx'

// import `slides` from your mdx files and spread into `slides` export
// theme export for code-surfer
export { nightOwl as theme } from 'code-surfer'

// theme exports for mdx-deck since `theme` is used by code-surfer
export const themes = []

// Spread your slides here...
export const slides = [...introduction, ...content, ...others, ...closing]
