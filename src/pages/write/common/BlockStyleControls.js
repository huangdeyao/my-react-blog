import React from 'react';
import StyleButton from './StyleButton';
import { BLOCK_TYPES } from './enum';
import {RichEditorControls} from '../style'
const BlockStyleControls = props => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
    return (
        <RichEditorControls>
            {BLOCK_TYPES.map(type => (
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            ))}
        </RichEditorControls>
    );
};

export default BlockStyleControls;
