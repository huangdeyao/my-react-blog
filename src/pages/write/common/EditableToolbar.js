import React,{Component} from 'react';
import {PostEditor,EditableToolbarSticky,EditorButton,EditableToolbarSeparator,EditorButtonRight} from '../style';

class EditableToolbar extends Component{
    render(){
        return (
            <PostEditor>
                <EditableToolbarSticky>
                    <EditorButton><i className="iconfont">&#xe6e3;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe6f8;</i></EditorButton>
                    <EditableToolbarSeparator/>
                    <EditorButton><i className="iconfont">&#xe6e2;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe6f4;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe60c;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe6f1;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe6ec;</i></EditorButton>
                    <EditableToolbarSeparator/>
                    <EditorButton><i className="iconfont">&#xe627;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe616;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe607;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe6f0;</i></EditorButton>
                    <EditorButton><i className="iconfont">&#xe6e5;</i></EditorButton>
                    <EditorButtonRight><i className="iconfont">&#xe678;</i></EditorButtonRight>
                </EditableToolbarSticky>
            </PostEditor>
        )
    }
}

export default EditableToolbar;

