import React from 'react';
import { getComponentConstantsForLanguage } from '../../../utils/utils';
import { WithLanguage } from '../../HOCs';
import SubParent from '../SubParent';
import CONSTANTS from './../../../constants';

const { LANGUAGE_CONSTANTS } = CONSTANTS;

const Parent = ({ language }) => {
  let PARENT_LANGUAGE_CONSTANTS = getComponentConstantsForLanguage(
    LANGUAGE_CONSTANTS,
    'PARENT',
    language
  );
  return (
    <div>
      <h2>{PARENT_LANGUAGE_CONSTANTS.HEADER}</h2>
      <SubParent />
    </div>
  );
}

export default WithLanguage(Parent);