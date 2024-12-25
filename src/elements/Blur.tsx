interface BlurProps {
    isFullScreen?: boolean;
}

export const Blur = ({ isFullScreen }: BlurProps) => {
    const blurFullScreenClass = isFullScreen ? "w-full p-12" : "p-32";
    return <div className={`${blurFullScreenClass} absolute -z-10 blur-3xl opacity-20 bg-gradient-to-r from-primary-purple to-primary-pink`}></div>;
};

export default Blur;
