useEffect(() => {
  // Correct logic to update the state only once
  setCounter(counter + 1);
}, []);