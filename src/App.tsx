import AppLayout from "./shared/layout/AppLayout";
import ProviderLayout from "./shared/layout/ProviderLayout";
/* ===================================================================== */
/*🧩 APP - Main App Window*/

const App = () => {
	return (
		<ProviderLayout>
			<AppLayout />
		</ProviderLayout>
	);
};

export default App;
