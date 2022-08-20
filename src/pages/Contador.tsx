import { useDispatch, useSelector } from "react-redux";
import { ReducersContador } from "../reducers/index";
import {
  sumar,
  restar,
  sumar5,
  restar5,
  reset,
} from "../actions/contadorActions";

export const Contador = () => {
  const { contador } = useSelector((state: ReducersContador) => state);
  const dispatch = useDispatch();
  return (
    <div className="m-4 flex items-center flex-col">
      <p className="text-3xl text-purple-600 bold">Contador: {contador}</p>
      <nav className="mt-3">
        <button
          className="py-2 px-4 border border-transparent shadow-md text-md font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-3"
          onClick={() => dispatch(sumar5(5))}
        >
          +5
        </button>
        <button
          className="py-2 px-4 border border-transparent shadow-md text-md font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-3"
          onClick={() => dispatch(sumar())}
        >
          +1
        </button>
        <button
          className="py-2 px-4 border border-transparent shadow-md text-md font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-75 disabled:bg-slate-300 disabled:hover:bg-none mr-3"
          onClick={() => dispatch(reset())}
          disabled={contador === 0}
        >
          reset
        </button>
        <button
          className="py-2 px-4 border border-transparent shadow-md text-md font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-75 disabled:bg-slate-300 disabled:hover:bg-none mr-3"
          onClick={() => dispatch(restar())}
          disabled={contador <= 0}
        >
          -1
        </button>

        <button
          className="py-2 px-4 border border-transparent shadow-md text-md font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-75 disabled:bg-slate-300 disabled:hover:bg-none mr-3"
          onClick={() => dispatch(restar5(5))}
          disabled={contador <= 0}
        >
          -5
        </button>
      </nav>
    </div>
  );
};

export default Contador;
