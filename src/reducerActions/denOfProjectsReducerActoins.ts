import { denOfProjectsActionTypes } from "../actionTypes/denOfProjectsActionTypes";


export const one=(val:any)=>{
  return {
      type:denOfProjectsActionTypes.ONE,
      payload:val
      
  }
}
export const two=(val:any)=>{
  return {
      type:denOfProjectsActionTypes.TWO,
      payload:val
      
  }
}
export const res=()=>{
  return {
      type:denOfProjectsActionTypes.RES,
      
      
  }
}
export const ac=()=>{
  return {
      type:denOfProjectsActionTypes.AC,
      
      
  }
}
export const c=()=>{
  return {
      type:denOfProjectsActionTypes.C,
      
      
  }
}
