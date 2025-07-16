import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import { SelfAssessmentPage } from "./screens/SelfAssessmentPage";
import { NewPage } from "./screens/NewPage";
import { Questiontwo } from "./screens/Questiontwo/Questiontwo";
import { Questionthree } from "./screens/Questionthree";
import { Questionfour } from "./screens/Questionfour";
import { Questionfive } from "./screens/Questionfive";
import { Questionsix } from "./screens/Questionsix";
import { AssessmentOverview } from "./screens/AssessmentOverview";
import { HomepageItteration } from "./screens/HomepageItteration";
import { Frame } from "./screens/HomepageItteration/sections/Frame";

import { Movingforward } from "./screens/Movingforward";
import { ResourcesCategories } from "./screens/ResourcesCategories";
import { EducationModule } from "./screens/EducationModule";
import { Whythismatters } from "./screens/Whythismatters";
import { ModuleSubCategory } from "./screens/ModuleSubCategory";
import { ModuleLearningObjective } from "./screens/ModuleLearningObjective";
import { ModuleLearningIntro } from "./screens/ModuleLearningIntro";
import { DefinitionsAndTerminology } from "./screens/DefinitonsAndTerminology";
import { DefinitionsAndTerminology_1 } from "./screens/DefinitionsAndTerminology_1";
import { WeightBiasRecognition } from "./screens/WeightBiasRecognition";
import { KeyAspects } from "./screens/KeyAspects";
import { FactorsAndCauses } from "./screens/FactorsandCauses";
import { ImpactOnPatients } from "./screens/ImpactOnPatients";
import { ImpactReflection } from "./screens/ImpactReflection";
import DietAdvice from "./screens/DietAdvice/DietAdvice";
import { ViewReflection } from "./screens/ViewReflection";

import { CTScanner } from "./screens/CTScanner";
import { ChangingYourAppearance } from "./screens/ChangingYourAppearance";
import { EDTrolley } from "./screens/EDTrolley";
import { GoodCarePractices } from "./screens/GoodCarePractices";
import { LowCalSandwich } from "./screens/LowCalSandwich";
import { Minibus } from "./screens/Minibus";
import { Physio } from "./screens/Physio";
import { CaseScenarios } from "./screens/CaseScenarios";
import { HowItWorks } from "./screens/HowItWorks";
import { HealthcareBarriers } from "./screens/HealthcareBarriers";
import { HealthcareExpectations } from "./screens/HealthcareExpectations";
import { HealthcareProfessionals } from "./screens/HealthcareProfessionals";
import { PatientScenarioHowItWorks } from "./screens/PatientScenarioHowItWorks";
import { Preface } from "./screens/Preface";
import { YouWillExplore } from "./screens/YouWillExplore";
import { SGSceneOne } from "./screens/SGSceneOne";
import { SGQ1 } from "./screens/SGQ1";
import { SGSceneTwo } from "./screens/SGSceneTwo";
import { SGQ2 } from "./screens/SGQ2";
import { SGSceneThree } from "./screens/SGSceneThree";
import { SGQ3 } from "./screens/SGQ3";
import { SGSceneFour } from "./screens/SGSceneFour";
import { SGQ4 } from "./screens/SGQ4";
import { SGSceneFive } from "./screens/SGSceneFive";
import { SGQ5 } from "./screens/SGQ5";
import { ScenarioReflection } from "./screens/ScenarioReflection";
import { ModuleComplete } from "./screens/ModuleComplete";
import { WeightBiasResources } from "./screens/WeightBiasResources";
import { UnconsciousBiasResources } from "./screens/UnconsciousBiasResources";
import { SIResources } from "./screens/SIResources";
import { ConvoResources } from "./screens/ConvoResources";
import { UnderstandingUnconsciousBias } from "./screens/UnderstandingUnconsciousBias";
import { Module2Intro } from "./screens/Module2Intro";
import { Module2LearningIntro } from "./screens/Module2LearningIntro";
import { UnconsciousDefinition } from "./screens/UnconsciousDefinition";
import { NeuroScience } from "./screens/NeuroScience";
import { HowBiasForms } from "./screens/HowBiasForms";
import { HowBiasForms2 } from "./screens/HowBiasForms2";
import { BiasIsHarmful } from "./screens/BiasIsHarmful";
import { TypesOfUB } from "./screens/TypesOfUB";
import { TypesOfUB2 } from "./screens/TypesOfUB2";
import { TDH } from "./screens/TDH";
import { TDHReflection } from "./screens/TDHReflection";
import { UnconsciousBiasQuiz } from "./screens/UnconsciousBiasQuiz";
import { SubtleWays } from "./screens/SubtleWays";
import { SubtleSigns } from "./screens/SubtleSigns";
import { SelfReflectionChecklist } from "./screens/SelfReflectionChecklist";
import { RecognisingBiasInYourself } from "./screens/RecognisingBiasInYourself";
import { CommonTriggers } from "./screens/CommonTriggers";
import { BiasReflectionJournal } from "./screens/BiasReflectionJournal";
import { MiniSelfCheck } from "./screens/MiniSelfCheck";
import { BiasSelfCheck } from "./screens/BiasSelfCheck";
import { ToolsToSurfaceUB } from "./screens/ToolsToSurfaceUB";

