import React from 'react';
import { getComponentConstantsForLanguage } from '../../../utils/utils';
import { WithLanguage } from '../../HOCs';
import CardUser from '../CardUser';
import CONSTANTS from './../../../constants';

const { LANGUAGE_CONSTANTS } = CONSTANTS;

const WrapperCard = ({ language }) => {
  let WRAPPED_CARD_LANGUAGE_CONSTANTS = getComponentConstantsForLanguage(
    LANGUAGE_CONSTANTS,
    'WRAPPED_CARD',
    language
  );
  return (
    <div>
      <h2>{WRAPPED_CARD_LANGUAGE_CONSTANTS.HEADER}</h2>
      <CardUser />
    </div>
  );
};

export default WithLanguage(WrapperCard);
