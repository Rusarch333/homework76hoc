import React from 'react';
import { getComponentConstantsForLanguage } from '../../../utils/utils';
import { WithLanguage } from '../../HOCs';
import WrapperCard from '../WrapperCard';
import CONSTANTS from './../../../constants';

const { LANGUAGE_CONSTANTS } = CONSTANTS;

const Child = ({ language }) => {
  let CHILD_LANGUAGE_CONSTANTS = getComponentConstantsForLanguage(
    LANGUAGE_CONSTANTS,
    'CHILD',
    language
  );
  return (
    <div>
      <h2>{CHILD_LANGUAGE_CONSTANTS.HEADER}</h2>
      <WrapperCard />
    </div>
  );
}

export default WithLanguage(Child);
