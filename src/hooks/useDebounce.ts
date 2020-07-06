import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<boolean>(false);

    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(true);
            }, delay);

            return () => {
                setDebouncedValue(false);
                clearTimeout(handler);
            };
        },
        [value, delay]
    );

    return debouncedValue;
}
