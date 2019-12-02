import * as React from 'react'

interface IContextProps {
  state: null;
  dispatch: ({type}:{type:string}) => void;
}

const RestoServiceContext = React.createContext()

export default RestoServiceContext
