import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

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
            <Footer />
        </div>
    );
}

export default DefaultLayout;
