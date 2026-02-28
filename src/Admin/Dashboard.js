import { createRoot } from 'react-dom/client';

import './dashboard.scss';
import App from './Component/App';
import { dashboardInfo } from './utilsData/data';

document.addEventListener('DOMContentLoaded', () => {
	const dashboardEl = document.getElementById('vgbDashboard');
	const info = JSON.parse(dashboardEl.dataset.info);

	createRoot(dashboardEl).render(<App {...dashboardInfo(info)} />);

	dashboardEl.removeAttribute('data-info');
});