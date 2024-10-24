// Importar los contextos necesarios
import { AuthProvider } from '../context/AuthContext';
import { MetadataProvider } from '../context/MetadataContext';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <MetadataProvider>
                <Component {...pageProps} />
            </MetadataProvider>
        </AuthProvider>
    );
}

export default MyApp;
