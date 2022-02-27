import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import Step1 from "./pages/Step1";
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';

const App:FC = () => {
  return (
    <>
      <Routes>
          <Route path="2" element={<Step2 />} />
          <Route path="3" element={<Step3 />} />
          <Route path="4" element={<Step4 />} />
          <Route path="*" element={<Step1 />} />
      </Routes>
    </>
  );
}

export default App;
