import { getDefaultState } from './helpers';

export const setChildRoute = (state, param) => {
  state.workflowGraph.childRoute = param.route;
  state.workflowGraph.hasChildBtn = true;
  state.workflowGraph.childBtnText = param.btnText;
};

export const newExecutionRoute = (state, route) => {
  state.workflowGraph.newExecutionId = route;
  state.workflowGraph.hasChildBtn = !state.workflowGraph.hasChildBtn;
};

export const setPreviousExecutionRoute = (state, route) => {
  state.workflowGraph.parentRoute = route;
  state.workflowGraph.parentBtnText = 'previous execution';
};

export const toggleChildBtn = (state) => {
  state.workflowGraph.hasChildBtn = false;
};

export const setParentRoute = (state, route) => {
  state.workflowGraph.parentRoute = route;
};

export const resetState = (state) => {
  Object.assign(state, getDefaultState());
};
