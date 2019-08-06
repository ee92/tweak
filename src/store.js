import createGlobal from 'react-use-global';
import uuid from "uuid";

const createElement = (type, ...children) => {
   const id = uuid.v4();
   return {type, children, id};
};

const initialState = {
   elements: createElement('div',
      createElement('text', 'hello world'),
      createElement('div',
         createElement('text', 'there a div below me'),
         createElement('div',
            createElement('text', 'hey look at me')
         )
      )
   ),
   currentElementId: null
};

const useGlobal = createGlobal(initialState);

export default useGlobal;