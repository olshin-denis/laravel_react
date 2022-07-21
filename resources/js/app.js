
import './bootstrap';
import { createRoot } from 'react-dom/client';
import App from "./jsx/app.jsx"
import AuthContainer from "./jsx/components/authComponents/authContainer";
import AppContext from "./jsx/context/appContext";


const container = document.getElementById('App')
if (container) {
    const root = createRoot(container)
    root.render(
            <App/>
        // <AuthContainer/>
        // <AppContext/>
    )
    // console.log('mount')
}
