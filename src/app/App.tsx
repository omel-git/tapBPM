import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
