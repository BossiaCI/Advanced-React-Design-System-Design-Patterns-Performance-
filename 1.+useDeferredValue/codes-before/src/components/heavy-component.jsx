const HeavyComponent = ({ keyword }) => {
  const init = performance.now();
  while (init > performance.now() - 100) {
    //Slowing down the component on purpose.
  }
  return (
    <>
      <h2>I am a slow component</h2>
      {keyword}
    </>
  );
};

export default HeavyComponent;
