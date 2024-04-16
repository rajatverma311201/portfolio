interface NavigationContainerProps {
    children: React.ReactNode;
}

export const NavigationContainer: React.FC<NavigationContainerProps> = ({
    children,
}) => {
    return <>{children}</>;
};
