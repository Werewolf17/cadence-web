import Component from './component';
import { getDefaultState } from './helpers';
import * as mutations from './mutations';

const mapStateToProps = {
  childRoute: state => state.workflowGraph.childRoute,
  newExecutionId: state => state.workflowGraph.newExecutionId,
  hasChildBtn: state => state.workflowGraph.hasChildBtn,
  childBtnText: state => state.workflowGraph.childBtnText,
  parentBtnText: state => state.workflowGraph.parentBtnText,
  parentRoute: state => state.workflowGraph.parentRoute,
};

const mutationsToEvents = {
  setChildRoute: 'setChildRoute',
  setPreviousExecutionRoute: 'setPreviousExecutionRoute',
  toggleChildBtn: 'toggleChildBtn',
};

const container = connect({
  mapStateToProps,
  mutationsToEvents,
})('WorkflowGraph', Component);

export {
  container,
  getDefaultState,
  mutations,
};
