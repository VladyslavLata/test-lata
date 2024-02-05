import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { ItemA } from 'pages/ItemA';

const ItemB = lazy(() => import('pages/ItemB'));
const ItemC = lazy(() => import('pages/ItemC'));
const ItemD = lazy(() => import('pages/ItemD'));
const ItemE = lazy(() => import('pages/ItemE'));
const ItemF = lazy(() => import('pages/ItemF'));
const ItemG = lazy(() => import('pages/ItemG'));
const ItemH = lazy(() => import('pages/ItemH'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ItemA />} />
        <Route path="item_b" element={<ItemB />} />
        <Route path="item_c" element={<ItemC />} />
        <Route path="item_d" element={<ItemD />} />
        <Route path="item_e" element={<ItemE />} />
        <Route path="item_f" element={<ItemF />} />
        <Route path="item_g" element={<ItemG />} />
        <Route path="item_h" element={<ItemH />} />
      </Route>
    </Routes>
  );
};
