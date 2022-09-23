import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Navigator from '~/layouts/components/Navigator';

interface DefaultLayoutProps {
    Children: React.ComponentType;
}

function DefaultLayout({ Children }: DefaultLayoutProps) {
    return (
        <>
            <Header />
            <main>
                <Children />
            </main>
            <Footer />
            <Navigator />
        </>
    );
}

export default DefaultLayout;
