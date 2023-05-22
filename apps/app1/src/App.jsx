import { Button } from '@lump/ui';
import { sum, subtract } from '@lump/utils/src';

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Hello World</Button>
      <div>
        Sum: <code>sum(500, 20)</code> = {sum(500, 20)}
      </div>
      <div>
        Subtract: <code>sum(500, 20)</code> = {subtract(500, 20)}
      </div>
    </>
  );
};

export default App;
