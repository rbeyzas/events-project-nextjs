/* eslint-disable import/no-unresolved */
import Layout from '@/components/Layout/Layout';
import '../styles/globals.css';
import Notification from '@/components/Notifications/Notification';
import { NotificationContextProvider } from '@/store/NotificationContext';

function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Notification title="Test" message="Test" status="success" />
      </Layout>
    </NotificationContextProvider>
  );
}

export default App;
