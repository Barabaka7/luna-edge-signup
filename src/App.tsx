import "./App.css";
import { ProgressIndicator } from "./components/ProgressIndicator";
import { OnboardingStats } from "./components/OnboardingStats";
import { WelcomeToChadForm } from "./components/WelcomeToChad";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <div className="hidden md:flex flex-col justify-between items-center gap-6 w-2/5 bg-blue-pattern pt-[10%] pb-[56px]">
        <ProgressIndicator />
        <OnboardingStats />
      </div>
      <div className="hidden md:flex flex-col justify-between items-center w-3/5 bg-doodle-pattern">
        <WelcomeToChadForm />
      </div>
    </div>
  );
}

export default App;
