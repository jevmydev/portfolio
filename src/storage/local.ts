interface StorageProps {
    key: string;
    value?: string | object;
    isJSON?: boolean;
}

export const setStorage = ({ key, value }: StorageProps) => {
    const valueToString = JSON.stringify(value);
    return localStorage.setItem(key, valueToString);
};

export const getStorage = ({ key, isJSON = false }: StorageProps) => {
    const value = localStorage.getItem(key);
    if (!value) return null;

    return isJSON ? JSON.parse(value) : value;
};
