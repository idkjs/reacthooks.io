const name = `useAsync`;

const implementation= `const useAsync = (fn, args) => {
  const [state, set] = useState({
    loading: true
  });
  const memoized = useCallback(fn, args);

  useEffect(
    () => {
      let mounted = true;
      const promise = memoized();

      promise.then(
        value => {
          if (mounted) {
            set({
              loading: false,
              value
            });
          }
        },
        error => {
          if (mounted) {
            set({
              loading: false,
              error
            });
          }
        }
      );

      return () => {
        mounted = false;
      };
    },
    [memoized]
  );

  return state;
};`;

const usage = `const fn = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve("RESOLVED");
    }, 1000);
  });

function Demo() {
  const { loading, value, error } = useAsync(fn);

  return (
    <div>{loading ? <div>Loading...</div> : <div>Value: {value}</div>}</div>
  );
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useAsync.md`;

const description = `This hook resolves an async function or a function that returns a promise.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}