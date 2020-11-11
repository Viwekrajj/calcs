import {one,two,ac,c,res} from "../reducerActions/denOfProjectsReducerActoins";



export const mapStateToProps = (state:any) => {
  return {

      num1: state.num1,
      num2: state.num2,
      value: state.value,
      op: state.op

  }
}





export function mapDispatchToProps  (dispatch:any)  {
  return {

      one: (val:any) => { dispatch(one(val)) },
      two: (lal:any) => { dispatch(two(lal)) },
      res: () => { dispatch(res()) },
      ac: () => { dispatch(ac()) },
      c: () =>  dispatch(c()) 

  }
};
