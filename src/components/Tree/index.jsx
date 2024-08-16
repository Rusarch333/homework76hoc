import React from 'react';
import { getComponentConstantsForLanguage } from '../../utils/utils';
import { WithLanguage } from '../HOCs';
import Parent from './Parent';
import CONSTANTS from './../../constants';

const { LANGUAGE_CONSTANTS } = CONSTANTS;

const Tree = ({ language }) => {
  let TREE_LANGUAGE_CONSTANTS = getComponentConstantsForLanguage(
    LANGUAGE_CONSTANTS,
    'TREE',
    language
  );
  return (
    <div>
      <h2>{TREE_LANGUAGE_CONSTANTS.HEADER}</h2>
      <Parent />
    </div>
  );
};

export default WithLanguage(Tree);
