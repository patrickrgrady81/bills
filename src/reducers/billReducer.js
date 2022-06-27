export const ACTIONS = {
    ADD_BILL: "addBill"
}


export default function billReducer(state, action) {
    switch (action.type) {
      case "addBill":
        return [...state, {name: action.payload.name, amount: action.payload.amount}];
      default:
        return state;
    }
  }