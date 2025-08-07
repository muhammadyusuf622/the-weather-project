import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { MainLayout } from '../shared'
import { HomePage } from '../pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={< HomePage />} />
      </Route>
    </Routes>
  );
}

export default App
