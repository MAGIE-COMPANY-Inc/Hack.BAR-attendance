import dayjs from 'dayjs'
import { atom } from 'recoil'

export const monthIdxState = atom({
  key: 'monthIdx',
  default: dayjs().month()
})

export const monthState = atom({
  key: 'month',
  default: []
})