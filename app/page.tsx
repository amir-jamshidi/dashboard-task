import AppHeader from "./_components/templates/AppHeader";
import MainContent from "./_components/MainContent";
import Toolbar from "./_components/templates/Toolbar";

export default function Home() {
  return (
    <div className="bg-white flex flex-col divide-y divide-neutral">
      <AppHeader />
      <Toolbar />
      <MainContent />
    </div>
  );
}
