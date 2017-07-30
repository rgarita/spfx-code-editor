import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'spFxCodeEditorStrings';
import SpFxCodeEditor from './components/SpFxCodeEditor';
import { ISpFxCodeEditorProps } from './components/ISpFxCodeEditorProps';
import { ISpFxCodeEditorWebPartProps } from './ISpFxCodeEditorWebPartProps';

export default class SpFxCodeEditorWebPart extends BaseClientSideWebPart<ISpFxCodeEditorWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpFxCodeEditorProps > = React.createElement(
      SpFxCodeEditor,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
