import {EditorState, SelectionState} from 'draft-js';

const MoveSelectionToEnd = (editorState) => {
    const content = editorState.getCurrentContent();
    const blockMap = content.getBlockMap();
    const key = blockMap.last().getKey();
    const length = blockMap.last().getLength();
    const selection = new SelectionState({
        anchorKey: key,
        anchorOffset: length,
        focusKey: key,
        focusOffset: length,
    });
    return EditorState.acceptSelection(editorState, selection);
};
export default MoveSelectionToEnd;