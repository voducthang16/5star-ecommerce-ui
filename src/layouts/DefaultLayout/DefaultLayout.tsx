import Header from '~/layouts/components/Header';

interface DefaultLayoutProps {
    Children: React.ComponentType;
}

function DefaultLayout({ Children }: DefaultLayoutProps) {
    return (
        <div>
            <Header />
            <main>
                <Children />
            </main>
        </div>
    );
}

export default DefaultLayout;
