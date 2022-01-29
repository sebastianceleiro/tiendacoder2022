
import React, {createContext} from 'react' ;

export const Context = createContext() ;  

export const CartContext = ({children}) => {
return (
<>
<Context.Provider value={[]}>
{children}
</Context.Provider>
</>);
}

