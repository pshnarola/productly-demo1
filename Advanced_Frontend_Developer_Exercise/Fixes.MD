### Code Refactor Points:

1. **Removed line** `import jwt-decode from "jwt-decode"`
	Because, wrong module import & no requirement of it in this component.

2. **Removed line** `const [user, setUser] = useState(null)`
Because, user state is not utilized in this component.

3. **Better Error Handling** : Handling **Network and response errors** using `try{},catch(){}` pattern.

4. **Separation of concern** : Separated Fetch products logic function and called it in useEffect().

5. **State cleanup** : For Syncing state data with user action we have to clean states after component unmount.
*In our case we have cleaned products and error states*
    `useEffect(() => {
    fetchProducts();
    //clean up previous states on unmount.
    return () => {
      setProducts([]);
      setError("");
    };
  }, [fetchProducts]);`
	
7. **Removed code snippet** : Setting up user state through decoding jwt token and inspecting user information while token not present in localstorage. But in this component the user state is not used anywhere.

8. **Optimized performance** : Used `useMemo()` hook at progressbar width calculation. Now, it will only calculate progress width when products length changes otherwise it will take memoize value.

9. **Fixed Array iteration without type check**: Added check for product having type array before iterating it.

	
