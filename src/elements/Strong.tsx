interface StrongTypes {
    children: string;
}

export const Strong = ({ children }: StrongTypes) => {
    return <strong className="text-gray-800 dark:text-gray-200">{children}</strong>;
};

export default Strong;