function App() {
  return (
    <Router>
      {/* ✨ Scroll reset component — add once, anywhere inside <Router> */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<SelfAssessmentPage />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/question-two" element={<Questiontwo />} />
        <Route path="/question-three" element={<Questionthree />} />
        <Route path="/question-four" element={<Questionfour />} />
        <Route path="/question-five" element={<Questionfive />} />
        <Route path="/question-six" element={<Questionsix />} />
        <Route path="/AssessmentOverview" element={<AssessmentOverview />} />
        <Route path="/Whythismatters" element={<Whythismatters />} />
        <Route path="/Movingforward" element={<Movingforward />} />
        <Route path="/ResourcesCategories" element={<ResourcesCategories />} />
        <Route path="/WeightBiasResources" element={<WeightBiasResources />} />
        <Route path="/SIResources" element={<SIResources />} />
        <Route path="/ConvoResources" element={<ConvoResources />} />
        <Route path="/EducationModule" element={<EducationModule />} />
        <Route path="/UnderstandingUnconsciousBias" element={<UnderstandingUnconsciousBias />} />
        <Route path="/ModuleSubCategory" element={<ModuleSubCategory />} />
        <Route path="/ModuleLearningObjective" element={<ModuleLearningObjective />} />
        <Route path="/ModuleLearningIntro" element={<ModuleLearningIntro />} />
        <Route path="/DefinitionsAndTerminology" element={<DefinitionsAndTerminology />} />
        <Route path="/DefinitionsAndTerminology_1" element={<DefinitionsAndTerminology_1 />} />
        <Route path="/WeightBiasRecognition" element={<WeightBiasRecognition />} />
        <Route path="/KeyAspects" element={<KeyAspects />} />
        <Route path="/FactorsAndCauses" element={<FactorsAndCauses />} />
        <Route path="/ImpactOnPatients" element={<ImpactOnPatients />} />
        <Route path="/DietAdvice" element={<DietAdvice />} />
        <Route path="/ImpactReflection" element={<ImpactReflection />} />
        <Route path="/HealthcareBarriers" element={<HealthcareBarriers />} />
        <Route path="/HealthcareExpectations" element={<HealthcareExpectations />} />
        <Route path="/HealthcareProfessionals" element={<HealthcareProfessionals />} />
        <Route path="/PatientScenarioHowItWorks" element={<PatientScenarioHowItWorks />} />
        <Route path="/Preface" element={<Preface />} />
        <Route path="/YouWillExplore" element={<YouWillExplore />} />
        <Route path="/SGSceneOne" element={<SGSceneOne />} />
        <Route path="/SGQ1" element={<SGQ1 />} />
        <Route path="/SGSceneTwo" element={<SGSceneTwo />} />
        <Route path="/SGQ2" element={<SGQ2 />} />
        <Route path="/SGSceneThree" element={<SGSceneThree />} />
        <Route path="/SGQ3" element={<SGQ3 />} />
        <Route path="/SGSceneFour" element={<SGSceneFour />} />
        <Route path="/SGQ4" element={<SGQ4 />} />
        <Route path="/SGSceneFive" element={<SGSceneFive />} />
        <Route path="/SGQ5" element={<SGQ5 />} />
        <Route path="/ScenarioReflection" element={<ScenarioReflection />} />
        <Route path="/ModuleComplete" element={<ModuleComplete />} />
        <Route path="/ViewReflection" element={<ViewReflection />} />
        <Route path="/CTScanner" element={<CTScanner />} />
        <Route path="/ChangingYourAppearance" element={<ChangingYourAppearance />} />
        <Route path="/EDTrolley" element={<EDTrolley />} />
        <Route path="/GoodCarePractices" element={<GoodCarePractices />} />
        <Route path="/LowCalSandwich" element={<LowCalSandwich />} />
        <Route path="/CaseScenarios" element={<CaseScenarios />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/Minibus" element={<Minibus />} />
        <Route path="/Physio" element={<Physio />} />
        <Route path="/UnconsciousBiasResources" element={<UnconsciousBiasResources />} />
        <Route path="/Module2Intro" element={<Module2Intro />} />
        <Route path="/Module2LearningIntro" element={<Module2LearningIntro />} />
        <Route path="/UnconsciousDefinition" element={<UnconsciousDefinition />} />
        <Route path="/NeuroScience" element={<NeuroScience />} />
        <Route path="/HowBiasForms" element={<HowBiasForms />} />
        <Route path="/HowBiasForms2" element={<HowBiasForms2 />} />
        <Route path="/BiasIsHarmful" element={<BiasIsHarmful />} />
        <Route path="/TypesOfUB" element={<TypesOfUB />} />
        <Route path="/TypesOfUB2" element={<TypesOfUB2 />} />
        <Route path="/TDH" element={<TDH />} />
        <Route path="/TDHReflection" element={<TDHReflection />} />
        <Route path="/UnconsciousBiasQuiz" element={<UnconsciousBiasQuiz />} />
        <Route path="/SubtleWays" element={<SubtleWays />} />
        <Route path="/SubtleSigns" element={<SubtleSigns />} />
        <Route path="/SelfReflectionChecklist" element={<SelfReflectionChecklist />} />
        <Route path="/RecognisingBiasInYourself" element={<RecognisingBiasInYourself />} />
        <Route path="/CommonTriggers" element={<CommonTriggers />} />
        <Route path="/BiasReflectionJournal" element={<BiasReflectionJournal />} />
        <Route path="/MiniSelfCheck" element={<MiniSelfCheck />} />
        <Route path="/BiasSelfCheck" element={<BiasSelfCheck />} />
        <Route path="/ToolsToSurfaceUB" element={<ToolsToSurfaceUB />} />
        <Route path="/HomepageItteration" element={<HomepageItteration />} />
        <Route path="/frame" element={<Frame />} />
      </Routes>
    </Router>
  );
}

export default App;
