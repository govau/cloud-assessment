/*! @gov.au/callout v2.0.8 */
/***************************************************************************************************************************************************************
 *
 * Callout function
 *
 * Use callout to notify and alert users of important snippets of information.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * Default callout
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  description      - A description of the content of the callout for a11y
 * @param  {string}  children         - Anything inside
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUcallout = ({ dark, alt, description, children, className = '', ...attributeOptions }) => (
	<section
		className={ `au-callout ${ className }${ dark ? ' au-callout--dark' : '' }${ alt ? ' au-callout--alt' : '' }` }
		aria-label={ description }
		{ ...attributeOptions }
	>
		{ children }
	</section>
);

AUcallout.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	description: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};


/**
 * Calendar callout
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  description      - A description of the content of the callout for a11y
 * @param  {string}  subline          - The subline of the event, optional
 * @param  {string}  datetime         - The datetime of the event as ISO datetime
 * @param  {string}  time             - The time that appears on the page
 * @param  {string}  name             - The name of the event, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const AUcalloutCalendar = ({ dark, alt, description, subline, datetime, time, name, className = '', ...attributeOptions }) => (
	<section
		className={ `au-callout au-callout--calendar-event ${ className }${ dark ? ' au-callout--dark' : '' }${ alt ? ' au-callout--alt' : '' }` }
		aria-label={ description }
		{ ...attributeOptions }
	>
		{ subline && <span className="au-callout--calendar-event__lede">{ subline }</span> }
		<time className="au-callout--calendar-event__time" dateTime={ new Date( datetime ).toJSON() }>{ time }</time>
		{ name && <span className="au-callout--calendar-event__name">{ name }</span> }
	</section>
);

AUcalloutCalendar.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	description: PropTypes.string.isRequired,
	subline: PropTypes.string,
	datetime: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	name: PropTypes.string,
	className: PropTypes.string,
};
