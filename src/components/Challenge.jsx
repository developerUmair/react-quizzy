import React, { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;
  console.log(action);
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isActive: true,
        balance: 500,
      };
    case "depositAmount":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdrawAmount":
      return {
        ...state,
        balance:
          state.balance > 0 ? state.balance - action.payload : state.balance,
      };
    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "closeAccount":
      if (state.loan > 0 || state.balance > 0) {
        alert(
          "You cannot close the account while you have an outstanding loan or having balance!"
        );
        return state;
      }
      return { ...initialState };

    default:
      throw new Error("Unhandled Action type");
  }
}

const Challenge = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isActive, balance, loan } = state;
  console.log(isActive);
  return (
    <div>
      <h1>UseReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open Account
        </button>
      </p>
      <p>
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "depositAmount", payload: 150 })}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "withdrawAmount", payload: 50 })}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
        >
          Request a loan 5000
        </button>
      </p>
      <p>
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "payLoan" })}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          disabled={!isActive}
          onClick={() => dispatch({ type: "closeAccount" })}
        >
          Close Account
        </button>
      </p>
    </div>
  );
};

export default Challenge;
