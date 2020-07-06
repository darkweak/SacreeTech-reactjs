import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

export const useLoading = (promises: (() => Promise<AxiosResponse|void>)[]) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all(promises.map(p => p())).then(() => setIsLoading(false))
  }, [promises]);

  return isLoading;
};
