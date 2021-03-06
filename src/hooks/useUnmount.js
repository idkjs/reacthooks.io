const name = `useUnmount`;

const implementation = `const useUnmount = unmount => {
  useEffect(
    () => () => {
      if (unmount) unmount();
    },
    []
  );
};`;

const usage = `function Demo() {
  useUnmount(() => console.log("UNMOUNTED"));
  return null;
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useUnmount.md`;

const description = `This hook calls a unmount callback, when the component is un-mounted.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}