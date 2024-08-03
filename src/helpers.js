export const addString = (value = '') => {
    const formattedString = value?.replaceAll(/[^0-9.-]/g, ',');

    const errorValues = [];

    const totalValue = formattedString?.split(',').reduce((acc = 0, curr, index) => {
        if (index > 1 || (parseInt(acc) < 1000)) {
          if (acc) {
            if (curr) {
              if (parseInt(acc) < 0) {
                errorValues.push(acc);
        
                return acc;
              }
        
              if (parseInt(curr) < 0) {
                errorValues.push(curr); 
        
                return acc;
              }
            
              if (curr < 1000) {
                return (parseInt(acc) + parseInt(curr));
              }

              return acc;
            }
    
            return acc;
          }
          
          return curr;
        }
        
        return curr;
    });

    let errorMsg = '';

    if (errorValues?.length > 0) {
      errorMsg = `negative numbers not allowed ${errorValues?.join(',')}`;
    };

    return { totalValue, errorMsg };
};
