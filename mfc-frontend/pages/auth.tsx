// auth.tsx

import { useEffect, useState } from 'react';
import Router from 'next/router';

// const authenticate = (Component: React.ComponentType<any>) => {
//   const AuthenticatedComponent = (props: any) => {
//     let isAuthenticated : boolean =  false; 
//     useEffect(() => {
//       if (typeof window !== 'undefined') {
//         // Access localStorage here
//         isAuthenticated = window.localStorage.getItem('authUserInfo') ? true : false;
//         if (!isAuthenticated) {
//           Router.push('/login'); // Redirect to login page if not authenticated
//         }
//       }
//     }, []);
   
//     return isAuthenticated ? <Component {...props} /> : null;
//   };

//   return AuthenticatedComponent(Component);
// };

// export default authenticate;





const authenticate = (Component: React.ComponentType<any>) => {
  const AuthenticatedComponent = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuthentication = () => {
        if (typeof window !== 'undefined') {
          const authUserInfo = window.localStorage.getItem('authUserInfo');
          const isAuthenticated = authUserInfo !== null;
          if (!isAuthenticated) {
            Router.push('/login'); // Redirect to login page if not authenticated
          } else {
            setIsAuthenticated(true);
          }
        }
      };

      checkAuthentication();
    }, []);

    return isAuthenticated ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default authenticate;
