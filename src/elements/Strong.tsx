interface StrongTypes {
    children: string;
}

export const Strong = ({ children }: StrongTypes) => {
    return <strong className="text-slate-800 dark:text-slate-200">{children}</strong>;
};

export default Strong;
