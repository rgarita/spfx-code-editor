import * as React from 'react';
import styles from './SpFxCodeEditor.module.scss';
import { ISpFxCodeEditorProps } from './ISpFxCodeEditorProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

import * as brace from 'brace';
import ReactAce from 'react-ace';
import  'brace/mode/javascript';
import  'brace/theme/monokai';

export default class SpFxCodeEditor extends React.Component<ISpFxCodeEditorProps, void> {
  public render(): React.ReactElement<ISpFxCodeEditorProps> {
    return (
      <div>
        <CommandBar
        items={[]}
        />
      <ReactAce
      width="100%"
        mode="javascript"
            theme="monokai"
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling:  true }}
      />
      </div>
    );
  }
}
