import React from 'react';
import { getComponentConstantsForLanguage } from '../../../utils/utils';
import { WithLanguage } from '../../HOCs';
import Child from '../Child';
import CONSTANTS from './../../../constants';

const { LANGUAGE_CONSTANTS } = CONSTANTS;

const SubParent = ({ language }) => {
  let SUB_PARENT_LANGUAGE_CONSTANTS = getComponentConstantsForLanguage(
    LANGUAGE_CONSTANTS,
    'SUB_PARENT',
    language
  );
  return (
    <div>
      <h2>{SUB_PARENT_LANGUAGE_CONSTANTS.HEADER}</h2>
      <Child />
    </div>
  );
}

export default WithLanguage(SubParent);