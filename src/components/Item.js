import React from 'react';
import { DocumentCard, DocumentCardActivity, Label, getInitials } from '@fluentui/react';

export default function EntityItem({ entity }) {
  const DocumentCardActivityPeople = [{ name: entity.name, initials: getInitials(entity.name) }];
  return (
    <DocumentCard onClickHref='http://bing.com'>
      <div className='document-preview-container'>
        {Object.keys(entity).map((k) => {
          return (
            <React.Fragment>
              <div className='flex'>
                <Label styles={{ root: { minWidth: '100px' } }}> {k} </Label>
                <Label> {entity[k]} </Label>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <DocumentCardActivity activity='Updated a few minutes ago' people={DocumentCardActivityPeople} />
    </DocumentCard>
  );
}
