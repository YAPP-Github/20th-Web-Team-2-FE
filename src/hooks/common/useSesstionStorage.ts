function useSesstionStorage() {
  function getValueFromSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }

  function setValueToSessionStorage(key: string, value: any) {
    return sessionStorage.setItem(key, value);
  }

  return {
    getValueFromSessionStorage,
    setValueToSessionStorage,
  };
}

export default useSesstionStorage;
