import { atom } from 'recoil'

type EventListType = {
  id: number,
  title: string,
  schedule: Date,
  description: string,

}
 
const defaultEventList:EventListType[] = [];
 
export const eventListState = atom({
  key: 'eventListState',
  default: defaultEventList
})