interface StrongTypes {
    children: string;
}

export const Strong = ({ children }: StrongTypes) => {
    return <strong className="font-medium text-black dark:text-white">{children}</strong>;
};

export default Strong;
